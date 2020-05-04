import React from 'react';
import {NavLink} from "react-router-dom";

import "./../../index.css"
export const Header = (props) => {
    return(
        <nav className="jumbo jumbotron jumbotron-fluid">
            <div className="container">
                <div style={{
                    width:  '30%',
                    marginLeft: '35%'
                }}>
                        <NavLink to={"/"} activeStyle={{ color:"red" }}> Home </NavLink>
                        <NavLink to={"/menu"} activeStyle={{ color:"red" }}> Menu </NavLink>
                        <NavLink to={"/contact"} activeStyle={{ color:"red" }}> Contact </NavLink>
                        <NavLink to={"/gallery"} activeStyle={{ color:"red" }}> Gallery </NavLink>
                </div>
            </div>
        </nav>
    );
};