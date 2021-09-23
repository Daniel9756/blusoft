import React from 'react'
import "./Comp.css"

import { Navbar, Container, Nav } from 'react-bootstrap'



const Header = () => {
    return (

        <Navbar expand="lg" style={{ backgroundColor: "#0B4F6C", }}>
            <Container>
                <Navbar.Brand href="#home" style={{ fontSize: 32,  color: "#2d080a"}}>Bluesoft</Navbar.Brand>
                
                <Nav>
                    
                    <Nav.Link href="#home" style={{ fontWeight: "bold",  color: "#7c3626" }}>Headlines</Nav.Link>

                </Nav>
                <Nav>
                    
                    <Nav.Link href="#features" style={{ fontWeight: "bold",  color: "#7c3626" }}>Contact Us</Nav.Link>

                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header
