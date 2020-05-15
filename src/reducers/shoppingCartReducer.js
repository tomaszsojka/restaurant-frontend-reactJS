import {ADD_PRODUCT_BASKET} from "../actions/types";
import {GET_NUMBERS_BASKET} from "../actions/types";

import {map} from "react-bootstrap/cjs/ElementChildren";

const initialState = {
    shoppingCartNumber: 0,
    shoppingCartCost: 0,
    listOfCurrentThings: []
}

export default (state = initialState, action) => {
    switch(action.type) {

        case ADD_PRODUCT_BASKET:

           console.log(state);
            return{
                ...state,
                shoppingCartNumber: state.shoppingCartNumber + 1,
                shoppingCartCost: state.shoppingCartCost,
                listOfCurrentThings: action.payload.cartItems
                }

        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        default:
            return state;
    };
}