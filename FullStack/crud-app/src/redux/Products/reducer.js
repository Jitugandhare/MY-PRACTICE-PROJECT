import { POST_PRODUCT_SUCCESS, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType";


const initialState = {
  products:[],
  isLoading: false,
  isError: false,
};

export const reducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return {}
    case PRODUCT_SUCCESS:
      return { }
    case POST_PRODUCT_SUCCESS:
      return {}
    default:
      return state;
  }
};
