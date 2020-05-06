import React from "react";
import classes from "./DrawerToogleButton.module.css";


const DrawerToggleButton = props => (
 <button className={classes.toggleButton} onClick={props.click}>
     <div className={classes.toggleButton_line}/>
     <div className={classes.toggleButton_line}/>
     <div className={classes.toggleButton_line}/>
 </button>

);

export default DrawerToggleButton;