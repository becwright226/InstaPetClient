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
import Logout from "../../Navbar/Logout/Logout";
import { FaFish, FaFeather, FaPaw } from "react-icons/fa";


const PostNav = (props) => {
    
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    
    
    return (  <div>
        <Navbar light style={{backgroundColor:'orange'}}>
          <NavbarBrand style={{fontFamily:'Moo Lah Lah', fontSize: "38px"}} href="/" className="mr-auto">
            Instapet
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink style={{fontFamily:'Poppins'}} href="/public">All Instapets  <FaPaw size="15px" style={{color:'white'}}/>  <FaFish size="18px" style={{color:'darkturquoise'}}/> <FaFeather  size="18px" style={{color:'green'}}/> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{fontFamily:'Poppins'}} href="/furbaby"> <FaPaw size="15px" style={{color:'white'}}/> Fur Babies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{fontFamily:'Poppins'}} href="/scalebaby"> <FaFish size="18px" style={{color:'darkturquoise'}}/> Scale Babies </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{fontFamily:'Poppins'}} href="/exoticbaby">  <FaFeather  size="18px" style={{color:'green'}}/>  Exotic Babies</NavLink>
              </NavItem>
              <NavItem>
                <Logout clearlocalstorage={props.clearlocalstorage}/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div> );
}
 
export default PostNav;