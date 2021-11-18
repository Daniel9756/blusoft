import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import "./Comp.css"
import { GiSprout, GiTeamIdea, GiIncomingRocket } from 'react-icons/gi';

// import Fade Wobble Slide Flip from 'react-reveal/Fade';
const Rotate = require('react-reveal/Rotate')
const Fade = require('react-reveal/Fade')
const Wobble = require('react-reveal/Wobble')
const Slide = require('react-reveal/Slide')
const Flip = require('react-reveal/Flip')





function Mission() {
    return (
        <>
            <Container className="cont">

                <Row >
                    <Col>
                        <div className="subtitle">
                            Our core values
                        </div>

                    </Col>
                    <Col>
                        <Flip left>
                            <div className='design'>
                                <em>
                                    We believe in both personal and financial growth for those inside and outside our business.
                                    Bluesoft aims to grow in its finances, relationships and results to promote quality outcomes for our clients and our business.
                                </em>
                            </div>
                        </Flip>
                    </Col>

                </Row>
                <div className='mission'>
                    <Row>
                        <Col md={4}>
                            <Fade left>
                                <div className='box'>
                                    <div className='icondiv'>
                                        <GiSprout style={{ fontSize: 42 }} />

                                    </div>
                                    <h5 className='h5'>Professionalism</h5>
                                    <p className='page'>
                                      
                                        Our team of experienced UI/UX designers and Programmers creates user interfaces for Web and software development services
                                  
                                </p>
                            </div>
                        </Fade>
                    </Col>
                    <Col md={4}>
                        <Wobble>

                            <div className='box'>
                                <div className='icondiv'>

                                    <GiTeamIdea style={{ fontSize: 42 }} />
                                </div>
                                <h5 className='h5'> Teamwork</h5>
                                <p className='page'>
                                    What separates the good players from a great player is that a great player is willing to give up their
                                    own personal achievement for the achievement of the group
                                </p>

                            </div>
                        </Wobble>

                    </Col>
                    <Col md={4}>
                        <Fade right>
                            <div className='box'>
                                <div className='icondiv'>

                                    <GiIncomingRocket style={{ fontSize: 42 }} />
                                </div>
                                <h5 className='h5'> Communication</h5>
                                <p className='page'>
                                    We communicate the message to you in a way you can understand,
                                    and keep you informed of what is happening at each stage of your project, advancement or system.
                                </p>


                            </div>
                        </Fade>
                    </Col>
                </Row>
            </div>
        </Container>
    
    </>
    )
}

export default Mission
