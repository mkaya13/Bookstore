import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../index.css';
import { addBookEvent } from '../redux/books/books';

export const InputBook = () => {
  const [inputBook, setInputBook] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    setInputBook({
      ...inputBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (inputBook.title.trim()) {
      setInputBook({
        title: '',
        author: '',
      });
      dispatch(
        addBookEvent({
          title: inputBook.title,
          author: inputBook.author,
        }),
      );
    } else {
      // eslint-disable-next-line no-alert
      alert('Please write a title');
    }
  };

  return (
    <div>
      <form className="form-container">
        <h2> Add a Book</h2>
        <input
          type="text"
          className="input-title"
          placeholder="Add Title"
          value={inputBook.title}
          name="title"
          onChange={onChange}
        />
        <input
          type="text"
          className="input-author"
          placeholder="Add Author"
          value={inputBook.author}
          name="author"
          onChange={onChange}
        />
        <button onClick={handleAddBook} type="button" className="input-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default { InputBook };
