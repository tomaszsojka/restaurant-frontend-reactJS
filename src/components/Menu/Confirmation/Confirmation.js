import React from "react"
import {Toast} from "react-bootstrap"
import classes from "./Confirmation.module.css"
export function Confirmation({toggle}){
return(
    <Toast className={classes.toastShow} clonClose={()=>toggle(false)} >
        <Toast.Header>
          <strong className="mr-auto">Your Order Is In The Basket</strong>
            <small>now</small>
        </Toast.Header>
<Toast.Body>
    It will be ready in 30 minutes
</Toast.Body>
    </Toast>
)

}

export default Confirmation;