import { QUANTITY_BASKET} from "./types";

export const productQuantity = (cartItems, product, increase) =>{
    let value
    cartItems.forEach((meal) =>
    {
        if(meal.id === product.id) {
            if(increase === "INCREASE") {
                value = 1
                meal.count++;
            }
            else {
                value=-1;
                meal.count--;
            }
            }
    });



    return(dispatch) => {

        dispatch({
            type: QUANTITY_BASKET,
            payload: {cartItems,value}
        })
    }
}