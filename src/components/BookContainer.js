import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BookList } from './BookList';
import { InputBook } from './InputBook';
import '../index.css';
import { Categories } from './Categories';
import { LoadBooks } from '../redux/books/books';

export const TodoContainer = () => {
  const books = useSelector((state) => state.books.books[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadBooks());
  }, [dispatch]);

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
