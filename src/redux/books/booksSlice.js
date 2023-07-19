import { createSlice } from '@reduxjs/toolkit';
import bookslist from '../Books';

const initialState = bookslist;
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
