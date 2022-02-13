import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import React, { useState } from "react";
import { Button} from "reactstrap";
import AuthNavbar from "../Navbar/Navbar";


const Auth = (props) => {
    const [isLoginVisible, setIsLoginVisible] = useState(true);

    function handleToggle(){
        setIsLoginVisible(!isLoginVisible)
    }
    return ( 
        <>
      
      <AuthNavbar clearlocalstorage={props.clearlocalstorage}/>
            
         {isLoginVisible===true? (<Login updateLocalStorage={props.updateLocalStorage}/>) : (<Signup updateLocalStorage={props.updateLocalStorage}/>)}
        
        
        
    
       

        <br/>
           
        <Button
        style={{marginTop: "450px", marginLeft: "-730px", float: 'left'}} onClick={handleToggle}>New User ?</Button> 

        </>
        
     );
}
 
export default Auth;