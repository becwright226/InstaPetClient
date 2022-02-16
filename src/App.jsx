import React, { useState, useEffect } from "react";
import Auth from "./components/Auth/Auth"
import FooterBar from "./components/Footer/Footer";


import Post from "./components/Post/Post";



function App  (props) {
  const [token, settoken] = useState("");
 
  const updateLocalStorage = (newToken) => {
      localStorage.setItem("token", newToken);
      settoken(newToken);
  };

  useEffect(() => {
      if(localStorage.getItem("token")){
          settoken(localStorage.getItem("token"))
      }
  }, []);



  const clearlocalstorage = () => {
      localStorage.clear();
      settoken("")
  }


  return (
      <div className="App" style={{backgroundColor: 'palegoldenrod', backgroundSize:'100%'}}>
      
     
          {!token ? (
           <Auth updateLocalStorage={updateLocalStorage}/>  
          ):(
            <Post token={token} clearlocalstorage={clearlocalstorage}></Post>
          )}
       <FooterBar/>
      </div>
  );
};
export default App;