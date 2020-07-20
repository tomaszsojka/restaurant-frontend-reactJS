import React, {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";
import {AdminDishesList} from "../../Lists/AdminLists/AdminDishesList";

import {sendHttpRequest} from "../../../Fetch/useFetch";

import classes from "./AdminPages.module.css"
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export function AdminManageDishes() {
    const [data, setData] = useState([]);

    //the same as componentDidMount()
    useEffect(() => {
        sendHttpRequest('GET', '/api/v1/admin/list_dishes').then(responseData => {
            setData(responseData);
        });
    }, []);

    //TODO check this
    function deleteAndRefresh(id) {
        console.log(id);
        sendHttpRequest('DELETE', '/api/v1/admin/delete_dish', JSON.stringify(id)).then(responseData => {
            console.log(responseData);
            //refresh below
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
                    <h1>BREAKFASTS</h1>
                    <AdminDishesList data={data} typeOfDish = "breakfast" deleteAndRefresh={deleteAndRefresh.bind(this)}/>
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
                    <h1>DINNERS</h1>
                    <AdminDishesList data={data} typeOfDish = "dinner" deleteAndRefresh={deleteAndRefresh.bind(this)}/>
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
                            Add Dinner
                        </Button>
                    </Link>
                    <br/>
                    <h1>APPETIZERS</h1>
                    <AdminDishesList data={data} typeOfDish = "appetizer" deleteAndRefresh={deleteAndRefresh.bind(this)}/>
                    <Link to={{
                        pathname : "/admin_add_dish",
                        state : {
                            type : "appetizer"
                        }
                    }}>
                        <Button
                            className="mt-auto font-weight-bold"
                            variant="dark"
                            block>
                            Add Appetizer
                        </Button>
                    </Link>
                    <br/>
                </div>
            </div>
        </div>
    );


}

export default AdminManageDishes;