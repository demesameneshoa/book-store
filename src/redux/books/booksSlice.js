import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qHwCpmqB3iihMDgYafE0/books';
const fetchBooks = createAsyncThunk('books/fetchbooks', async () => {
  try {
    const response = await axios.get(
      url,
    );
    return response.data;
  } catch (error) {
    throw error.response;
  }
});

const baseURL = url;
const axiosInstance = axios.create({ baseURL });

const addBook = createAsyncThunk(
  'books/addBook',
  async (bookData, thunkAPI) => {
    try {
      const options = {
        method: 'POST',
        data: bookData,
      };

      const response = await axiosInstance.request(options);
      if (response.data === 'Created') {
        thunkAPI.dispatch(fetchBooks());
      }
      return bookData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId, thunkAPI) => {
    try {
      const options = {
        method: 'DELETE',
        url: `${url}/${bookId}`,
      };

      const response = await axios.request(options);
      if (response.data === 'The book was deleted successfully!') {
        thunkAPI.dispatch(fetchBooks());
      }
      return bookId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
        // console.log(state.books);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        // console.log(action.error.message);
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
export { fetchBooks, addBook, removeBook };
