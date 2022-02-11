import React, { useState } from 'react';
import {
  Form, 
  FormGroup, 
  Label,
  Input,
  Button
} from 'reactstrap';

const Signup = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [petName, setPetName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    .then((response) => response.json())
      .then((data) => {
         props.updateLocalStorage(data.token)
       })
  }

  return ( 
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='firstName'>First Name:</Label>
          <Input onChange={(e) => setFirstName(e.target.value)} name='firstName' value={firstName} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='lastName'>Last Name:</Label>
          <Input onChange={(e) => setLastName(e.target.value)} name='lastName' value={lastName} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='petName'>Pet's Name:</Label>
          <Input onChange={(e) => setPetName(e.target.value)} name='petName' value={petName} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='email'>Email:</Label>
          <Input onChange={(e) => setEmail(e.target.value)} name='email' value={email} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password:</Label>
          <Input onChange={(e) => setPassword(e.target.value)} name='password' value={password} />
        </FormGroup>
        <Button type='submit'>Sign Up</Button>
      </Form>
    </div>
   );
}
 
export default Signup;