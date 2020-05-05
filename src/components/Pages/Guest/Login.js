import React from "react";
import classes from "./AccessAccount.module.css";

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password: "",
            errors: []
        };
    }

    showValidationErr(elm, msg) {
        this.setState((prevState) => ({
                errors: [
                    ...prevState.errors,
                    {elm, msg}
                ]
            })
        );
    }

    clearValidationErr(elm) {
        this.setState((prevState) => {
            let newArr = [];
            for(let err of prevState.errors) {
                if(elm != err.elm) {
                    newArr.push(err);
                }
            }
            return {errors: newArr};
        });
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
        this.clearValidationErr("password");

    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
        this.clearValidationErr("email");

    }


    submitLogin(e) {
        if(this.state.email == "") {
            this.showValidationErr("email", "Email address cannot be empty");
        }
        if(this.state.password == "") {
            this.showValidationErr("password", "Password cannot be empty");
        }
    }

    render() {

        let phoneNumberErr = null, emailErr = null, passwordErr = null;

        for(let err of this.state.errors) {
            if(err.elm == "email") {
                emailErr = err.msg;
            }
            if(err.elm == "password") {
                passwordErr = err.msg;
            }
        }

        return (
                <div className={classes.innerContainer}>
                    <div className={classes.header}>
                        Login
                    </div>
                    <div className={classes.box}>

                        <div className={classes.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                className={classes.loginInput}
                                placeholder="Email"
                                onChange={this.onEmailChange.bind(this)}
                            />
                            <small className={classes.passingError}>{ emailErr ? emailErr : "" }</small>
                        </div>

                        <div className={classes.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                className={classes.loginInput}
                                placeholder="Password"
                                onChange={this.onPasswordChange.bind(this)}
                            />
                            <small className={classes.passingError}>{ passwordErr ? passwordErr : "" }</small>
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