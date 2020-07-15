import React, {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";
import {AdminDishesList} from "../../Lists/AdminLists/AdminDishesList";

import {sendHttpRequest} from "../../../Fetch/useFetch";

import classes from "./AdminPages.module.css"
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export function AdminManageDishes() {
    const [data, setData] = useState([]);
    const [isRedirect, setIsRedirect] = useState(false);

    //the same as componentDidMount()
    useEffect(() => {
        sendHttpRequest('GET', '/api/v1/admin/list_dishes').then(responseData => {
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
                        <h1>BREAKFASTS</h1>
                        <AdminDishesList data={data} typeOfDish = "breakfast" deleteAndRedirect={deleteAndRedirect.bind(this)}/>
                        <Link to={{
                            pathname : "/admin_add_dish",
                            state : {
                                type : "breakfast"
                            }
                        }}>
                            <Button
                                className="mt-auto font-weight-bold"
                                variant="dark"
                                block>
                                Add Breakfast
                            </Button>
                        </Link>
                        <br/>
                        <h1>DINERS</h1>
                        <AdminDishesList data={data} typeOfDish = "dinner" deleteAndRedirect={deleteAndRedirect.bind(this)}/>
                        <Link to={{
                            pathname : "/admin_add_dish",
                            state : {
                                type : "dinner"
                            }
                        }}>
                            <Button
                                className="mt-auto font-weight-bold"
                                variant="dark"
                                block>
                                Add Breakfast
                            </Button>
                        </Link>
                        <br/>
                        <h1>APPETIZERS</h1>
                        <AdminDishesList data={data} typeOfDish = "appetizers" deleteAndRedirect={deleteAndRedirect.bind(this)}/>
                        <Link to={{
                            pathname : "/admin_add_dish",
                            state : {
                                type : "appetizers"
                            }
                        }}>
                            <Button
                                className="mt-auto font-weight-bold"
                                variant="dark"
                                block>
                                Add Breakfast
                            </Button>
                        </Link>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }


}

export default AdminManageDishes;