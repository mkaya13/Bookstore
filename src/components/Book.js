import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

export default class Book extends React.PureComponent {
  render() {
    const { book } = this.props;
    const { title, author } = book;
    return (
      <li>
        {title}
        &nbsp; &nbsp; &nbsp;
        {author}
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
