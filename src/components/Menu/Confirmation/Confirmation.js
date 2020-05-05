import React from 'react'
import {Toast} from 'react-bootstrap'
export function Confirmation({toggle}){
return(
    <Toast onClose={()=>toggle(false)} >
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