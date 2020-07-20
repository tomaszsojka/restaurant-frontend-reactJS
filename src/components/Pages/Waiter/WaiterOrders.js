import React from "react";
import classes from "../../Forms/Forms.module.css";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Button, Table} from "react-bootstrap";
import {finalizeTransaction} from "../../../actions/fInalizeTransaction"
import auth from "../../../Auth";
const WaiterOrders = props =>
{
    var sum = 0


    return (
        <div className="container">
            <div className={classes.mainContainer}>
                <hr/>
                <div className={classes.boxContainer}>
                    <h1>Waiter panel</h1>
                    {console.log(props.orderPropsWaiter.listOfOrderWaiter)}
                    {props.orderPropsWaiter.listOfOrders.filter(order => order.waiter === auth.getEmail()).map((order) => { return(
                            <div>
                                {sum = 0}
                                <h1> {order.table} </h1>
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    {order.listOfCurrentThings.map((meal) => {
                                            return (
                                                <tr>
                                                    <td>{meal.name}</td>
                                                    <td>{meal.quantity}</td>
                                                    <td>€{meal.price}</td>
                                                    <td>€{sum += meal.price*meal.quantity}</td>
                                                </tr>

                                            )
                                        }
                                    )
                                    }
                                    </tbody>
                                </Table>
                                Total money for all of the products: € {sum}
                                <Button onClick={()=>props.finalizeTransaction(props.orderPropsWaiter.listOfOrders, order) }
                                    className="mt-auto font-weight-bold"
                                         variant="dark"
                                         block>Done!</Button>
                                <br />

                            </div>
                        )
                        }
                    )
                    }
                </div>
            </div>
        </div>
    );

};

const mapStateToProps =  state => ({
    orderPropsWaiter: state.waiterOrderState,

})

export default connect(mapStateToProps, {finalizeTransaction})(WaiterOrders);