import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Header} from "./components/guestPages/Header";
import  {Footer} from "./components/guestPages/Footer";
import {MainPage} from "./components/guestPages/MainPage"
import {MenuPage} from "./components/guestPages/MenuPage"
import {ContactPage} from "./components/guestPages/ContactPage";
import {GalleryPage} from "./components/guestPages/GalleryPage";

export class App extends React.Component {
  render() {
    return (
        <Router>
            <div>
                <Header />
                <hr />
                <Switch>
                    <Route exact path={"/"} component={MainPage}/>
                    <Route path={"/menu"} component={MenuPage}/>
                    <Route path={"/contact"} component={ContactPage}/>
                    <Route path={"/gallery"} component={GalleryPage}/>
                </Switch>
                <Footer/>
                </div>
        </Router>
    );
  }
}

export default App;
