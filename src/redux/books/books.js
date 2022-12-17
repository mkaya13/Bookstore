import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ACTIONS
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const LOAD = 'bookstore/books/LOAD';

const initialState = {
  books: [],
};

export function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${ADD}/fulfilled`:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case `${REMOVE}/fulfilled`:
      return {
        books: [...state.books.filter((item) => item.id !== action.payload)],
      };
    case `${LOAD}/fulfilled`:
      return {
        books: [action.payload],
      };
    default:
      return state;
  }
}

export const LoadBooks = createAsyncThunk(
  LOAD,
  async () => {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZR0nQylHgbvq3hdVIrjx/books');
    const books = Object.keys(response.data).map((key) => ({
      item_id: key,
      ...response.data[key][0],
    }));
    return books;
  },
);

export const addBookEvent = createAsyncThunk(
  ADD,
  async (book) => {
    const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZR0nQylHgbvq3hdVIrjx/books',
      {
        item_id: book.item_id,
        title: book.title,
        author: book.author,
        category: book.category,
      });
    return response.data;
  },
);

export const RemoveBookEvent = createAsyncThunk(
  REMOVE,
  async (id) => {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZR0nQylHgbvq3hdVIrjx/books/${id}`,
      {
        item_id: id,
      });
    return { id };
  },
);

export default {
  booksReducer,
  addBookEvent,
  LoadBooks,
  RemoveBookEvent,
};
