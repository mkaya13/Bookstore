import React from 'react';
import BookList from './BookList';
import InputBook from './InputBook';
import '../index.css';

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { title: 'Outliers', author: 'Malcolm Gladwell', id: '1' },
        { title: 'The Tipping Point', author: 'Malcolm Gladwell', id: '2' },
        { title: 'Rise of Nations', author: 'Daren Acemoğlu', id: '3' },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div className="bookstore-items">
        <h2>Books in the Store</h2>
        <BookList books={books} />
        <InputBook />
      </div>
    );
  }
}
