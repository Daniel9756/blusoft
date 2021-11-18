import React from 'react'
import { RouteComponentProps } from "react-router-dom";
import "./Comp.css"
import { useQuery, gql, useMutation } from "@apollo/client";
import { GET_AN_AUTHOR } from "./Gql"
import { Row, Col, Container, Image } from 'react-bootstrap';
import { FaHome, FaGithubSquare, FaLinkedin } from 'react-icons/fa';


type TParams = { id: string };

function Profile({ match }: RouteComponentProps<TParams>) {

    const id = match.params.id

    const { loading, error, data } = useQuery(GET_AN_AUTHOR, {
        variables: { id }
    });

    console.log(loading, error, data)
    if (loading) return <p>Loading ...</p>;
    if (error) return <div>Error! {error}</div>;




    return (
        <Container >
            <Row>
                <Col md={6}>
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }}>
                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }}>

                            <div style={{ marginTop: 35 }}>
                                <Image src="https://res.cloudinary.com/lectua/image/upload/c_fill,h_294,q_88,w_283,x_241,y_200/v1634908595/person_lrod2j.jpg" rounded />
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }}>
                            <em className="bio">{data?.getOneAuthor?.fullname}</em>

                            <em className="bio">{data?.getOneAuthor?.occupation}</em>

                            <em className="bio">{data?.getOneAuthor?.email}</em>
                        </div>
                    </div>
                </Col>
                <Col md={6} style={{ marginTop: "32px" }}>

                    <div>
                        <p className="bio">{data?.getOneAuthor?.bio}</p>
                    </div>
                    <hr />
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "baseline", }}>
                        <h4>Role:</h4>           <p className="h3" style={{ marginTop: "22px", fontFamily: "serif", marginLeft: "22px" }}>{data?.getOneAuthor?.role}</p>
                    </div>
                    <div>
                        <h2>Social</h2>
                        <a href="https://github.com/Daniel9756" target="_blank"><FaGithubSquare style={{ fontSize: "38px" }} /></a> <a href="https://www.linkedin.com/in/corneliuseze/" target="_blank"><FaLinkedin style={{ fontSize: "38px" }} /></a>
                    </div>
                </Col>


            </Row>
        </Container>
    )
}


export default Profile