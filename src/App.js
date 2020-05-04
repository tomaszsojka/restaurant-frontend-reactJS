import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Header} from "./components/guestPages/Header";
import  {Footer} from "./components/guestPages/Footer";
import {MainPage} from "./components/guestPages/MainPage"
import {MenuPage} from "./components/guestPages/MenuPage"
import {ContactPage} from "./components/guestPages/ContactPage";
import {GalleryPage} from "./components/guestPages/GalleryPage";
import "./components/Toolbar/Toolbar"
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/Backdrop/Backdrop";
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
        let sideDrawer;
        let backDrop;

        if(this.state.sideDrawerOpen){

            backDrop = <BackDrop click={this.backdropClickHandler}/>
        }
    return (
        <Router style={{height:'100%'}}>

            <div style={{height: '100%'}}>
                <Header/>
                <hr />
                <Switch>
                    <Route exact path={"/"} component={MainPage}/>
                    <Route path={"/menu"} component={MenuPage}/>
                    <Route path={"/contact"} component={ContactPage}/>
                </Switch>
                <Footer/>
                </div>
        </Router>
    );
  }
}

export default App;
