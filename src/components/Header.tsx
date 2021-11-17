// @ts-ignore
import React from 'react'
import "./Comp.css"
import { Articles } from './Articles'
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import {Link} from "react-router-dom"


const Header = () => {
    return (  <Navbar expand="lg" style={{ backgroundColor: "#0B4F6C", }}>         
            <Container>
                <Link to="/" style={{ fontSize: 28, color: "#7c3626", display: "flex", justifyContent: "center", alignItems: "center", textDecoration:"none" }}>

                    <Image src="/img/logo.PNG" rounded style={{ width: 45, height: 45 }} />
                    <em>luesoft</em>
                </Link>          

                    {/* <Link to="/headline" style={{ fontWeight: "bold", color: "#7c3626", textDecoration:"none" }}>Headlines</Link> */}

           
                    <Link to="/contact" style={{ fontWeight: "bold", color: "#7c3626", textDecoration:"none" }}>Contact Us</Link>

              
            </Container>
        </Navbar>

    )
}

export default Header
