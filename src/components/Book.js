import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

export default class Book extends React.PureComponent {
  render() {
    const { book } = this.props;
    const { title, author, id } = book;
    const { handleTrash } = this.props;
    return (
      <li>
        {title}
        &nbsp; &nbsp; &nbsp;
        {author}
        &nbsp; &nbsp; &nbsp;
        <button type="button" onClick={() => handleTrash(id)}>
          Trash
        </button>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  handleTrash: PropTypes.func.isRequired,
};
