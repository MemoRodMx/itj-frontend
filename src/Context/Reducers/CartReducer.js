import { Types } from "../Actions/CartActions";

const countItems = (state) => {
  state.items_count = state.items.reduce((p, c) => (p += c.quantity), 0);

  return state;
};

export const cartInitalState = {
  items: [],
  items_count: 0,
};

export function cartReducer(state, action) {
  let result;

  switch (action.type) {
    case Types.ADD:
      const existsIndex = state.items.findIndex(
        (el) => el._id === action.payload._id
      );

      let data = action.payload;

      if (existsIndex !== -1) {
        state.items[existsIndex].quantity++;
      } else {
        data.quantity = 1;
        state.items.push(data);
      }

      break;

    case Types.REMOVE:
      const removeIndex = state.items.findIndex(
        (el) => el._id === action.payload._id
      );

      console.log("remove", removeIndex);

      if (removeIndex !== -1) {
        delete state.items[removeIndex];
      }

      break;

    case Types.CLEAR:
      break;

    case Types.UPDATE:
      state = countItems(state);
      break;

    default:
      return state;
  }

  if (action.type !== Types.UPDATE) {
    state = countItems(state);
  }

  result = { ...state };

  return result;
}
