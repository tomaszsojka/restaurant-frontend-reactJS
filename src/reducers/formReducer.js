import {ON_CHANGE_FORM, RESET_ORDERS} from "../actions/types"

const initialState = {
    form: "Table 1"

}

export default (state = initialState, action) => {

    switch(action.type) {

        case RESET_ORDERS:
            return{
                ...state,
                form: "Table 1"
            };
        case ON_CHANGE_FORM:
            return{
                ...state,
                form: action.payload.param

            };

        default:
            return state;
    };
}