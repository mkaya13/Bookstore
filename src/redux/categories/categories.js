// ACTIONS
const STATUS = 'bookstore/categories/STATUS';

const initialState = [];

export default function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export const checkStatus = (payload) => ({ type: STATUS, payload });
