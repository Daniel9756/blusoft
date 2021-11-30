import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { GiBarbedStar, GiStarfighter } from 'react-icons/gi';
import { FaFileContract, FaHome } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { useHistory } from 'react-router-dom'

// Reveal <Fade left>FaFileContract Zoom Swing
const Slide = require('react-reveal/Slide')
const Fade = require('react-reveal/Fade')
const Zoom = require('react-reveal/Zoom')





function Goal() {
    const  history = useHistory()
    return (
        <div style={{ marginTop: 64 }}>

            <Row>
                <Col md={5}>
                    <div style={{ marginTop: 64 }}>
                        <Slide right>
                            <Image src="/img/boy.jpg" rounded />
                        </Slide>
                    </div>

                </Col>
                <Col md={7}>
                    <div style={{ margin: 84, }}>
                        <Fade left>
                            <Row>
                                <Col>
                                    <div style={{ textAlign: 'center', marginBottom: 20 }}>

                                        <GiBarbedStar style={{ fontSize: 62, color: '#60993E' }} />
                                    </div>
                                    <div style={{ textAlign: 'center', marginBottom: 32 }}>
                                        <small className="subtitle1"> Our Mission</small>
                                    </div>
                                    <div>
                                        <em className='mission'>
                                            Bluesoft  provides exciting, game-changing software products to clients around the globe.
                                            We believe real innovation stems from implementing relevant high tech solutions to actual business problems.
                                            We aspire to developing employees who are seen as tech industry thought leaders and who produce leading edge technology.
                                        </em>
                                    </div>
                                </Col>

                            </Row>
                        </Fade>

                        <Fade left>
                            <Row>
                                <Col>
                                    <div style={{ textAlign: 'center', marginBottom: 20, marginTop: 20 }}>

                                        <GiStarfighter style={{ fontSize: 62, color: '#60993E' }} />
                                    </div>
                                    <div style={{ textAlign: 'center', marginBottom: 32 }}>
                                        <small className="subtitle1"> Our Vission</small>
                                    </div>
                                    <div>
                                        <em className='mission'>
                                            Our vision is to unleash the full potential of the amazing pool of the software engineers in Nigeria
                                            by providing world class outsourcing services.
                                        </em>
                                    </div>
                                </Col>
                            </Row>
                        </Fade>

                    </div>

                </Col>
            </Row>
            <div>
                <Row>

                    <Col md={6}>

                        <div>
                            <Zoom left>
                                <div style={{ textAlign: 'center', marginTop: 20 }}>

                                    <FiPhoneCall style={{ fontSize: 32, color: '#60993E', }} />
                                </div>
                                <div style={{ textAlign: 'center', marginTop: 20 }}>
                                    <em style={{ marginTop: 32, fontSize: 22, fontWeight: 'bold' }}>
                                        +234 906 774 4732
                                    </em>

                                </div>
                            </Zoom>
                            <div style={{ textAlign: 'center', marginTop: 36 }}>

                                <button className='button' onClick={() => history.push("/contact")}>Contact  Us</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>

                        <div style={{ marginBottom: 20, backgroundColor: '#ffcdbc', padding: 64 }}>
                            <div style={{ textAlign: 'center', marginBottom: 20 }}>

                                <FaFileContract style={{ fontSize: 62, color: '#60993E', }} />
                            </div>
                            {/*  color: #ffcdbc; */}
                            <div style={{ textAlign: 'center', marginBottom: 22, }}>
                                <small className="subtitle1">Contact Us</small>
                            </div>
                            <div>
                                <em style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 32, fontSize: 22, fontWeight: 'bold', textTransform: "capitalize" }}>
                                    To Enquire  a Detail  analysis of your   plan
                                </em>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div style={{ marginTop: 120, backgroundColor: '#0B4F6C', padding: 64 }}>

                    {/*  color: #ffcdbc; */}
                    <div style={{ textAlign: 'center', marginBottom: 22, color: '#60993E' }}>
                        <small className="subtitle1">OUR SERVICE </small>
                    </div>
                    <div>
                        <em style={{ textAlign: 'center', marginTop: 32, fontSize: 22, fontWeight: 'bold', color: '#ffcdbc' }}>
                            It takes more than just the company to achieve a better world. We know that we must work together
                            and work with others to plan and execute harmonious IT projects.
                            We follow this code to improve your business. And that has made all the difference.
                        </em>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goal
