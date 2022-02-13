import React, { useState } from 'react';
import {  Container } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';//1
import instapetLogin from '../../../assets/instapetLogin.jpg';

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
    
        fetch("http://localhost:1150/user/login", {
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

   

    return ( 
        <div>
           <h1 style={{margin:"50px"}}> Welcome Back!</h1>
        <Container
        style={{
            float: "left",
            marginTop: "50px",
            marginLeft: "100px",
            border: "double black 4px",
            paddingTop: "10px",
            paddingLeft: "40px",
            backgroundColor:"orange",
            height: "480px",
            width: "40%"}}>
        <div>
            <h1>Login</h1>
           
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='Email'>Email</Label>
                    <Input style={{width: "80%"}} onChange={(e) => setemail(e.target.value)} name='email' value={email}/> 
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input style={{width: "80%"}} onChange={(e) => setpassword(e.target.value)} name='password' value={password}/>
                </FormGroup>
                <Button type='submit'>Login</Button> 
            </Form>
        </div>
        </Container>
        <Container>
        <div style={{float: "right",  marginTop: "50px",
            marginRight: "-210px",
            border: "double black 4px",
            padding: "20px",
            backgroundColor:"orange",
            height: "480px",
            width: "60%" }}>
            <img src={instapetLogin} alt="cute animals" id='loginImage' width="100%" />
        </div>
        </Container>
        </div>
     )
}

export default Login;