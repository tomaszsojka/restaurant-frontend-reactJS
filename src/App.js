import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Navigation} from "./components/Navigation/Navigation";
import  {Footer} from "./components/Navigation/Footer";
import {Home} from "./components/Pages/Guest/Home"
import {Menu} from "./components/Pages/Guest/Menu"
import {Contact} from "./components/Pages/Guest/Contact";
import {PhotoGallery} from "./components/Pages/Guest/PhotoGallery";
import "./components/Navigation/Toolbar/Toolbar"
import {Error} from "./components/Pages/Error";
import {AccessAccount} from "./components/Pages/Guest/AccessAccount/AccessAccount";

import {Client} from "./components/Pages/Client/Client";
import {ClientAccountDetails} from "./components/Pages/Client/ClientAccountDetails";
import {ClientOrders} from "./components/Pages/Client/ClientOrders";

export class App extends React.Component {
    render() {
    return (
        <Router >
            <div style={{height: "100%"}}>
                <Navigation/>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/menu"} component={Menu}/>
                    <Route path={"/contact"} component={Contact}/>
                    <Route path={"/gallery"} component={PhotoGallery}/>
                    <Route path={"/access_account"} component={AccessAccount}/>
                    <Route path={"/client"} component={Client}/>
                    <Route path={"/client_details"} component={ClientAccountDetails}/>
                    <Route path={"/client_orders"} component={ClientOrders}/>
                    <Route component={Error}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
