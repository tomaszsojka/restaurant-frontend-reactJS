import React from "react";

import classes from "../../Forms/Forms.module.css";
import {Login} from "../../Forms/AccessAccount/Login";
import {AddAccountForm} from "../../Forms/AddAccountForm";

export class AccessAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoginOpen: true, isRegisterOpen: false };
    }

    showLoginBox() {
        this.setState({
            isLoginOpen: true,
            isRegisterOpen: false
        });
    }

    showRegisterBox() {
        this.setState({
            isRegisterOpen: true,
            isLoginOpen: false
        });
    }

    render() {
        return (
            <div className="container">
                <div className={classes.mainContainer}>
                    <hr/>
                    <div className={classes.boxController}>
                        <div className={classes.controller + " " + (this.state.isLoginOpen ? classes.selectedController : "")}
                             onClick={this.showLoginBox.bind(this)}>
                            Login
                        </div>
                        <div className={classes.controller + " " + (this.state.isRegisterOpen ? classes.selectedController : "")}
                             onClick={this.showRegisterBox.bind(this)}>
                            Register
                        </div>
                    </div>
                    <div className={classes.boxContainer}>
                        {this.state.isLoginOpen && <Login/>}
                        {this.state.isRegisterOpen && <AddAccountForm title="Register" showLogin={this.showLoginBox.bind(this)}/>}

                    </div>
                </div>
            </div>
        );
    }
}