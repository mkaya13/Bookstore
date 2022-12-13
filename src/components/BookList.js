import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

export default class BookList extends React.PureComponent {
  render() {
    const { books, handleTrash } = this.props;
    /* eslint-disable react/prop-types */
    return (
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book} handleTrash={handleTrash} />
        ))}
      </ul>
    );
  }
}

BookList.propTypes = {
  handleTrash: PropTypes.func.isRequired,
  books: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
