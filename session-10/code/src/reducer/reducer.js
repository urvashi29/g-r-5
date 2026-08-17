import { act } from "react";
import { SET_PRODUCTS, TOGGLE_WISHLIST } from "../action/actionType";

const initState = {
  products: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case TOGGLE_WISHLIST:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id == action.payload
            ? { ...product, liked: !product.liked }
            : product,
        ),
      };
    default:
      return state;
  }
};
