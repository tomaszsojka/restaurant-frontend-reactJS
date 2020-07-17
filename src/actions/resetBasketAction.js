import {RESET_BASKET,RESET_ORDERS} from "./types";


export const resetBasket = () => {


    return(dispatch) => {

        dispatch({
            type: RESET_BASKET,
                RESET_ORDERS
        })
    }

}


