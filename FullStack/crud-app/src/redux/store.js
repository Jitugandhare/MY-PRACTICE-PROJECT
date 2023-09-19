import { combineReducers, legacy_createStore } from 'redux';
import { reducer as authreducer } from "./Authentication/reducer"
import {reducer as productreducer} from './Products/reducer'


const rootReducer = combineReducers({ authreducer, productreducer });
export const store =legacy_createStore(rootReducer)
    