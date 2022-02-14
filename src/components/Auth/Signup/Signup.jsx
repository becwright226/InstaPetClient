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


    const [isLoginVisible, setIsLoginVisible] = useState(true);

    function handleToggle(){
        setIsLoginVisible(!isLoginVisible)
    }


    return (
        <div>
            <h1
            style={{margin:"50px", fontFamily: 'Moo Lah Lah', color: 'black'}}> Connect with other animal lovers...</h1>
        <Container style={{
            marginTop: "-35px",
            marginLeft: "50px",
            float: "left",
            padding: "20px",
            border: "solid black 4px",
            backgroundColor: 'orange',
            width: "45%",
            height: "70%"
        }}>
       <div>
            <h1 style={{fontFamily: 'Moo Lah Lah', color: 'black'}}>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='firstName' style={{fontFamily: 'Poppins'}}>First Name :</Label>
                    <Input style={{border: 'solid green 3px'}} onChange={(e) => setFirstName(e.target.value)} name="firstName" value={firstName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='lastName' style={{fontFamily: 'Poppins'}}>Last Name :</Label>
                    <Input style={{border: 'solid green 3px'}} onChange={(e) => setLastName(e.target.value)} name="lastName" value={lastName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='petName' style={{fontFamily: 'Poppins'}}>Pet Name :</Label>
                    <Input style={{border: 'solid green 3px'}} onChange={(e) => setPetName(e.target.value)} name="petName" value={petName}/>
                </FormGroup> 
                <FormGroup>
                    <Label htmlFor='email' style={{fontFamily: 'Poppins'}}>Email :</Label>
                    <Input style={{border: 'solid green 3px'}} onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password' style={{fontFamily: 'Poppins'}} >Password :</Label>
                    <Input style={{border: 'solid green 3px'}} onChange={(e) => setPassword(e.target.value)} name='password' type='password'  value={password}/>
                </FormGroup>
                <Button type='submit' style={{fontFamily: 'Poppins', backgroundColor: 'skyblue', color:'black'}}> Sign Up </Button>
            </Form>
        </div>
        </Container>
        <br/>
        <Container>
        <div style={{
            float: "right",  
            marginTop: "10px",
            marginRight: "-250px",
            border: "solid black 4px",
            padding: "20px",
            backgroundColor:"skyblue",
            height: "480px",
            width: "60%" }}>
                <h2 style={{fontFamily:'Moo Lah Lah'}}> About Instapet...</h2>
                <p style={{fontFamily:'Poppins'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatem laborum nemo ut corrupti id minus perferendis? Praesentium, quis distinctio beatae blanditiis quo accusantium architecto mollitia, expedita vero dolorum repellat!</p>
            <img src={instapetLogin} alt="cute animals" id='loginImage' width="100%" height='60%' />
        </div>
        </Container>
        </div>
      )
}
 
export default Signup