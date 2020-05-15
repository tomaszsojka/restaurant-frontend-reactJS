import {applyMiddleware, combineReducers, createStore} from "redux";

import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import shoppingCartReducer from "./reducers/shoppingCartReducer";

const middleware = [thunk];

export default createStore(
    combineReducers({shoppingCartState: shoppingCartReducer}),
    {},
    composeWithDevTools(applyMiddleware(...middleware)));