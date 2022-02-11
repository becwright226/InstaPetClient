import React, { useState } from 'react';
// import {Container, Row, Col} from 'reactstrap';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const Auth = (props) => {
  


  function handleToggle() {
 
    setIsLogInVisible(!isLogInVisible)
  }

  return ( 
    <div>
      <h1>Hello from Auth.jsx</h1>

      {isLogInVisible === true ? (
        <Login updateLocalStorage={props.updateLocalStorage}/>
      ) : (
        <Signup  updateLocalStorage={props.updateLocalStorage}/> 
       )}
       <br />
        <button onClick={handleToggle}>Toggle Login/Signup</button>
    </div>
   );
}
 
export default Auth;