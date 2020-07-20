import React, {useEffect} from "react";
import "./Toolbar.css";
import {Link} from "react-router-dom";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
//import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {connect} from "react-redux";
import {getNumberFromCart} from "../../../actions/getAction";

function Toolbar (props) {

      useEffect(()=>{
          getNumberFromCart()
      },[]);
       return(
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_logo"><a href="/">LOGO</a></div>
                <div className="spacer"></div>
                <div className={"toolbar_navigation_items"}>
                    <ul>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className={"toolbar_navigation"}>
                    <Link to="/access_account">
                        <ion-icon color = "dark" name="person"></ion-icon>
                    </Link>
                    <DrawerToggleButton click={props.drawerClickHandler}/>

                    {props.shoppingCardProps.shoppingCartNumber}
                </div>
            </nav>
        </header>
    );
};

const mapStateToProps = state => ({
    shoppingCardProps: state.shoppingCartState
})

export default connect(mapStateToProps, {getNumberFromCart})(Toolbar);