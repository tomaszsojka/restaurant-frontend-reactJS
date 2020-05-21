import {combineReducers} from "redux";
import shoppingCartReducer from "./shoppingCartReducer";


export default combineReducers({
shoppingCartState: shoppingCartReducer
})
