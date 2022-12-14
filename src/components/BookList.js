import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';
import { removeBookEvent } from '../redux/books/books';

export const BookList = (props) => {
  const dispatch = useDispatch();

  const { books } = props;

  const handleTrash = (id) => {
    dispatch(removeBookEvent(id));
  };

  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} book={book} handleTrash={handleTrash} />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default BookList;
