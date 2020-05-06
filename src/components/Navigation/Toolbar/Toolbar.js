import React from "react";
import "./Toolbar.css";
import {NavLink} from "react-router-dom";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
const Toolbar = props => (
  <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_logo"><a href="/">LOGO</a></div>
            <div className="spacer" ></div>
            <div className={"toolbar_navigation_items"}>
                <ul>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className={"toolbar_navigation"}>
                <NavLink className="acc_btn" activeClassName="active_acc_btn" to="/access_account">
                    <button className="acc_btn" type="button">
                        Account
                    </button>
                </NavLink>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        </nav>
  </header>
);

export default Toolbar;