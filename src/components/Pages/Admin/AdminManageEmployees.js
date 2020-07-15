import React, {useState, useEffect} from "react";
import {AdminEmployeesList} from "../../Lists/AdminLists/AdminEmployeesList";
import {Redirect} from "react-router-dom";

import {sendHttpRequest} from "../../../Fetch/useFetch";

import classes from "./AdminPages.module.css"
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export function AdminManageEmployees() {
    const [employeeToDelete, setEmployeeToDelete] = useState([]);
    const [data, setData] = useState([]);
    const [isRedirect, setIsRedirect] = useState(false);

    //the same as componentDidMount()
    useEffect(() => {
        sendHttpRequest('GET', '/api/v1/admin/list_employees').then(responseData => {
            setData(responseData);
        });
    }, []);

    //TODO check this
    function deleteAndRedirect() {
        //TODO change this !!!!
        /*
        sendHttpRequest('DELETE', '/api/v1/admin/delete_employee').then(responseData => {
            console.log(responseData);
            setIsRedirect(true);
        })
            .catch(err => {
                console.log(err, err.data);
                console.log("co jest");
                //TODO catch error if cannot be deleted
            });
         */
        //setEmployeeToDelete({"213721372","maklowicz@mak.lowicz","eeeeeeeee","chef","2"});
            setIsRedirect(true);
    }
    if(isRedirect) {
        //TODO change to proper uri
        return <Redirect to="/"/>;
    }else {
        return (
            <div className="container">
                <div>
                    <div className={classes.listElements}>
                        <br/>
                        <h1>CHEFS</h1>
                        <AdminEmployeesList data={data} roleOfEmployee = "chef" deleteAndRedirect={deleteAndRedirect.bind(this)}/>
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
                        <AdminEmployeesList data={data} roleOfEmployee = "waiter" />
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


}

export default AdminManageEmployees;