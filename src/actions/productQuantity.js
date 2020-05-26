import { QUANTITY_BASKET} from "./types";

export const productQuantity = (cartItems, product, increase) =>{
    let value
    let costOfTheProduct = product.price;
    cartItems.forEach((meal) =>
    {
        if(meal.id === product.id) {
            if(increase === "INCREASE") {
                value = 1;
                meal.quantity++;

            }
            else {
                value=-1;
                if(meal.quantity !=0) {
                    meal.quantity--;
                }
                else {
                    costOfTheProduct = 0;
                    value = 0;
                }
            }
        }
    });



    return(dispatch) => {

        dispatch({
            type: QUANTITY_BASKET,
            payload: {cartItems,value, costOfTheProduct}
        })
    }
}