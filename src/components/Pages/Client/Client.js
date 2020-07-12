import React from "react";
import classes from "./Client.module.css";
import {Button, Table} from "react-bootstrap";
import {Link} from 'react-router-dom'

export class Client extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <div className={classes.elements}>
                        <Table responsive>
                            <tbody>
                            <tr>
                                <td>
                                    <Link to={"/client_details"}>
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
                                    <Link to={"/client_orders"}>
                                        <Button
                                            className="mt-auto font-weight-bold"
                                            variant="dark"
                                            block>
                                            My Orders
                                        </Button>
                                    </Link>
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



