import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

export default class Book extends React.PureComponent {
  render() {
    const { book, handleTrash } = this.props;
    const {
      title,
      author,
      // eslint-disable-next-line camelcase
      item_id,
      category,
    } = book;

    return (
      <li>
        {title}
        &nbsp;|&nbsp;
        {author}
        &nbsp;|&nbsp;
        {category}
        &nbsp;|&nbsp;
        <button type="button" onClick={() => handleTrash(item_id)}>
          Trash
        </button>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleTrash: PropTypes.func.isRequired,
};
