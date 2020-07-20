import {combineReducers} from "redux";
import shoppingCartReducer from "./shoppingCartReducer";
import orderReducer from "./orderReducer";
import waiterOrderReducer from "./waiterOrderReducer";
import formReducer from "./formReducer";

export default combineReducers({
shoppingCartState: shoppingCartReducer,
    orderState: orderReducer,
    waiterOrderState: waiterOrderReducer,
    formState: formReducer
})
