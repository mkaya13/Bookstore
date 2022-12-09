import React from 'react';
import '../index.css';

export default class InputBook extends React.PureComponent {
  render() {
    return (
      <form className="form-container">
        <h2> Add a Book</h2>
        <input
          className="input-title"
          type="text"
          placeholder="Add Title"
          name="title"
        />
        <input
          className="input-author"
          type="text"
          placeholder="Add Author"
          name="author"
        />
        <button type="button" className="input-submit">
          Submit
        </button>
      </form>
    );
  }
}
