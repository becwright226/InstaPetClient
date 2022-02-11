/*import React, {useState} from "react";
import { //1
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Button,
    NavbarBrand,
} from "reactstrap" ;

const SiteBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return (
        <Navbar expand="md">
            <NavbarBrand href="/home">Home</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default SiteBar;*/

/////////////////////////
/*import React from 'react'
import {
    BrowserRouter as Router,
   // Route,
    //useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Container } from 'react-bootstrap'
  

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" expand="lg" sticky="top">
                                <Container float="center">
                                <Navbar.Brand href="#home">Instapet</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about-us">Contact Us</Nav.Link>
                                    <Nav.Link href="/contact-us">About Us</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <br />
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar*/

/////////////////////////////
import React from "react";
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
import Logout from "./Logout/Logout";
const Sitebar = (props) => {

    const [collapsed, setCollapsed] = React.useState(true);
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
 
export default Sitebar;
 /*const [collapsed, setCollapsed] = React.useState(true);
const toggleNavbar = () => setCollapsed(!collapsed);
return (
    <div>
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
              <NavLink href="/logout">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
*/