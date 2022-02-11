import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';//1

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
          <h1>Login</h1>
          <Form onSubmit={handleSubmit}>
              <FormGroup>
                  <Label htmlFor='Email'>Email</Label>
                  <Input onChange={(e) => setemail(e.target.value)} name='email' value={email}/> 
              </FormGroup>
              <FormGroup>
                  <Label htmlFor='password'>Password</Label>
                  <Input onChange={(e) => setpassword(e.target.value)} name='password' value={password}/>
              </FormGroup>
              <Button type='submit'>Login</Button>
          </Form>
      </div>
   )
}

export default Login;
