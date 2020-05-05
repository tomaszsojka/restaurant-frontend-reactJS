import React from "react";
import classes from "./AccessAccount.module.css";

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) {}

    render() {
        return (
                <div className={classes.innerContainer}>
                    <div className={classes.header}>
                        Login
                    </div>
                    <div className={classes.box}>

                        <div className={classes.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" className={classes.loginInput} placeholder="Email"/>
                        </div>

                        <div className={classes.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                className={classes.loginInput}
                                placeholder="Password"/>
                        </div>

                        <button
                            type="button"
                            className={classes.loginBtn}
                            onClick={this.submitLogin.bind(this)}>Login</button>
                    </div>
                </div>
        );
    }

}