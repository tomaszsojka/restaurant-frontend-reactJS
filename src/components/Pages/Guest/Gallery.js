import React from "react";
import classes from "./Gallery.module.css";

export class Gallery extends React.Component {
    render() {
        return (
            <div className={classes.mainContainer}>
                <img className={classes.image} src={process.env.PUBLIC_URL + "/menu1.jpg"} alt="" />
            </div>

        );
    }
}