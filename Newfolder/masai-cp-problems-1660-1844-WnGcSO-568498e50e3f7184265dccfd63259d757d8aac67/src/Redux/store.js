import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as recipeReducer } from "./RecipeReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ recipeReducer, authReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
