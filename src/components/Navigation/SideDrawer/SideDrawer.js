import React from "react";

import './sideDrawer.css'

const SideDrawer = props => {
   let drawerClasses=['side-drawer'];
   if(props.show){
       drawerClasses = ['side-drawer open'];
   }
    return( <nav className={drawerClasses}>
        <ul>
            <li><a href='\menu'>menu</a></li>
            <li><a href='\'>home</a></li>
        </ul>
    </nav>
   );
};

export default SideDrawer;