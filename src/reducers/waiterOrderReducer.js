import {ADD_ORDER_WAITER, RESET_ORDER_WAITER} from "../actions/types"

const initialState = {
    listOfOrders: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case RESET_ORDER_WAITER:
            return{
                ...state,
                listOfOrders: []
            };
        case ADD_ORDER_WAITER:

            return{
                ...state,
                listOfOrders: action.payload.listOfOrderWaiter
            };

        default:
            return state;
    };
}