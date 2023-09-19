import { RECIPE_REQUEST_FAILURE, RECIPE_REQUEST_PENDING, RECIPE_REQUEST_SUCCESS } from "./actionTypes"

const initialState = {
  isLoading: false,
  isError: false,
  recipe: [],
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case RECIPE_REQUEST_PENDING: {
      return ({ ...state, isLoading: true })
    }
    case RECIPE_REQUEST_FAILURE: {
      return ({ ...state, isLoading: false, isError:true })
    }
    case RECIPE_REQUEST_SUCCESS: {
      return ({isLoading: false, isError: false, recipe: payload })
    }
    default:
      return ({...state})
  }
}
