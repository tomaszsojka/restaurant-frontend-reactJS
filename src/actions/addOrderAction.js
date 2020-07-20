import { ADD_ORDER} from "./types";

export const addOrder = (listOfOrdersChef, neworder) => {

    const timestamp = Date.now();
    console.log(timestamp);
    let variable = timestamp;
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
       listOfOrdersChef.push({...neworder, variable});
    }

    return(dispatch) => {

        dispatch({
            type: ADD_ORDER,
            payload: {listOfOrdersChef}
        })
    }

};


