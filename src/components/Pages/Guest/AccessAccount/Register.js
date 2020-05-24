import React from "react";
import classes from "./AccessAccount.module.css";
import {sendHttpRequest} from "../../../../Fetch/useFetch"

export class Register extends React.Component {
//TODO if we have time password strength bar
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            phoneNumber: "",
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
                if(elm !== err.elm) {
                    newArr.push(err);
                }
            }
            return {errors: newArr};
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
        this.clearValidationErr("email");

    }

    onPhoneNumberChange(e) {
        this.setState({
            phoneNumber: e.target.value
        });
        this.clearValidationErr("phoneNumber");
    }
    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
        this.clearValidationErr("password");

    }

    submitRegister(e) {
        let isError = false;
        if(this.state.phoneNumber === "") {
            this.showValidationErr("phoneNumber", "Phone number cannot be empty");
            isError = true;
        }else if(this.state.phoneNumber.match(/^[0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{3}$/)==null) {
            this.showValidationErr("phoneNumber", "Phone number is not valid")
            isError = true;
        }
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
            //TODO check if its ok

            sendHttpRequest('POST', '/api/v1/guest/client', this.state)
                .then(responseData => {
                    console.log(responseData);
                })
                .catch(err => {
                    console.log(err, err.data);
                });

            this.props.showLogin();
        }
    }

    render() {

        let phoneNumberErr = null, emailErr = null, passwordErr = null;

        for(let err of this.state.errors) {
            if(err.elm === "phoneNumber") {
                phoneNumberErr = err.msg;
            }
            if(err.elm === "email") {
                emailErr = err.msg;
            }
            if(err.elm === "password") {
                passwordErr = err.msg;
            }
        }

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
                                required
                                placeholder="Phone Number"
                                onChange={this.onPhoneNumberChange.bind(this)}
                            />
                            <small className={classes.passingError}>{ phoneNumberErr ? phoneNumberErr : "" }</small>
                        </div>

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
                            onClick={this.submitRegister.bind(this)}>Register</button>
                    </div>
                </div>
        );
    }
}