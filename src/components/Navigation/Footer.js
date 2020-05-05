import React from 'react';
import classes from "./Footer.module.css"

export const Footer = (props) => {
    return(
        <div className={classes.out}>
            <div className={classes.in}>
                <h1 > &copy; Restaurant web app</h1>
            </div>
        </div>
    );
};