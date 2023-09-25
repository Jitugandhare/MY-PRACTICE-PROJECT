import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const url = "https://reqres.in/api/login";

export const login = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post(url, payload)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};
