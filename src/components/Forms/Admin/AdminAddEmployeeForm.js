import React from "react";
import classes from "../Forms.module.css";
import {AddAccountForm} from "../AddAccountForm";

export class AdminAddEmployeeForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className={classes.mainContainer}>
                    <hr/>
                    <div className={classes.boxContainer}>
                        <AddAccountForm title="Add Employee"/>
                    </div>
                </div>
            </div>
        );
    }
}