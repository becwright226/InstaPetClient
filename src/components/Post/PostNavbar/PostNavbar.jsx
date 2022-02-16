/*import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
    
    
    return (  <div>
        <Navbar light style={{backgroundColor:'orange'}}>
          <NavbarBrand style={{fontFamily:'Moo Lah Lah', fontSize: "38px"}} href="/" className="mr-auto">
            Instapet      <FaPaw size="15px" style={{color:'white'}}/> <FaFish size="18px" style={{color:'darkturquoise'}}/> <FaFeather  size="18px" style={{color:'green'}}/>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                  <Link to='/public' onClick={toggleNavbar}>
                  <NavLink style={{fontFamily:'Poppins'}}>All Instapets</NavLink>
                  </Link>
              </NavItem>
              <NavItem>
                <NavLink  style={{fontFamily:'Poppins'}} href="http://localhost:1150/post/FurBaby"><FaPaw size="15px" style={{color:'white'}}/>  Fur Babies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{fontFamily:'Poppins'}}  href="http://localhost:1150/post/ScaleBaby"><FaFish size="18px" style={{color:'darkturquoise'}}/>  Scale Babies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{fontFamily:'Poppins'}} href="http://localhost:1150/post/ExoticBaby"> <FaFeather  size="18px" style={{color:'green'}}/>  Exotic Babies</NavLink>
              </NavItem>
              <NavItem>
                <Logout clearlocalstorage={props.clearlocalstorage}/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div> );
}
 
export default PostNav;*/

/////////////
import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import {Route, Link, Routes} from 'react-router-dom'
import Logout from "../../Navbar/Logout/Logout";
import { FaFish, FaFeather, FaPaw } from "react-icons/fa";
import Auth from "../../Auth/Auth";
import Login from "../../Auth/Login/Login";
import PublicPost from "../PublicPost/PublicPost";
import Post from "../Post";
import PublicFurBaby from "../PublicPost/PublicFurBaby";
import PublicExoticBaby from "../PublicPost/PublicExoticBaby";
import PublicScaleBaby from "../PublicPost/PublicScaleBaby";


const PostNav = (props) => {
    
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const [isPostVisible, setIsPostVisible] = useState(true);

    function handleClick(){
        setIsPostVisible(!isPostVisible)
    }
    
    
    return (  
        <header>
        <Navbar light style={{backgroundColor:'orange', width:'100%', borderBottom: 'solid black 4px'} }>
          <NavbarBrand style={{fontFamily:'Moo Lah Lah', fontSize: "38px"}} href="/" className="mr-auto">
            Instapet<FaPaw size="15px" style={{color:'white'}}/>  <FaFish size="18px" style={{color:'darkturquoise'}}/> <FaFeather  size="18px" style={{color:'green'}}/>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>             
                <NavLink style={{fontFamily:'Poppins'}}><Link to='/public' onClick={handleClick}>All Instapets</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{fontFamily:'Poppins'}}> <FaPaw size="15px" style={{color:'white'}}/><Link to='/FurBaby'>Fur Babies</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{fontFamily:'Poppins'}} href="/scalebaby"> <FaFish size="18px" style={{color:'darkturquoise'}}/> <Link to='/ScaleBaby'> Scale Babies </Link> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{fontFamily:'Poppins'}} href="/exoticbaby">  <FaFeather  size="18px" style={{color:'green'}}/> <Link to='/ExoticBaby'> Exotic Babies </Link> </NavLink>
              </NavItem>
              <NavItem>
                <Logout clearlocalstorage={props.clearlocalstorage}/>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
        <Routes>
                {/*isPostVisible===true? (<Post/>) : (<PublicPost/>)*/}
            <Route exact path='/public' element={<PublicPost/>}> </Route>
            <Route exact path='/FurBaby' element={<PublicFurBaby/>}> </Route>
            <Route exact path='/ExoticBaby' element={<PublicExoticBaby/>}> </Route>
            <Route exact path='/ScaleBaby' element={<PublicScaleBaby/>}> </Route>
        </Routes>
        </header>
     );
}
 
export default PostNav;