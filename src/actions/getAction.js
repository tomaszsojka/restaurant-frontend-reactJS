import { GET_NUMBERS_BASKET} from "./types";

export const getNumberFromCart = () => {
    return(dispatch) => {
        console.log("Getting from Basket");
        dispatch({
            type: GET_NUMBERS_BASKET
        })
    }
}