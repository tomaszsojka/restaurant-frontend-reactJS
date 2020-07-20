import React, {Fragment} from "react";
import {connect} from "react-redux"
import {productQuantity} from "../../../actions/productQuantity"
import {removeFromBasket} from "../../../actions/removeAction"
import {resetBasket} from "../../../actions/resetBasketAction";
import './sideDrawer.css'
import {addOrder} from "../../../actions/addOrderAction";
import {sendHttpRequest} from "../../../Fetch/useFetch";
import auth from "../../../Auth";
import {onChange} from "../../../actions/onChange"
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import classes from "../../Forms/Forms.module.css";


const SideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }
    const handleOnChange = (e) => {
        props.onChange(e.target.value);
    }

    function Notfication(status){
        return(
            <div>
                {(() => {
                    switch(status) {
                        case 'C':
                            return <div>
                            <label htmlFor="Address">Please put you address here:</label>
                                <input
                            type = "Address"
                            name = "Address"
                            placeholder = "Address"
                            value={props.formProps.form}
                            onChange={handleOnChange}
                     /> </div>;
                        case 'W' || 'A':
                            return  <div>
                                <label>What table do you want to order?</label>
                                <select value={props.formProps.form} onChange={handleOnChange} >
                                    <option value="Table 1">Table 1</option>
                                    <option value="Table 2">Table 2</option>
                                    <option value="Table 3">Table 3</option>
                                    <option value="Table 4">Table 4</option>
                                    <option value="Table 5">Table 5</option>
                                    <option value="Table 6">Table 6</option>
                                </select>
                            </div>;
                        default:
                            return  <div>
                            <h1>You should log in, before taking an order!</h1>
                                <Link to="/access_account">
                                <Button>Proceed to log in</Button>
                                </Link>
                            </div>;
                    }
                })()}
            </div>
        );
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

            props.addOrder(props.orderProps.listOfOrders, {table: props.formProps.form, waiter: auth.getEmail(), customerid: auth.getEmail(), listOfCurrentThings:props.shoppingCartProps.listOfCurrentThings });
        console.log(props.orderProps);
          props.resetBasket()

    }


    let productsInCart = [];

    productsInCart = props.shoppingCartProps.listOfCurrentThings.map((product) => {
        return (
            <Fragment key={product.id}>
                <div className="product">
                    <div className="deleteIcon"><ion-icon onClick={()=>props.removeFromBasket(props.shoppingCartProps.listOfCurrentThings, product)} name="close-circle"></ion-icon></div>
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
                {Notfication(auth.getRole())};
                <div className="basketTotalContainer">
                    <h4>Basket total:   </h4>
                    <h4>€{props.shoppingCartProps.shoppingCartCost},00</h4>
                </div>
                <button className="buttonToPay" onClick={() => submitCart()}>Pay for the order!</button>

            </div>
        </div>
    );
};


const mapStateToProps = state =>( {
    shoppingCartProps: state.shoppingCartState,
    orderProps: state.orderState,
    formProps: state.formState,
})

export default connect(mapStateToProps,{productQuantity, removeFromBasket, resetBasket, addOrder, onChange})(SideDrawer);