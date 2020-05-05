import React from "react";
import classes from "./AccessAccount.module.css";


export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitRegister(e) {}

    render() {
        return (
                <div className={classes.innerContainer}>
                    <div className={classes.header}>
                        Register
                    </div>
                    <div className={classes.box}>

                        <div className={classes.inputGroup}>
                            <label htmlFor="phone_number">Phone Number</label>
                            <input
                                type="tel"
                                name="phone_number"
                                className={classes.loginInput}
                                pattern={"[0-9]{3}[ -]?[0-9]{2}[ -]?[0-9]{3}"}
                                placeholder="Phone Number"/>
                        </div>

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
                            onClick={this.submitRegister.bind(this)}>Register</button>
                    </div>
                </div>
        );
    }
}