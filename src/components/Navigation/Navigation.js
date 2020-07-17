import React from "react";
import "./Toolbar/Toolbar";
//import "./../index.css/../../index.css";
import Toolbar from "./Toolbar/Toolbar";
import BackDrop from "./Backdrop/Backdrop";
import SideDrawer from "./SideDrawer/SideDrawer";

export class Navigation extends React.Component {
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
        let backDrop;

        if(this.state.sideDrawerOpen){

            backDrop = <BackDrop click={this.backdropClickHandler}/>
        }

    return(
            <div style={{height: "100%"}} >
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backDrop}
            </div>
    );
}
}
export default Navigation;

