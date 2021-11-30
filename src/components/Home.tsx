import React from 'react'
import Mission from './Mission'
import { Col, Container, Image, Row } from 'react-bootstrap'
// import "./Comp.css"
import Goal from './Goal'
import { Featured } from './Featured'
import { useHistory } from 'react-router-dom'
// import Fade Wobble Slide Flip from 'react-reveal/Fade';
const Rotate = require('react-reveal/Rotate')
const Slide = require('react-reveal/Slide')
const Flip = require('react-reveal/Flip')




function Home() {
    const history = useHistory()

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
                                <button className='button' onClick={() => history.push("/contact")}>Get started Now</button>
                            </Slide>
                        </Col>
                        <Col>
                            <Rotate>
                                <Image src="/img/girl.jpg" rounded />
                            </Rotate>


                        </Col>

                    </Row>

                </div>
                <hr />
            </Container>
            <Mission />
            <Goal />
            <Featured />

        </div>



    )
}

export default Home
