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
import {AccessAccount} from "./components/Pages/Guest/AccessAccount";

import {UserAccountDetails} from "./components/Pages/UserAccountDetails";

import {Client} from "./components/Pages/Client/Client";
import {ClientOrders} from "./components/Pages/Client/ClientOrders";

import {Admin} from "./components/Pages/Admin/Admin";
import {AdminManageDishes} from "./components/Pages/Admin/AdminManageDishes";
import {AdminManageEmployees} from "./components/Pages/Admin/AdminManageEmployees";
import {AdminAddEmployee} from "./components/Pages/Admin/AdminAddEmployee";
import {AdminAddDish} from "./components/Pages/Admin/AdminAddDish";

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
                    {/*TODO make below routes private*/}
                    <Route path={"/user_details"} component={UserAccountDetails}/>
                    <Route path={"/client"} component={Client}/>
                    <Route path={"/client_orders"} component={ClientOrders}/>
                    <Route path={"/admin"} component={Admin}/>
                    <Route path={"/admin_dishes"} component={AdminManageDishes}/>
                    <Route path={"/admin_employees"} component={AdminManageEmployees}/>
                    <Route path={"/admin_add_employee"} component={AdminAddEmployee}/>
                    <Route path={"/admin_add_dish"} component={AdminAddDish}/>
                    <Route component={Error}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
