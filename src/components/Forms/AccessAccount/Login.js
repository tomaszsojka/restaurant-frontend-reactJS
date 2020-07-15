import React from "react";
import classes from "../Forms.module.css";
import {sendHttpRequest} from "../../../Fetch/useFetch";

import auth from "../../../Auth"
import {Redirect} from "react-router-dom";

export class Login extends React.Component {

    constructor(props) {
        super(props);
        let role = auth.getRole();
        this.state = {
            email : "",
            password: "",
            phoneNumber: "",
            errors: [],
            role: role
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
                if(elm !== err.elm) {
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
        let isError = false;
        if(this.state.email === "") {
            this.showValidationErr("email", "Email address cannot be empty");
            isError = true;
        }else if(this.state.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)==null) {
            this.showValidationErr("email", "Email is not valid")
            isError = true;
        }
        if(this.state.password === "") {
            this.showValidationErr("password", "Password cannot be empty");
            isError = true;
        }

        if(isError === false) {
           //TODO phone number is not visible
            sendHttpRequest('POST', '/api/v1/guest/login', this.state)
                .then(responseData => {
                    console.log(responseData);
                    auth.login(responseData.role, responseData.email, responseData.phoneNumber);
                    this.setState({role: responseData.role })
                })
                .catch(err => {
                    this.showValidationErr("email", " Invalid email or password.");
                    console.log(err, err);
                });

        }
    }

    render() {

        let emailErr = null, passwordErr = null;
        let role = this.state.role;

        for(let err of this.state.errors) {
            if(err.elm === "email") {
                emailErr = err.msg;
            }
            if(err.elm === "password") {
                passwordErr = err.msg;
            }
        }
        if (role === 'C')
            return <Redirect to='/client'/>;
        if (role === 'H')
            return <Redirect to='/chef'/>;
        if (role === 'W')
            return <Redirect to='/waiter'/>;
        if (role === 'A')
            return <Redirect to='/admin'/>;

        return (
                <div className={classes.innerContainer}>
                    <div className={classes.header}>
                        Login
                    </div>
                    <div className={classes.box}>

                        <div className={classes.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
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