import React from "react";
import classes from "../../Forms/Forms.module.css";
import {Redirect} from "react-router-dom";
import {AddDishForm} from "../../Forms/AddDishForm";
import {AddAccountForm} from "../../Forms/AddAccountForm";

export class AdminAddDish extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type : "breakfast",
            isRedirect : false
        };
    }

    componentDidMount() {
        let state = this.props.location.state;
        console.log(state);
        this.setState({type : state.type});
        console.log(this.state.type);

    }

    redirectToDishList() {
        this.setState({isRedirect : true});
    }


    render() {
        let typeName = this.state.type;
        let isRedirect = this.state.isRedirect;

        if(isRedirect) {
            return <Redirect to="/admin_dishes"/>;
        }
        return (
            <div className="container">
                <div className={classes.mainContainer}>
                    <hr/>
                    <div className={classes.boxContainer}>
                        <AddDishForm title={"Add "+ typeName} dishType={typeName} submitRedirect={this.redirectToDishList.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}