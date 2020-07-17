import React, {Fragment} from "react";
import {connect} from "react-redux"
import {productQuantity} from "../../../actions/productQuantity"
import {removeFromBasket} from "../../../actions/removeAction"
import {resetBasket} from "../../../actions/resetBasketAction";
import './sideDrawer.css'
import {addOrder} from "../../../actions/addOrderAction";
import {sendHttpRequest} from "../../../Fetch/useFetch";

const SideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }

   const submitCart = () => {
        console.log(props.shoppingCartProps);
/*
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
*/

        /////////////////ADDING TO CHEF ///////////

            props.addOrder(props.orderProps.listOfOrders, {table: "table3", waiter: "www", customerid:"111", listOfCurrentThings:props.shoppingCartProps.listOfCurrentThings });
        console.log(props.orderProps);
          props.resetBasket()

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
                <div>
                   <label for ="table"> Which table would you like to order for? </label>
                    <select id="table">
                        <option value="table1">Table 1</option>
                        <option value="table2">Table 2</option>
                        <option value="table3">Table 3</option>
                        <option value="table4">Table 4</option>
                        <option value="table5">Table 5</option>
                        <option value="table6">Table 6</option>
                    </select>
                </div>
                <div className="basketTotalContainer">
                    <h4>Basket total:   </h4>
                    <h4>€{props.shoppingCartProps.shoppingCartCost},00</h4>
                </div>
                <button className="buttonToPay" onClick={() => submitCart("table1")}>Pay for the order!</button>
            </div>
        </div>
    );
}

const mapStateToProps = state =>( {
    shoppingCartProps: state.shoppingCartState,
    orderProps: state.orderState
})

export default connect(mapStateToProps,{productQuantity, removeFromBasket, resetBasket, addOrder})(SideDrawer);