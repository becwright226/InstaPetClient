import React, { useState } from 'react';
import { Button } from 'reactstrap';
const Logout = (props) => {
    return(
    <div>
        <Button style={{backgroundColor:'tomato', color:'black', outline: 'solid black 2px', fontFamily: 'Poppins'}} onClick={props.clearlocalstorage}>Logout</Button>
    </div>

    )
    }   
 
export default Logout