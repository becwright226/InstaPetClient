import React, { useState } from 'react';
import {  Container } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';//1
import instapetLogin from '../../../assets/instapetLogin.jpg';
import APIURL from '../../../environment';


const Login = (props) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
  
    
    function handleSubmit(e){
        e.preventDefault();
        console.log("button was clicked");
        const requestObject ={
            email:email,
            password: password,
        };
    
        fetch(`${APIURL}/user/login`, {
            method:"POST",
            body: JSON.stringify(requestObject),
            headers: new Headers({
                "Content-Type":"application/json"
            }),
        })
        .then((res) => res.json())
        .then((data) => props.updateLocalStorage(data.token))
        .catch((err)=> console.error(err));
    }


    const [isLoginVisible, setIsLoginVisible] = useState(true);

    function handleToggle(){
        setIsLoginVisible(!isLoginVisible)
    }
   

    return ( 
        <div>
           <h1 style={{margin:"50px", fontFamily: 'Moo Lah Lah', fontSize: "50px",  color: 'black'}}> Welcome Back!</h1>
        <Container
        style={{
            float: "left",
            marginTop: "50px",
            marginLeft: "100px",
            border: "solid black 4px",
            paddingTop: "40px",
            paddingLeft: "40px",
            backgroundColor:"orange",
            height: "480px",
            width: "40%"}}>
        <div>
            <h1
            style={{fontFamily: 'Moo Lah Lah', color: 'black'}}>Login</h1>
           
            <Form style={{ paddingTop: "40px",
            paddingLeft: "80px",}} onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='Email' style={{fontFamily: 'Poppins'}}>Email:</Label>
                    <Input style={{width: "80%", border: 'solid green 4px'}} onChange={(e) => setemail(e.target.value)} name='email' value={email}/> 
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password' style={{fontFamily: 'Poppins'}} >Password:</Label>
                    <Input style={{width: "80%", border: 'solid green 4px'}} onChange={(e) => setpassword(e.target.value)} name='password' type='password' value={password}/>
                </FormGroup>
                <Button type='submit' style={{fontFamily: 'Poppins', backgroundColor: 'darkturquoise', color: 'black', outline: 'solid black 2px'}} >Login</Button> 
                <Button style={{marginTop: "450px", marginLeft: "-730px", float: 'left', fontFamily: 'Poppins', backgroundColor: 'green', position: 'relative',}} onClick={handleToggle}>Already user? Login</Button>
            </Form>
        </div>
        </Container>
        <Container>
        <div style={{float: "right",  marginTop: "50px",
            marginRight: "-210px",
            border: "solid black 4px",
            padding: "20px",
            backgroundColor:'darkturquoise',
            height: "480px",
            width: "60%" }}>
          <img src={instapetLogin} alt="cute animals" id='loginImage' width="100%" height='100%' />
        </div>
        </Container>
        </div>
     )
}

export default Login;
