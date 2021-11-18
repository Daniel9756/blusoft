import React, { useRef, useState } from 'react';
import { Col, Row, Container, Button } from "react-bootstrap"
import { MdLocationOn, MdPhone } from "react-icons/md"
import { IoIosMail } from "react-icons/io"
import emailjs from 'emailjs-com';
import { FaHome, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FiLoader } from 'react-icons/fi';


const config: any = (process.env.REACT_APP_EMAIL_SERVICE_ID as string);
const config1: any = (process.env.REACT_APP_EMAIL_TEMPLATE_ID as string);
const config2: any = (process.env.REACT_APP_EMAIL_USER_ID as string);

function Contact() {
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm(config, config1, form.current, config2)
            .then((result) => {
                if (result.status === 200) {
                    setMessage("Thanks for your Message. We will get intouch soon")
                    setLoading(false)
                }
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <Container>
            <Row>

                <Col md={8}>

                    <form ref={form} onSubmit={sendEmail} className="form">

                        <h3 style={{ marginLeft: 16 }}>GET IN TOUCH</h3>
                        <em style={{ marginLeft: 16, marginBottom: "32px" }}> Feel free to drop us a line below</em>
                        <div className="formelement">
                            <input type="text" name="user_name" className="input" placeholder="Your Full Name" />

                        </div>
                        <div className="formelement">
                            <input type="email" name="user_email" className="input" placeholder="Your Email Address" />


                        </div>
                        <div className="formelement">
                            <textarea name="message" className="input" placeholder="Your Message" />

                        </div>
                        <h5 style={{ color: "#60993E", fontFamily: "cursive", marginLeft: 6, marginRight: 6 }}>{message}</h5>
                        <div className="formelement">
                            <button type="submit" className="emailbtn" >{loading ? <FiLoader /> : 'SEND'}</button>
                        </div>
                    </form>
                </Col>
                <Col md={4}>
                    <div className="location" style={{ zIndex: 100 }}>
                        <h2>Contact Us</h2>
                        <div className="address">
                            <MdLocationOn style={{ fontSize: "68px", color: "#7c3626" }} />
                            <p className="addresstext">No1 Ikemba Street Suncity Layout, Alulu Road, Alulu Nike, Enugu State</p>
                        </div>
                        <div className="address">
                            <IoIosMail style={{ fontSize: "38px", color: "#7c3626" }} />   <p className="addresstext">bluesofttech.js@gmail.com</p>
                        </div>
                        <div className="address">
                            <MdPhone style={{ fontSize: "38px", color: "#7c3626" }} />   <p className="addresstext">+234 906 774 4732</p>
                        </div>
                        <hr />
                        <div className="address">
                            <p className="addresstext"></p> <div> <FaGithubSquare style={{ fontSize: "38px", color: "#7c3626" }} /> <FaLinkedin style={{ fontSize: "38px", color: "#7c3626" }} /></div>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default Contact
