import React from 'react'
import "./Comp.css"

import { Navbar, Container, Nav, Image } from 'react-bootstrap'



const Header = () => {
    return (

        <Navbar expand="lg" style={{ backgroundColor: "#0B4F6C", }}>
            <Container>
                <Navbar.Brand href="#home" style={{ fontSize: 32, color: "#7c3626", display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <Image src="/img/logo.PNG" rounded style={{ width: 45, height: 45 }} />
                    <em>luesoft</em>
                </Navbar.Brand>

                <Nav>

                    <Nav.Link href="#home" style={{ fontWeight: "bold", color: "#2d080a" }}>Headlines</Nav.Link>

                </Nav>
                <Nav>

                    <Nav.Link href="#features" style={{ fontWeight: "bold", color: "#2d080a" }}>Contact Us</Nav.Link>

                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header
