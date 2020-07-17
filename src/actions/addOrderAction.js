import { ADD_ORDER} from "./types";

export const addOrder = (listOfOrders, neworder) => {

    let tableAlreadyinList = false;
    listOfOrders.forEach((order) =>
    {
        if(order.table === neworder.table) {
            tableAlreadyinList = true;
            neworder.listOfCurrentThings.forEach((products) =>{
                order.listOfCurrentThings.push({...products})
            })
        }
    });

    if(!tableAlreadyinList){
        listOfOrders.push({...neworder});
    }

    return(dispatch) => {

        dispatch({
            type: ADD_ORDER,
            payload: {listOfOrders}
        })
    }

}


