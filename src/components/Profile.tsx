import React from 'react'
import { RouteComponentProps } from "react-router-dom";
import "./Comp.css"
import { useQuery, gql, useMutation } from "@apollo/client";
import { GET_AN_AUTHOR } from "./Gql"
import { Row, Col, Container, Image } from 'react-bootstrap';


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
                        <div>
                            <p className="h3">{data?.getOneAuthor?.fullname}</p>
                        </div>
                        <div>
                            <p className="h3">{data?.getOneAuthor?.occupation}</p>
                        </div>
                        <div>
                            <p className="h3">{data?.getOneAuthor?.email}</p>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    {/* <pre>{error.graphQLErrors.map(({ message}, i) => (
                        <span key={i} className="error">{message}</span>
                    ))}
                    </pre> */}
                    <div>
                        <h2 className="h3">{data?.getOneAuthor?.bio}</h2>
                    </div>
                    <hr />
                    <div>
                        <h2 className="h3">{data?.getOneAuthor?.role}</h2>
                    </div>

                </Col>


            </Row>
        </Container>
    )
}


export default Profile