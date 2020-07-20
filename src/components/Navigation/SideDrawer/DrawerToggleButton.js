import React from "react";
import classes from "./DrawerToogleButton.module.css";


const DrawerToggleButton = props => (
    <ion-icon name="basket" onClick={props.click}></ion-icon>
);

export default DrawerToggleButton;