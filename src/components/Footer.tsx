import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { FaHome, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { GiTriceratopsHead } from 'react-icons/gi';
import { MdPermContactCalendar } from 'react-icons/md';


// GiTriceratopsHead MdPermContactCalendar
const Swing = require('react-reveal/Swing')
const Fade = require('react-reveal/Fade')


function Footer() {
    return (
        <div style={{ marginTop: 120, backgroundColor: '#0B4F6C', padding: 64 }}>
            <Row>
                <Col>
                    <Fade right>
                        <div className='items'>
                            <div className='list'>
                                <FaHome style={{ fontSize: 28, color: '#60993E', }} />
                                <a href="#" style={{ color: '#60993E', textDecoration: 'none', fontSize: 20, marginLeft: 15 }} >
                                    Home
                                </a>
                            </div>
                            <div className='list'>,
                                <GiTriceratopsHead style={{ fontSize: 28, color: '#60993E', }} />
                                <a href="#" style={{ color: '#60993E', textDecoration: 'none', fontSize: 20, marginLeft: 15 }} >
                                    Headline
                                </a>
                            </div> <div className='list'>
                                <MdPermContactCalendar style={{ fontSize: 28, color: '#60993E', }} />
                                <a href="#" style={{ color: '#60993E', textDecoration: 'none', fontSize: 20, marginLeft: 15 }} >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </Fade>
                </Col>
                <Col>
                    <Swing>

                        {/*  color: #ffcdbc; */}
                        <div style={{ textAlign: 'center', marginBottom: 22, color: '#60993E' }}>
                            <small className="subtitle1">Bluesoft</small>
                        </div>
                        <div>
                            <em style={{ textAlign: 'center', marginTop: 32, fontSize: 32,color: '#ffcdbc', }}>
                                Bluesoft is a software development company with a very greate potential. Our weekly blog is a boostful
                                impact which attract 100, 000+ readers
                            </em>
                        </div>
                    </Swing>
                </Col>

            </Row>
            <hr />
            <div style={{ display: 'flex', justifyContent: "space-around", alignItems: 'center', color: '#ffcdbc', fontSize: 18 }}>
                <p> copyright 2021<span>&#64;</span>bluesoft.tech    </p>
                <p><FaGithubSquare /> <FaLinkedin /></p>
            </div>
        </div>

    )
}

export default Footer
