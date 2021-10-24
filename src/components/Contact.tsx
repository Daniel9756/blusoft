import React, { useRef } from 'react';
import { Col, Row, Container } from "react-bootstrap"
import { MdLocationOn, MdPhone } from "react-icons/md"
import { IoIosMail } from "react-icons/io"
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import { FaHome, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const config: string | undefined = (process.env.REACT_APP_EMAIL_SERVICE_ID as string);
const config1: string | undefined = (process.env.REACT_APP_EMAIL_TEMPLATE_ID as string);
const config2: string | undefined = (process.env.REACT_APP_EMAIL_USER_ID as string);

function Contact({ process }: any) {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, data, process.env.REACT_APP_EMAIL_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <Container>
            <Row>

                <Col md={8}>

                    <form onSubmit={handleSubmit(onSubmit)} className="form">

                        <h3 style={{ marginLeft: 16 }}>GET IN TOUCH</h3>
                        <em style={{ marginLeft: 16, marginBottom: "32px" }}> Feel free to drop us a ine below</em>
                        <div className="formelement">
                            <input {...register("Name", { required: true, maxLength: 40 })} className="input" />

                        </div>
                        <div className="formelement">
                            <input {...register("email", { required: true })} className="input" />

                        </div>
                        <div className="formelement">
                            <textarea  {...register("message", { min: 30, })} className="input" />

                        </div>
                        <div className="formelement">

                            <button type="submit" className="emailbtn" >SEND</button>
                        </div>
                    </form>
                </Col>
                <Col md={4} >
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
