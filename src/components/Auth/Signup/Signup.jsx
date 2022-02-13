import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import instapetLogin from '../../../assets/instapetLogin.jpg'

const Signup = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [petName, setPetName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log("button was clicked");
        const requestObject ={
            firstName: firstName,
            lastName:lastName,
            petName:petName,
            email:email,
            password: password,
        };
    
        fetch("http://localhost:1150/user/register",{
            method:"POST",
            body: JSON.stringify(requestObject),
            headers: new Headers({
                "Content-Type":"application/json"
            }),
        })
        .then((res) => res.json())
        .then((data) => props.updateLocalStorage(data.token));
        console.log("Things are working, don't panic")
    }


    return (
        <div>
            <h1
            style={{margin:"50px"}}> Signup to connect with other animal lovers...</h1>
        <Container style={{
            marginTop: "-35px",
            marginLeft: "50px",
            float: "left",
            padding: "20px",
            border: "double black 3px",
            backgroundColor: 'orange',
            width: "45%"
            
        }}>
       <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='firstName'>First Name</Label>
                    <Input onChange={(e) => setFirstName(e.target.value)} name="firstName" value={firstName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='lastName'>Last Name</Label>
                    <Input onChange={(e) => setLastName(e.target.value)} name="lastName" value={lastName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='petName'>Pet Name</Label>
                    <Input onChange={(e) => setPetName(e.target.value)} name="petName" value={petName}/>
                </FormGroup> 
                <FormGroup>
                    <Label htmlFor='email'>Email </Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name='password' value={password}/>
                </FormGroup>
                <Button type='submit'> Sign Up </Button>
            </Form>
        </div>
        </Container>
        <Container>
        <div style={{
            float: "right",  
            marginTop: "10px",
            marginRight: "-250px",
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
 
export default Signup