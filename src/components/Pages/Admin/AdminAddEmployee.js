import React from "react";
import classes from "../../Forms/Forms.module.css";
import {AddAccountForm} from "../../Forms/AddAccountForm";
import {Redirect} from "react-router-dom";

export class AdminAddEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            role : "chef",
            isRedirect : false
        };
    }

    componentDidMount() {
        let state = this.props.location.state;
        console.log(state);
        this.setState({role : state.role});
        console.log(this.state.role);

    }

    redirectToEmployeeList() {
        this.setState({isRedirect : true});
    }


    render() {
        let roleName = this.state.role;
        let isRedirect = this.state.isRedirect;

        if(isRedirect) {
            return <Redirect to="/admin_employees"/>;
        }
        return (
            <div className="container">
                <div className={classes.mainContainer}>
                    <hr/>
                    <div className={classes.boxContainer}>
                        <AddAccountForm title="Add Employee" userRole={roleName} showLogin={this.redirectToEmployeeList.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}