import React from "react";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

export class AdminEmployeesList extends React.Component {

    constructor(props) {
        super(props);

    }

    deleteAndRedirect() {
        this.props.deleteAndRedirect();
    }

    render() {
        return (
            <div>
                <Table responsive>
                    <thead>
                    </thead>
                    <tbody>
                    {this.props.data.filter(employee  =>
                        employee.role === this.props.roleOfEmployee).map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.email}</td>
                            <td>{employee.phoneNumber}</td>
                            <td><Button
                                className="mt-auto font-weight-bold"
                                variant="danger"
                                onClick={this.deleteAndRedirect.bind(this)}
                                block>Delete</Button>
                            </td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        );
    }


}

export default AdminEmployeesList;