import React, { useState } from 'react';
import { Button } from 'reactstrap';
const Logout = (props) => {
    return(
    <div>
        <Button onClick={props.clearlocalstorage}>Logout</Button>
    </div>

    )
    }   
 
export default Logout