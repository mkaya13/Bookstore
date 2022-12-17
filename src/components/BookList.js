import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Book from './Book';
import '../index.css';
import { LoadBooks, RemoveBookEvent } from '../redux/books/books';

export const BookList = (props) => {
  const dispatch = useDispatch();
  const { books } = props;

  console.log('Where is my books', books);

  const handleTrash = async (id) => {
    await dispatch(RemoveBookEvent(id));
    await dispatch(LoadBooks());
  };

  return (
    <ul className="each-book-table">
      {books
      && books.map((book) => (
        <Book key={book.item_id} book={book} handleTrash={handleTrash} />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BookList;
