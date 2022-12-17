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
      <div className="item-all-table">
        <li className="each-item">
          <span className="book-category">{category}</span>
          <span className="book-title">{title}</span>
          <span className="book-author">{author}</span>
          <div className="book-button-holder">
            <button className="book-button" type="button">
              Comments
            </button>
            <span>|</span>
            <button className="book-button" type="button" onClick={() => handleTrash(item_id)}>
              Remove
            </button>
            <span>|</span>
            <button className="book-button" type="button">
              Edit
            </button>
          </div>
        </li>
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70" />
              <circle cx="70" cy="70" r="70" />
            </svg>
            <div className="number">
              <h2>
                60
                <span>%</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="current-chapter-div">
          <h2 className="current-chapter">CURRENT CHAPTER</h2>
          <p className="chapter-count">CHAPTER 17</p>
          <button className="chapter-button" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
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
