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


const PostNav = (props) => {
    
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    
    
    return (  <div>
        <Navbar light style={{backgroundColor:'orange'}}>
          <NavbarBrand href="/" className="mr-auto">
            Instapet
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/public">All Instapets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/furbaby">Fur Babies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/scalebaby">Scale Babies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/exoticbaby">Exotic Babies</NavLink>
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