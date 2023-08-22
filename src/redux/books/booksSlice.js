
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },];

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/abc123/books');
  return response.data;
});

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
      addBook: (state, action) => {
        state.push(action.payload); // Use state.push to add a book to the array
      },
      removeBook: (state, action) => {
        // Use state.filter directly on the array
        state = state.filter((book) => book.item_id !== action.payload);
        return state; // Return the updated state
      },
    },
  });

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
