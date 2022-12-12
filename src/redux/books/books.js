// ACTIONS
const ADD = 'my-app/widgets/ADD';
const REMOVE = 'my-app/widgets/REMOVE';

export default function booksReducer(state = {}, action = {}) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          book: action.book,
          author: action.author,
        },
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
}

booksReducer.addWidgets = (widget) => ({ type: ADD, widget });

booksReducer.removeWidgets = (widget) => ({ type: REMOVE, widget });
