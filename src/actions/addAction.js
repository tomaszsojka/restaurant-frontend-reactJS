import { ADD_PRODUCT_BASKET} from "./types";

export const addToBasket = (cartItems, product) => {

    let productAlreadyInCart = false
    let costOfTheProduct = product.price;
    cartItems.forEach((meal) =>
    {
        if(meal.id === product.id) {
            meal.count++;
            productAlreadyInCart = true;
        }
    });

    if(!productAlreadyInCart){
        cartItems.push({...product,count:1});
    }

    return(dispatch) => {

        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: {cartItems, costOfTheProduct}
        })
    }

}


