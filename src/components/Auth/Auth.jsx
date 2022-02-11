import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import React, { useState } from "react";
import { Button, Container, Card, CardBody } from "reactstrap";
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
        <>
        <Container
        style={{
            float: "left",
            marginTop: "50px",
            marginLeft: "50px",
            border: "double black 4px",
            padding: "20px",
            backgroundColor:"orange",
            height: "300px",
            width: "45%"}}>
        <div>
            
            {isLoginVisible===true? (<Login updateLocalStorage={props.updateLocalStorage}/>) : (<Signup updateLocalStorage={props.updateLocalStorage}/>)}
            <br/>
            <Button onClick={handleToggle}>New User ?</Button>
        </div>
    
        </Container>
        
        <Card
        style={{backgroundColor: "black", margin:"50px"}}>
            <CardBody>

            Animal Image here?
            </CardBody>

        </Card>
        </>
        
     );
}
 
export default Auth;