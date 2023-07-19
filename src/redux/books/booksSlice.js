import { createSlice } from '@reduxjs/toolkit';
import books from '../Books';

const initialState = {
  books,
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
