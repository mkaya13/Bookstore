import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import '../index.css';
import { addBookEvent, LoadBooks } from '../redux/books/books';

export const InputBook = () => {
  const [inputBook, setInputBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    setInputBook({
      ...inputBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    if (inputBook.title.trim()) {
      const bookObj = {
        item_id: uuidv4(),
        title: inputBook.title,
        author: inputBook.author,
        category: inputBook.category,
      };

      await dispatch(addBookEvent(bookObj));
      await dispatch(LoadBooks());
      setInputBook({
        title: '',
        author: '',
        category: '',
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('Please write a title');
    }
  };

  return (
    <div className="div-form">
      <hr className="hr-line" />
      <h2 className="form-header"> Add a New Book</h2>
      <form className="form-container">
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
        <select
          type="text"
          className="input-category"
          placeholder="Add Category"
          value={inputBook.category}
          name="category"
          onChange={onChange}
        >
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button onClick={handleAddBook} type="button" className="chapter-button">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default { InputBook };
