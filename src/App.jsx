import React, { useState, useEffect } from 'react';
import Auth from './components/Auth/Auth';
import Signup from './components/Auth/Signup/Signup';
// import Navbar from './components/Navbar/Navbar';
import Post from './components/Post/Post'



function App() {
  const [token, setToken] = useState('');


  const updateLocalStorage = (newToken) => {
    localStorage.setItem('token', newToken)
    setToken(newToken)
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  }, []);
  

  const clearLocalStorage = () => {
    localStorage.clear()
    setToken('')
  }

  // const updateToken = (newToken) => {
  //   localStorage.setItem('token', newToken);
  //   setToken(newToken);
  //   console.log(updateToken);
  // }

  // const clearToken = () => {
  //   localStorage.clear();
  //   setToken('');
  // }



  return (
    <div>
      <h2>Hello from App.jsx</h2>
      {token ? (
           <Auth updateLocalStorage={updateLocalStorage}/>  
          ):(
            <Post token={token}/> 
          )}

      <Auth />
    </div>
  );
}

export default App;
