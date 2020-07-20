import { ADD_ORDER, ADD_ORDER_WAITER} from "./types";
import React from "react";

export const finalizeTransaction = (listOfOrderWaiter, neworder) => {





    let i = 0;
    listOfOrderWaiter.forEach((order) =>
    {
        if(order.table === neworder.table) {
            listOfOrderWaiter.splice(i,1);
        }
        i++;
    });

    return(dispatch) => {
        dispatch({
            type: ADD_ORDER_WAITER,
            payload: {listOfOrderWaiter}
        })
    }

};


