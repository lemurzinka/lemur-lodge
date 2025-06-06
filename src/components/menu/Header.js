import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../../styles/Header.css";

const Menu = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Navbar className="custom-navbar">
            <Container>
                <Navbar.Brand className="navbar-brand-custom" href="#/">Lemur Lodge</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#/">Home</Nav.Link>
                    <Nav.Link href="#/rooms">Rooms</Nav.Link>
                    <Nav.Link href="#/about">About us</Nav.Link>
                    
                    <div className="dropdown-wrapper" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}> 
                        <Nav.Link>Phone Numbers</Nav.Link> 
                        {showDropdown && ( <div className="dropdown-menu">
                             <p>📞 +380673550XXX</p> 
                             <p>📞 +380931816XXX</p>
                              </div> )} 
                              </div> 
                              </Nav> 
                              <Navbar.Toggle />
            </Container>
        </Navbar>
    );
};

export default Menu;
