import React from "react";

import menu1 from "./../../menu1.jpg"

export class MenuPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <img src={menu1} alt="Menu" />
                    </div>
                </div>
            </div>


        );
    }
}