import React from "react";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import auth from "../../../Auth";
import {Redirect} from "react-router-dom";

import classes from "./Adminn.module.css"

export class Admin extends React.Component {

    constructor(props) {
        super(props);
        let isLoggedIn = true;
        this.state = {
            isLoggedIn: isLoggedIn
        };
    }

    doLogout() {
        auth.logout();
        this.setState({isLoggedIn : false});
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;

        if(isLoggedIn === false) {
            return <Redirect to='/'/>
        }

        return (
            <div className="container">
                <div>
                    <div className={classes.listElements}>
                        <Table responsive>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link to={"/user_details"}>
                                            {/* TODO */}
                                            <Button
                                                className="mt-auto font-weight-bold"
                                                variant="dark"
                                                block>
                                                Account Details
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to={"/admin_dishes"}>
                                            <Button
                                                className="mt-auto font-weight-bold"
                                                variant="dark"
                                                block>
                                                Manage dishes
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to={"/admin_employees"}>
                                            <Button
                                                className="mt-auto font-weight-bold"
                                                variant="dark"
                                                block>
                                                Manage employees
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Button
                                            className="mt-auto font-weight-bold"
                                            variant="dark"
                                            onClick={this.doLogout.bind(this)}
                                            block>
                                            Logout
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}



