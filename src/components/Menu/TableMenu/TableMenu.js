import React from "react";
import {Table, Button} from "react-bootstrap";



export function TableMenu({data,setOrdered}){
        return(
        <div>
        <Table responsive>
            <thead>
            </thead>
            <tbody>
            {data.map((meal) =>
                <tr key={meal.id}>
                    <td>{meal.name}</td>
                    <td>{meal.description}</td>
                    <td>{meal.price}</td>
                    <td><Button
                    onClick={()=>setOrdered()}
                    className="mt-auto font-weight-bold"
                    variant="dark"
                    block>Order</Button></td>
                </tr>)}
            </tbody>
        </Table>
        </div>
        )
};

export default TableMenu;