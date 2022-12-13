// ACTIONS
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [];

export default function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return [action.payload, ...state];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
}

export const addBook = (payload) => ({ type: ADD, payload });

export const removeBook = (payload) => ({ type: REMOVE, payload });
