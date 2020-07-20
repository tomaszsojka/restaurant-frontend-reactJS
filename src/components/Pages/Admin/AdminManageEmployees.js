import React, {useState, useEffect} from "react";
import {AdminEmployeesList} from "../../Lists/AdminLists/AdminEmployeesList";
import {Redirect} from "react-router-dom";

import {sendHttpRequest} from "../../../Fetch/useFetch";

import classes from "./AdminPages.module.css"
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export function AdminManageEmployees() {
    const [data, setData] = useState([]);

    //the same as componentDidMount()
    useEffect(() => {
        sendHttpRequest('GET', '/api/v1/admin/list_employees').then(responseData => {
            setData(responseData);
        });
    }, []);

    //TODO check this
    function deleteAndRefresh(id) {

        sendHttpRequest('DELETE', '/api/v1/admin/delete_employee', JSON.stringify(id)).then(responseData => {
            console.log(responseData);
            window.location.reload();
        })
            .catch(err => {
                console.log(err, err.data);
                //TODO catch error if cannot be deleted
            });
    }

    return (
        <div className="container">
            <div>
                <div className={classes.listElements}>
                    <br/>
                    <h1>CHEFS</h1>
                    <AdminEmployeesList data={data} roleOfEmployee = "chef" deleteAndRefresh={deleteAndRefresh.bind(this)}/>
                    <Link to={{
                        pathname : "/admin_add_employee",
                        state : {
                            role : "chef"
                        }
                    }}>
                        <Button
                            className="mt-auto font-weight-bold"
                            variant="dark"
                            block>
                            Add Chef
                        </Button>
                    </Link>
                    <br/>
                    <h1>WAITERS</h1>
                    <AdminEmployeesList data={data} roleOfEmployee = "waiter" deleteAndRefresh={deleteAndRefresh.bind(this)}/>
                    <Link to={{
                        pathname : "/admin_add_employee",
                        state: {
                            role: "waiter"
                        }
                    }}>
                        <Button
                            className="mt-auto font-weight-bold"
                            variant="dark"
                            block>
                            Add Waiter
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );


}

export default AdminManageEmployees;