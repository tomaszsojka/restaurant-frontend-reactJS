import React from "react";
import classes from "../../Forms/Forms.module.css";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Button, Table} from "react-bootstrap";
import {transferToWaiter} from "../../../actions/transferToWaiter";

const ChefOrders = props =>
{
        return (
            <div className="container">
                <div className={classes.mainContainer}>
                    <hr/>
                    <div className={classes.boxContainer}>
                        <h1>Chef panel</h1>
                        {props.orderPropsChef.listOfOrders.map((order) => { return(
                           <div>
                               <h1> {order.table} </h1>
                                           <Table responsive>
                                               <thead>
                                               <tr>
                                                   <th>Name</th>
                                                   <th>Quantity</th>

                                               </tr>
                                               </thead>
                                               <tbody>
                                               {order.listOfCurrentThings.map((meal) =>

                                                           <tr >
                                                               <td>{meal.name}</td>
                                                               <td>{meal.quantity}</td>
                                                           </tr>

                                               )}
                                               </tbody>
                                           </Table>

                               <Button onClick={()=>props.transferToWaiter(props.orderPropsChef.listOfOrders,props.orderPropsWaiter.listOfOrders, order) }
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
    orderPropsChef: state.orderState
})

export default connect(mapStateToProps, {transferToWaiter})(ChefOrders);