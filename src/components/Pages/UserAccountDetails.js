import React from "react";
//TODO v
import classes from "./UserAccountDetails.module.css";
import {Button, Table} from "react-bootstrap";
import auth from "../../Auth";


export const UserAccountDetails = () => {

    let r = auth.getRole();
    let role;
    switch (r) {
        case 'C':
            role="Client";
            break;
        case 'H':
            role="Chef";
            break;
        case 'A':
            role="Admin";
            break;
        case 'W':
            role="Waiter";
            break;

    }

    return (
        <div className="container">
            <div>
                <br/>
                <h1>ACCOUNT DETAILS</h1>
                <img className={classes.img} src={"https://cdn.iconscout.com/icon/free/png-512/account-269-866236.png"}/>

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
                                Phone Number
                            </td>
                            <td>
                                {auth.getPhoneNumber()}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Role
                            </td>
                            <td>
                                {role}
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}



