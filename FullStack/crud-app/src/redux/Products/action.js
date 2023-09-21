import axios from "axios";
import {
  PRODUCT_REQUEST,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
} from "./actionType";

export const postProduct = (newProduct) =>  (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  // dispatch({ type: PRODUCT_REQUEST });
  axios.post("http://localhost:8080/products", newProduct)
    .then((res) => {
      dispatch({ type: POST_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });

 
 
};
