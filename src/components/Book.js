import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

export default class Book extends React.PureComponent {
  render() {
    const { title, author } = this.props;
    return (
      <li>
        {title}
        {author}
      </li>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
