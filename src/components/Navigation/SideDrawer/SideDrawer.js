import React from "react";

import './sideDrawer.css'

const SideDrawer = props => {
   let drawerClasses=['side-drawer'];
   if(props.show){
       drawerClasses = ['side-drawer open'];
   }
    return( <div className={drawerClasses}>
<div>
    <p>Basket</p>
    <hr />
<div>

</div>
    <hr />
<p>Sum: </p>
    <button>Checkout </button>
</div>
    </div>
   );
};

export default SideDrawer;