import React from "react";
//TODO v
import classes from "./UserAccountDetails.module.css";
import {Button, Table} from "react-bootstrap";
import auth from "../../Auth";


export const UserAccountDetails = () => {

    return (
        <div className="container">
            <div>
                <br/>
                <h1>ACCOUNT DETAILS</h1>
                <div className={classes.elements}>
                    <Table responsive>
                        <tbody>
                        <tr>
                            <td>
                               Email
                            </td>
                            <td>
                                {auth.getEmail()}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Role
                            </td>
                            <td>
                                {auth.getRole()}
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}



