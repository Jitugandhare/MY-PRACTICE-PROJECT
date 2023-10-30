import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {reducer as authReducer} from './authReducer/authReducer'
import {reducer as blogReducer} from './blogReducer/blogReducer'
import thunk from 'redux-thunk';
const rootReducer=combineReducers({authReducer,blogReducer})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))