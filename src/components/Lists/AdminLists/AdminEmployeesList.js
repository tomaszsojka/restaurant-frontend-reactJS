import React from "react";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

export const AdminEmployeesList = (props)  =>{
    return (
        <div>
            <Table responsive>
                <tbody>
                {props.data.filter(employee  =>
                    employee.type === props.typeOfEmployee).map(employee =>
                    <tr key={employee.id}>
                        <td>{employee.email}</td>
                        <td>{employee.phoneNumber}</td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    );
}