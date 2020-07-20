import React from "react";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

export class AdminDishesList extends React.Component {

    constructor(props) {
        super(props);

    }

    doSubmitDelete(id) {
        this.props.deleteAndRefresh(id);
    }

    render() {
        return (
            <div>
                <Table responsive>
                    <thead>
                    </thead>
                    <tbody>
                    {this.props.data.filter(dish  =>
                        dish.type === this.props.typeOfDish).map(dish =>
                        <tr key={dish.id}>
                            <td>{dish.name}</td>
                            <td>{dish.description}</td>
                            <td>{dish.price}</td>
                            <td><Button
                                className="mt-auto font-weight-bold"
                                variant="danger"
                                onClick={() => this.doSubmitDelete(dish.id)}
                                block>Delete</Button>
                            </td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        );
    }


}

export default AdminDishesList;