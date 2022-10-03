import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducer.js";

import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
    combineReducers({rootReducer}),
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;