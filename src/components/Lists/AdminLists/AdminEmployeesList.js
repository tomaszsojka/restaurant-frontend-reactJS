import React from "react";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

export const AdminEmployeesList = (props)  =>{
    return (
        <div>
            <Table responsive>
                <thead>
                </thead>
                <tbody>
                {props.data.filter(employee  =>
                    employee.role === props.roleOfEmployee).map(employee =>
                    <tr key={employee.id}>
                        <td>{employee.email}</td>
                        <td>{employee.phoneNumber}</td>
                        <td><Button
                            className="mt-auto font-weight-bold"
                            variant="danger"
                            block>Delete</Button>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    );
}

export default AdminEmployeesList;