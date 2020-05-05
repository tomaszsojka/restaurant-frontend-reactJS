import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Navigation} from "./components/Navigation/Navigation";
import  {Footer} from "./components/Navigation/Footer";
import {Home} from "./components/Pages/Guest/Home"
import {Menu} from "./components/Pages/Guest/Menu"
import {Contact} from "./components/Pages/Guest/Contact";
import {PhotoGallery} from "./components/Pages/Guest/PhotoGallery";
import "./components/Navigation/Toolbar/Toolbar"
import {Error} from "./components/Pages/Error";
import {OrderOnline} from "./components/Pages/Guest/OrderOnline";
export class App extends React.Component {
 state = {
   sideDrawerOpen: false
 };

  drawerToggleClickHandler = () => {
  this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
      });
  };

  backdropClickHandler = () =>{
      this.setState({sideDrawerOpen: false});
  };

    render() {
    return (
        <Router >
            <div style={{height: '100%'}}>
                <Navigation/>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/menu"} component={Menu}/>
                    <Route path={"/contact"} component={Contact}/>
                    <Route path={"/gallery"} component={PhotoGallery}/>
                    <Route path={"/order_online"} component={OrderOnline}/>
                    <Route component={Error}/>
                </Switch>
                <Footer/>
                </div>
        </Router>
    );
  }
}

export default App;
