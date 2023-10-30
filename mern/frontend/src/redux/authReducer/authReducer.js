import { LOGIN_ERROR, LOGIN_REQUEST,LOGIN_SUCCESS } from "../actionTypes";


const initialState = {
    isLoading: false,
    isError: "",
    isAuth: false,
    token: ""
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST: {
            return { ...state, isLoading: true }
        }
        case LOGIN_SUCCESS: {
            return{ ...state, isLoading: false,isAuth:true,token:payload}
        }
        case LOGIN_ERROR: {
            return {...state, isLoading: false, isError: payload }
        }
        default: {
            return initialState;
        }
    }
}

