// import { useProgressStyles } from "@chakra-ui/react";
import { ADD_BLOG_SUCCESS, DELETE_BLOG_SUCCESS, GET_BLOGS_ERROR, GET_BLOGS_REQUEST, GET_BLOGS_SUCCESS, UPDATE_BLOG_SUCCESS } from "../actionTypes";

const initialState = {
    isLoading: false,
    blogs: []
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_BLOGS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_BLOGS_SUCCESS: {
            return { ...state, isLoading: false, blogs: payload }
        }
        case ADD_BLOG_SUCCESS:{
            return { ...state, isLoading:false,blogs:[...state.blogs,payload] }
        }
        case UPDATE_BLOG_SUCCESS:{
            return {...state, isLoading:false}
        }
        case DELETE_BLOG_SUCCESS:{
            return {...state, isLoading:false}
        }
        case GET_BLOGS_ERROR: {
            return {...state, isLoading: false }
        }
        default: {
            return state;
        }
    };
}