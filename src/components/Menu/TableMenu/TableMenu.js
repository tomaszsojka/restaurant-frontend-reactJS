import React from "react";
import {Table, Button} from "react-bootstrap";
import {connect} from "react-redux"
import {addToBasket} from "../../../actions/addAction";

const TableMenu = (props) =>{
    console.log(props);
    const item = props.products;
    return(
        <div>
        <Table responsive>
            <thead>
            </thead>
            <tbody>
            {props.data.filter(meal  =>
                meal.type === props.nameOfMeal).map(meal =>
                <tr key={meal.id}>
                    <td>{meal.name}</td>
                    <td>{meal.description}</td>
                    <td>{meal.price}</td>
                    <td><Button
                    onClick={()=>props.setOrdered() & props.addToBasket(item,meal)}
                    className="mt-auto font-weight-bold"
                    variant="dark"
                    block>Order</Button></td>
                </tr>)}
            </tbody>
        </Table>
        </div>
        )
};

const mapStateToProps =  state => ({
    products: state.shoppingCartState.listOfCurrentThings
})

export default connect(mapStateToProps,{addToBasket})(TableMenu);