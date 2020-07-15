import React from "react";
import classes from "../../Forms/Forms.module.css";
import {Redirect} from "react-router-dom";

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

    redirectToEmployeesList() {
        this.setState({isRedirect : true});
    }


    render() {
        let typeName = this.state.role;
        let isRedirect = this.state.isRedirect;

        if(isRedirect) {
            return <Redirect to="/admin_employees"/>;
        }
        return (
            <div className="container">
                <div className={classes.mainContainer}>
                    <hr/>
                    <div className={classes.boxContainer}>
                        <h1>Here adding dish</h1>
                    </div>
                </div>
            </div>
        );
    }
}