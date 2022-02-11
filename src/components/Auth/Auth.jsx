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
}
 
export default Auth;