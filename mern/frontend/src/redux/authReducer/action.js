import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";


// import { USER_ERROR, USER_REQUEST, USER_SUCESS } from "../actionTypes";

export const register = (user) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return fetch("https://backend-mock-6-ao4x.onrender.com/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.err);
      dispatch({ type:LOGIN_ERROR, payload: error.err });
    });
};


export const login = (user) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
  return   fetch("https://backend-mock-6-ao4x.onrender.com/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem("token", data.token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data.token
            })
        })
        .catch(err => {

            dispatch({
                type: LOGIN_ERROR,
                payload: err
            })
            console.log(err)
        });
}
