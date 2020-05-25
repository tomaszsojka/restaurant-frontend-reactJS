import React from "react";
import classes from "./Contact.module.css";

export class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="flex-row">
                <div className={classes.contactElements}>
                    <img src="https://server036371.nazwa.pl/wordpress/wpn_ZielonaDolina/wp-content/uploads/2019/07/DSC_3304-copy.jpg" alt="image" />
                    <div className="row">
                        <div className="col">
                            <h1>Contact</h1>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            <h2>Order</h2>
                            <h4>Tel.: 532-711-737</h4>
                            <h4>Rua de Augusto Luso 132</h4>
                            <h4>4050-072  Porto</h4>
                        </div>
                        <div className="col">
                            <h3>Manager</h3>
                            <h5>Mariusz Pudzianowski</h5>
                            <h5>email: mpudzian@isep.ipp.pt</h5>
                            <h5>Tel.: 873-322-123</h5>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            <h1>Opening hours</h1>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            <h2>Days</h2>
                            <h4>Monday-Thursday</h4>
                            <h4>Friday,Saturday</h4>
                            <h4>Sunday</h4>
                        </div>
                        <div className="col">
                            <h3>Hours</h3>
                            <h5>12:00-19:00</h5>
                            <h5>10:00-20:00</h5>
                            <h5>10:00-19:00</h5>
                        </div>
                    </div>
                    <hr/>

                </div>
                </div>
            </div>
        );
    }
}



