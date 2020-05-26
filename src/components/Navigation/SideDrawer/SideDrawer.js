import React, {Fragment} from "react";
import {connect} from "react-redux"
import {productQuantity} from "../../../actions/productQuantity"
import {removeFromBasket} from "../../../actions/removeAction"
import './sideDrawer.css'
import {sendHttpRequest} from "../../../Fetch/useFetch";

const SideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }

   const submitCart = () => {
        console.log(props.shoppingCartProps);
      props.shoppingCartProps.listOfCurrentThings.forEach((order)=>
       {
           let variable = {...order,date:11,prepared:true,paid:false,mealID:order.id,userID:13};
           sendHttpRequest('POST', '/api/v1/guest/order', variable)
               .then(responseData => {
                   console.log(responseData);
               })
               .catch(err => {
                   console.log(err, err.data);
               });
       })

    }


    let productsInCart = [];

    productsInCart = props.shoppingCartProps.listOfCurrentThings.map((product) => {
        return (
            <Fragment key={product.id}>
                <div className="product">
                    <div className="deleteIcon"><ion-icon onClick={()=>props.removeFromBasket(props.shoppingCartProps.listOfCurrentThings,product)} name="close-circle"></ion-icon></div>
                    <div className="productName">{product.name}</div>
                </div>
                <div className="product_price">€{product.price},00</div>
                <div className="product_quantity">
                    <ion-icon name="arrow-back-circle-outline" onClick={()=>props.productQuantity(props.shoppingCartProps.listOfCurrentThings,product,"DECREASE")}></ion-icon>
                    <span>{product.quantity}</span>
                    <ion-icon name="arrow-forward-circle-outline" onClick={()=>props.productQuantity(props.shoppingCartProps.listOfCurrentThings,product,"INCREASE")}></ion-icon>
                </div>
                <div className="product_total">€{product.quantity * product.price},00</div>
            </Fragment>

        );
    });

    return (
        <div className={drawerClasses}>
            <div className="container_products">
                <div className="product_header">
                    <div className="product_title">PRODUCT </div>
                    <div className="header_price">PRICE </div>
                    <div className="header_quantity">QUANTITY </div>
                    <div className="header_total">TOTAL </div>
                </div>
                <div className="products">
                    {productsInCart}
                </div>
                <div className="basketTotalContainer">
                    <h4>Basket total:   </h4>
                    <h4>€{props.shoppingCartProps.shoppingCartCost},00</h4>

                </div>
                <button className="buttonToPay" onClick={() => submitCart()}>Pay for the order!</button>
            </div>
        </div>
    );
}

const mapStateToProps = state =>( {
    shoppingCartProps: state.shoppingCartState
})

export default connect(mapStateToProps,{productQuantity, removeFromBasket})(SideDrawer);