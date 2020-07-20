import { ADD_ORDER} from "./types";

export const addOrder = (listOfOrdersChef, neworder) => {

    let tableAlreadyinList = false;
    listOfOrdersChef.forEach((order) =>
    {
        if(order.table === neworder.table) {
            tableAlreadyinList = true;
            neworder.listOfCurrentThings.forEach((products) =>{
                order.listOfCurrentThings.push({...products})
            })
        }
    });

    if(!tableAlreadyinList){
        listOfOrdersChef.push({...neworder});
    }

    return(dispatch) => {

        dispatch({
            type: ADD_ORDER,
            payload: {listOfOrdersChef}
        })
    }

};


