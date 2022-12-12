import Redux from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = Redux.combineReducers({
  count: booksReducer,
  auth: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });

console.log(store.count.getState());
