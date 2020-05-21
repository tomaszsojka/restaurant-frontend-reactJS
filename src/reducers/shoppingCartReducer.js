import {ADD_PRODUCT_BASKET, QUANTITY_BASKET, REMOVE_PRODUCT_BASKET} from "../actions/types";
import {GET_NUMBERS_BASKET} from "../actions/types";


const initialState = {
    shoppingCartNumber: 0,
    shoppingCartCost: 0,
    listOfCurrentThings: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "RESET":
            return{
                initialState

            };
        case ADD_PRODUCT_BASKET:

            return{
                   ...state,
                shoppingCartNumber: state.shoppingCartNumber + 1,
                shoppingCartCost: state.shoppingCartCost + action.payload.costOfTheProduct,
                listOfCurrentThings:  action.payload.cartItems

            };
        case QUANTITY_BASKET:
            return {
                ...state,
                shoppingCartNumber: state.shoppingCartNumber + action.payload.value,
                shoppingCartCost: state.shoppingCartCost + (action.payload.costOfTheProduct * action.payload.value),
                listOfCurrentThings: action.payload.cartItems
            };
        case REMOVE_PRODUCT_BASKET:
            return{
                ...state,
                shoppingCartNumber: state.shoppingCartNumber - action.payload.numberOfProducts,
                shoppingCartCost: state.shoppingCartCost - action.payload.costOfTheProducts,
                listOfCurrentThings: action.payload.cartItems
            };
        case GET_NUMBERS_BASKET:
            return {
                ...state
            };
        default:
            return state;
    };
}