import { createSlice } from '@reduxjs/toolkit';
import books from '../Books';

const initialState = {
  books,
  isLoading: false,
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const removeindex = state.books.findIndex((book) => book.item_id === action.payload);
      if (removeindex !== -1) {
        state.books.splice(removeindex, 1);
      }
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
