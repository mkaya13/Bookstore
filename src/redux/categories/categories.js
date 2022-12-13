// ACTIONS
const STATUS = 'bookstore/categories/STATUS';

export default function categoriesReducer(state = {}, action = {}) {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export const updateStatus = (payload) => ({ type: STATUS, payload });
