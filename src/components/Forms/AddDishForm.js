import React from "react";
import classes from "./Forms.module.css"
import {sendHttpRequest} from "../../Fetch/useFetch"

/**
 * class for adding dishes by admin
 */
export class AddDishForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            description: "",
            price: "",
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

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
        this.clearValidationErr("name");

    }

    onDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
        this.clearValidationErr("description");
    }

    onPriceChange(e) {
        this.setState({
            price: e.target.value
        });
        this.clearValidationErr("price");

    }

    submitAddDish(e) {
        let isError = false;
        if(this.state.name === "") {
            this.showValidationErr("name", "Name cannot be empty");
            isError = true;
        }
        if(this.state.price === "") {
            this.showValidationErr("price", "Price cannot be empty");
            isError = true;
        }else if(this.state.price.match(/^[0-9]+$/)==null) {
            this.showValidationErr("price", "Price is not valid")
            isError = true;
        }

        if(isError === false) {
            //TODO check if its ok

            var dishType = this.props.dishType;
            var path;
            if(dishType === "breakfast") {
                path = '/api/v1/admin/add_breakfast';
            }else if(dishType === "dinner") {
                path = '/api/v1/admin/add_dinner';
            }else if(dishType === "appetizer") {
                path = '/api/v1/admin/add_appetizer';
            }

            sendHttpRequest('POST', path, this.state)
                .then(responseData => {
                    console.log(responseData);
                    //if redirecting function is not passed as a prop variable is null
                    let submitRedirect = this.props.submitRedirect || null;
                    if(submitRedirect) {
                        this.props.submitRedirect();
                    }
                })
                .catch(err => {
                    this.showValidationErr("name", " A dish with the given name exists.");
                    console.log(err, err.data);
                });
        }
    }

    render() {

        let nameErr = null, typeErr = null, priceErr = null;

        for(let err of this.state.errors) {
            if(err.elm === "name") {
                nameErr = err.msg;
            }
            if(err.elm === "price") {
                priceErr = err.msg;
            }
        }

        return (
            <div className={classes.innerContainer}>
                <div className={classes.header}>
                    {this.props.title}
                </div>
                <div className={classes.box}>

                    <div className={classes.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            className={classes.loginInput}
                            placeholder="Name"
                            onChange={this.onNameChange.bind(this)}
                        />
                        <small className={classes.passingError}>{ nameErr ? nameErr : "" }</small>
                    </div>

                    <div className={classes.inputGroup}>
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            name="description"
                            className={classes.loginInput}
                            placeholder="Description (Optional)"
                            onChange={this.onDescriptionChange.bind(this)}
                        />
                    </div>
                    <div className={classes.inputGroup}>
                        <label htmlFor="price">Price</label>
                        <input
                            type="price"
                            name="price"
                            className={classes.loginInput}
                            placeholder="Price"
                            onChange={this.onPriceChange.bind(this)}
                        />
                        <small className={classes.passingError}>{ priceErr ? priceErr : "" }</small>
                    </div>
                    <button
                        type="button"
                        className={classes.loginBtn}
                        onClick={this.submitAddDish.bind(this)}>{this.props.title}</button>
                </div>
            </div>
        );
    }
}