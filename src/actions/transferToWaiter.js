import { ADD_ORDER, ADD_ORDER_WAITER} from "./types";
import React from "react";

export const transferToWaiter = (listOfOrdersChef, listOfOrderWaiter, neworder) => {




    let tableAlreadyinList = false;
    let i = 0;
    listOfOrderWaiter.forEach((order) =>
    {
        if(order.table === neworder.table) {

            tableAlreadyinList = true;
            neworder.listOfCurrentThings.forEach((products) =>{
                order.listOfCurrentThings.push({...products})
            })
        }
    });

    if(!tableAlreadyinList){
        listOfOrderWaiter.push({...neworder});
    }

    listOfOrdersChef.forEach((order) =>
    {
        if(order.table === neworder.table) {
            listOfOrdersChef.splice(i,1);
        }
        i++;
    });


    return(dispatch) => {
        dispatch({
            type: ADD_ORDER_WAITER,
            payload: {listOfOrderWaiter}
        })
        dispatch({
            type: ADD_ORDER,
            payload: {listOfOrdersChef}
        })
    }

};


