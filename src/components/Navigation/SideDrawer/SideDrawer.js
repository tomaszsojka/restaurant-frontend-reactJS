import React, {Fragment} from "react";
import {connect} from "react-redux"
import './sideDrawer.css'


const SideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }
    console.log(props.shoppingCartProps);
    let productsInCart = [];

    Object.keys(props.shoppingCartProps.listOfCurrentThings).forEach(function (item) {
        console.log(item);
    });

    productsInCart = props.shoppingCartProps.listOfCurrentThings.map((product) => {
        return (
                <Fragment>
                    <div className="product"><ion-icon name="close-circle"></ion-icon>
                        <span className="sm_hide">{product.name}</span>
                    </div>
                    <div className="product_price">{product.price}</div>
                    <div className="product_quantity">
                        <ion-icon name="arrow-back-circle-outline"></ion-icon>
                        <span clas>{product.count}</span>
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                    </div>
                    <div className="product_total">€{product.count * product.price},00</div>
                </Fragment>

        );
    });

    return (
        <div className={drawerClasses}>
        <div className="container_products">
            <div className="product_header">
                <h1 className="product_title">PRODUCT </h1>
                <h1 className="header_price">PRICE </h1>
                <h1 className="header_quantity">QUANTITY </h1>
                <h1 className="header_total">TOTAL </h1>
            </div>
            <div className="products">
                {productsInCart}
            </div>
            <div className="basketTotalContainer">
                <h4>Basket total</h4>
                <h4>69,00euro</h4>
            </div>
        </div>
        </div>
    );
}

const mapStateToProps = state =>( {
    shoppingCartProps: state.shoppingCartState
})

export default connect(mapStateToProps,{})(SideDrawer);