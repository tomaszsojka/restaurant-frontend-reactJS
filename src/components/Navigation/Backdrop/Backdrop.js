import React from "react";
import classes from "./Backdrop.module.css"

const BackDrop = props => (
    <div className={classes.backdrop} onClick={props.click}></div>
);

export default BackDrop;