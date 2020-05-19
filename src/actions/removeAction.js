import {REMOVE_PRODUCT_BASKET} from "./types";


export const removeFromBasket = (cartItems, product) => {

    let productAlreadyInCart = false;
    let i=0;
    cartItems.forEach((meal) =>
    {
        if(meal.id === product.id) {
            cartItems.splice(0,1);
        }
        i++;
    });

    return(dispatch) => {

        dispatch({
            type: REMOVE_PRODUCT_BASKET,
            payload: {cartItems}
        })
    }

}


