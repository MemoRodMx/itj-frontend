import * as actionTypes from "./cart-types";

const INITIAL_STATE = {
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  let items;
  console.log(action.type);
  switch (action.type) {
    case actionTypes.ADD:
      items = [...state.items];

      console.log(items);

      const existsIndex = items.findIndex(
        (el) => el._id === action.payload._id
      );

      let data = action.payload;

      if (existsIndex !== -1) {
        items[existsIndex].quantity++;
      } else {
        data.quantity = 1;
        items.push(data);
      }
      return { ...state, items };

    case actionTypes.REMOVE:
      items = [...state.items];
      console.log(items);
      const removeIndex = items.findIndex(
        (el) => el._id === action.payload._id
      );

      console.log("remove", removeIndex);

      if (removeIndex !== -1) {
        items.splice(removeIndex, 1);
      }
      return { ...state, items };

    case actionTypes.CLEAR:
      return { ...state, items: [] };

    default:
      return state;
  }
};

export default cartReducer;
