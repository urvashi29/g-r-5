import { fetchProductsData } from "../services/fetchProductsData";
import { SET_PRODUCTS, TOGGLE_WISHLIST } from "./actionType";

// action creator (async)
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const data = await fetchProductsData();
      const updated = data.map((product) => ({
        ...product,
        liked: false,
      }));

      dispatch({
        type: SET_PRODUCTS,
        payload: updated,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const toggleWishlist = (id) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: TOGGLE_WISHLIST, payload: id });
    }, 500);
  };
};
