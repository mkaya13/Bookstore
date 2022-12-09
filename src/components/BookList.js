import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

export default class BookList extends React.PureComponent {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.string.isRequired,
};
