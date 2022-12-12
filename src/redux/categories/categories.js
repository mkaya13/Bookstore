// ACTIONS
const STATUS = 'my-app/widgets/STATUS';

export default function categoriesReducer(state = {}, action = {}) {
  switch (action.type) {
    case STATUS:
      return [
        {
          status: 'Under construction',
        },
      ];

    default:
      return state;
  }
}

export const statusWidgets = (widget) => ({ type: STATUS, widget });
