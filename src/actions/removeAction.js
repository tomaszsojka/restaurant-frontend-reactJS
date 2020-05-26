import {REMOVE_PRODUCT_BASKET} from "./types";


export const removeFromBasket = (cartItems, product) => {

    let numberOfProducts;
    let i=0;
    let costOfTheProducts;
    cartItems.forEach((meal) =>
    {
        if(meal.id === product.id) {
            numberOfProducts = meal.quantity;
            costOfTheProducts = meal.quantity * meal.price;
            cartItems.splice(i,1);

        }
        i++;
    });

    return(dispatch) => {

        dispatch({
            type: REMOVE_PRODUCT_BASKET,
            payload: {cartItems, numberOfProducts, costOfTheProducts}
        })
    }

}


