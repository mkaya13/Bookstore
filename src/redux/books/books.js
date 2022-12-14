import { v4 as uuidv4 } from 'uuid';

// ACTIONS
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [
  { title: 'Outliers', author: 'Malcolm Gladwell', id: uuidv4() },
  {
    title: 'The Tipping Point',
    author: 'Malcolm Gladwell',
    id: uuidv4(),
  },
  { title: 'Rise of Nations', author: 'Daren Acemoğlu', id: uuidv4() },
];

export function booksReducer(state = initialState, action = {}) {
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

export const addBookEvent = (payload) => ({ type: ADD, payload });

export const removeBookEvent = (id) => ({ type: REMOVE, id });

export default {
  booksReducer,
  addBookEvent,
  removeBookEvent,
};
