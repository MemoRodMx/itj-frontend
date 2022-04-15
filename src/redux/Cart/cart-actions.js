import * as actionTypes from "./cart-types";

export const addToCart = (item) => {
  return {
    type: actionTypes.ADD,
    payload: item,
  };
};

export const removeFromCart = (item_id) => {
  return {
    type: actionTypes.REMOVE,
    payload: { _id: item_id },
  };
};

export const clearAllFromCart = (item) => {
  return {
    type: actionTypes.CLEAR,
  };
};
