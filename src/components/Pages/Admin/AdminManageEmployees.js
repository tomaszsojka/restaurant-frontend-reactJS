import React, {useState, useEffect} from "react";
import {AdminEmployeesList} from "../../Lists/AdminLists/AdminEmployeesList";

import {sendHttpRequest} from "../../../Fetch/useFetch";

import classes from "./AdminPages.module.css"
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export function AdminManageEmployees() {
    const [data, setData] = useState([]);

    useEffect(() => {
        sendHttpRequest('GET', '/api/v1/admin/list_employees').then(responseData => {
            setData(responseData);
            console.log(responseData);
        });
    }, []);

    function deleteEmployee() {

    }

    function addEmployee() {


    }

    return (
        <div className="container">
            <div>
                <div className={classes.listElements}>
                    <br/>
                    <h1>CHEFS</h1>
                    <AdminEmployeesList data={data} typeOfEmployee = "chef" />
                    <Link to={"/admin_add_employee"}>
                        <Button
                            className="mt-auto font-weight-bold"
                            variant="dark"
                            block>
                            Add Chef
                        </Button>
                    </Link>
                    <br/>
                    <h1>WAITERS</h1>
                    <AdminEmployeesList data={data} typeOfEmployee = "waiter" />
                    <Link to={"/admin_add_employee"}>
                        <Button
                            className="mt-auto font-weight-bold"
                            variant="dark"
                            block>
                            Add Waiter
                        </Button>
                    </Link>
                    {/*<TableMenu data={data} nameOfMeal = "breakfast" setOrdered={displayConfirmation}/>*/}
                </div>
            </div>
        </div>
    );
}

export default AdminManageEmployees;