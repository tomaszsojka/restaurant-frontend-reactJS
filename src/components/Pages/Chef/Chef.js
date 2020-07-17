import React from "react";
import classes from "./ChefPages.module.css"
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import auth from "../../../Auth";
import {Redirect} from "react-router-dom";

export class Chef extends React.Component {

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
        {/*TODO toast that user have been logged out*/}
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;

        if(isLoggedIn === false) {
            return <Redirect to='/'/>
        }



        return (
            <div className="container">
                <div>
                    <div className={classes.elements}>
                        <Table responsive>
                            <tbody>
                            <tr>
                                <td>
                                    <Link to={"/user_details"}>
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
                                    <Link to={"/chef_orders"}>
                                        <Button
                                            className="mt-auto font-weight-bold"
                                            variant="dark"
                                            block>
                                            Show All Orders
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



