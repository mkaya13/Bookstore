import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

export default class BookList extends React.PureComponent {
  render() {
    const { books } = this.props;
    const { handleTrash } = this.props;
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
  books: PropTypes.map(PropTypes.string, PropTypes.element).isRequired,
};
