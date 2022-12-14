import React from 'react';
import { useSelector } from 'react-redux';
import { BookList } from './BookList';
import { InputBook } from './InputBook';
import '../index.css';
import { Categories } from './Categories';

export const TodoContainer = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="bookstore-items">
      <h2>Books in the Store</h2>
      <BookList books={books} />
      <InputBook />
      <Categories />
    </div>
  );
};

export default TodoContainer;
