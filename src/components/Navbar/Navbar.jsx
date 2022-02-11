import React, {useState} from "react";
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

export default SiteBar;