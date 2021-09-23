import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import Mission from './Mission'
import { Col, Container, Image, Row } from 'react-bootstrap'
import "./Comp.css"
import Goal from './Goal'
import Headline from './Headline'
import Footer from './Footer'
// import Fade Wobble Slide Flip from 'react-reveal/Fade';
const Rotate = require('react-reveal/Rotate')
const Fade = require('react-reveal/Fade')
const Wobble = require('react-reveal/Wobble')
const Slide = require('react-reveal/Slide')
const Flip = require('react-reveal/Flip')




function Home() {
    return (

        <div className='home'>
            <Container>
                <div className="hero">
                <Row>
                    <Col>
                        <Slide left>
                            <div className="say">Say Hello,</div>
                            <div className="headline">
                                We are creative & professional Software Development Company
                            </div>
                            <div className='design'>
                                <em>
                                Bluesoft is a professional software development firm that is a valuable partner to you by rapidly producing original software solutions. 
                                We have three fundamental tenets - Innovation, Transparency and Agility – that are central to our staff-client interactions
                                </em>
                            </div>
                            <button className='button'>Get started Now</button>
                        </Slide>
                    </Col>
                    <Col>
                        <Rotate>
                            <Image src="/img/girl.png" rounded />
                        </Rotate>


                    </Col>

                </Row>

            </div>
            <hr />
            </Container>
            <Mission />
            <Goal />
            <Headline />
            <Footer />
        </div>



    )
}

export default Home
