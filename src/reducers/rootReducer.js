import {combineReducers} from "redux";
import shoppingCartReducer from "./shoppingCartReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
shoppingCartState: shoppingCartReducer,
    orderState: orderReducer
})
