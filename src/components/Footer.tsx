import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { FaHome } from 'react-icons/fa';
import { GiTriceratopsHead } from 'react-icons/gi';
import { MdPermContactCalendar } from 'react-icons/md';


// GiTriceratopsHead MdPermContactCalendar
const Swing = require('react-reveal/Swing')

function Footer() {
    return (
        <div style={{ marginTop: 120, backgroundColor: '#0B4F6C', padding: 64 }}>
            <Row>
                <Col>
                <div className='items'>
                 <div className='list'>
                        <FaHome style={{ fontSize: 28, color: '#60993E', }} />
                        <a href="#" style={{  color: '#60993E', textDecoration: 'none',  fontSize: 20, marginLeft: 15 }} >
                            Home
                        </a>
                    </div>
                    <div className='list'>,
                        <GiTriceratopsHead style={{ fontSize: 28, color: '#60993E', }} />
                        <a href="#" style={{  color: '#60993E', textDecoration: 'none',  fontSize: 20, marginLeft: 15 }} >
                            Headline
                        </a>
                    </div> <div className='list'>
                        <MdPermContactCalendar style={{ fontSize: 28, color: '#60993E', }} />
                        <a href="#" style={{  color: '#60993E', textDecoration: 'none',  fontSize: 20, marginLeft: 15 }} >
                           Contact Us
                        </a>
                    </div>
                    </div>

                </Col>
                <Col>
                    <Swing>

                        {/*  color: #ffcdbc; */}
                        <div style={{ textAlign: 'center', marginBottom: 22, color: '#60993E' }}>
                            <small className="subtitle1">Bluesoft</small>
                        </div>
                        <div>
                            <em style={{ textAlign: 'center', marginTop: 32, fontSize: 32, }}>
                                Bluesoft is a software development company with a very greate potential. Our weekly blog is a boostful
                                impact which attract 10+ readers
                            </em>
                        </div>
                    </Swing>
                </Col>

            </Row>
        </div>

    )
}

export default Footer
