import React from "react";
import classes from "../../Forms/Forms.module.css";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Button, Table} from "react-bootstrap";

const ChefOrders = props =>
{
        return (
            <div className="container">
                <div className={classes.mainContainer}>
                    <hr/>
                    <div className={classes.boxContainer}>
                        <h1>Chef panel</h1>
                        {props.orderProps.map((order) => { return(
                           <div>
                               <h1> {order.table} </h1>
                                           <Table responsive>
                                               <tr>
                                                   <th>Name</th>
                                                   <th>Quantity</th>

                                               </tr>
                                               {order.listOfCurrentThings.map((meal) => {
                                                       return (
                                                           <tr>
                                                               <td>{meal.name}</td>
                                                               <td>{meal.quantity}</td>
                                                           </tr>
                                                       )
                                                   }
                                               )
                                               }
                                           </Table>
                               <Button  className="mt-auto font-weight-bold"
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
    orderProps: state.orderState.listOfOrders
})

export default connect(mapStateToProps)(ChefOrders);