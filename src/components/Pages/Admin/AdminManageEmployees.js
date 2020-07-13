import React, {useState, useEffect} from "react";
import {AdminEmployeesList} from "../../Lists/AdminLists/AdminEmployeesList";

import {sendHttpRequest} from "../../../Fetch/useFetch";

export function AdminManageEmployees() {
    const [data, setData] = useState([]);

    useEffect(() => {
        sendHttpRequest('GET', '/api/v1/admin/list_employees').then(responseData => {
            setData(responseData);
            console.log(responseData);
        });
    }, []);

    return (
        <div className="container">
            <div>
                <div >
                    <AdminEmployeesList data={data} typeOfEmployee = "chef" />
                    <AdminEmployeesList data={data} typeOfEmployee = "waiter" />
                    {/*<TableMenu data={data} nameOfMeal = "breakfast" setOrdered={displayConfirmation}/>*/}
                </div>
            </div>
        </div>
    );
}

export default AdminManageEmployees;