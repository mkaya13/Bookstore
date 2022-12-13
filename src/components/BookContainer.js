import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';
import InputBook from './InputBook';
import '../index.css';

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { title: 'Outliers', author: 'Malcolm Gladwell', id: uuidv4() },
        {
          title: 'The Tipping Point',
          author: 'Malcolm Gladwell',
          id: uuidv4(),
        },
        { title: 'Rise of Nations', author: 'Daren Acemoğlu', id: uuidv4() },
      ],
    };
  }

  handleTrash = (id) => {
    const { books } = this.state;
    this.setState({
      books: [...books.filter((book) => book.id !== id)],
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="bookstore-items">
        <h2>Books in the Store</h2>
        <BookList books={books} handleTrash={this.handleTrash} />
        <InputBook />
      </div>
    );
  }
}
