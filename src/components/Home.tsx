import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import { Col, Container, Row } from 'react-bootstrap'
import "./Comp.css"

function Home() {
    return (

        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="say">Say Hello,</div>
                        <div className="headline">
                            We are creative & professional Digital Technology Company
                        </div>
                        <div className='design'>
                            Modern website User Interface design template for a company or corporate.
                            This template is ideal for Startup, company, business, corporate, website developer,
                            software engineer, and any company website.
                        </div>
                        <button className='button'>Get started Now</button>
                    </Col>
                    <Col></Col>

                </Row>
            </Container>

        </div>



    )
}

export default Home
