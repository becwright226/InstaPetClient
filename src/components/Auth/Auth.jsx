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
        
        
         <Button style={{marginTop: "550px", marginLeft: "-650px", float: 'left', fontFamily: 'Poppins', backgroundColor: 'green', position: 'inherit', color: 'black'}} onClick={handleToggle}>Login/SignUp</Button>
    
       

        <br/>
           
    

        </>
        
     );
}
 
export default Auth;