<<<<<<< HEAD
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
=======
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import React, { useState } from "react";
const Auth = (props) => {
    const [isLoginVisible, setIsLoginVisible] = useState(true);

    function handleToggle(){
        /*if(isLoginVisible===true) {
            setIsLoginVisible(false);
        } else {
            setIsLoginVisible(true);
        }*/
        setIsLoginVisible(!isLoginVisible)
    }
    return ( 
        <div>
            <h1>Hello from Auth</h1>

            {isLoginVisible===true? (<Login updateLocalStorage={props.updateLocalStorage}/>) : (<Signup updateLocalStorage={props.updateLocalStorage}/>)}
            <br/>
            <button onClick={handleToggle}>Toggle Login/Signup </button>
        </div>
     );
>>>>>>> 8298ed57e62614c8641186da29bd822d013c8167
}
 
export default Auth;