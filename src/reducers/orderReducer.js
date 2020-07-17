import {ADD_ORDER, RESET_ORDERS} from "../actions/types"

const initialState = {
    listOfOrders: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case RESET_ORDERS:
            return{
                ...state,
                listOfOrders: []
            };
        case ADD_ORDER:

            return{
                ...state,
                listOfOrders: action.payload.listOfOrders
            };

        default:
            return state;
    };
}