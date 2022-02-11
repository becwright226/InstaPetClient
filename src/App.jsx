import React, { useState, useEffect } from "react";
import Auth from "./components/Auth/Auth";
import SiteBar from "./components/Navbar/Navbar";
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
      <div className="App">
      
      <SiteBar clickLogout={clearlocalstorage}/>
          {!token ? (
           <Auth updateLocalStorage={updateLocalStorage}/>  
          ):(
            <Post token={token}/> 
          )}

      </div>
  );
};
export default App;