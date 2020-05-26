import React from "react";
import classes from "./Footer.module.css"

export const Footer = (props) => {
    return(
        <div className={classes.out}>
            <div className={classes.in}>
                <h5> &copy; Restaurant web app</h5>
            </div>
        </div>
    );
};