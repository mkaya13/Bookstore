import { v4 as uuidv4 } from 'uuid';

// ACTIONS
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [];

export default function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
          id: uuidv4(),
        },
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export const addBook = (payload) => ({ type: ADD, payload });

export const removeBook = (id) => ({ type: REMOVE, id });
