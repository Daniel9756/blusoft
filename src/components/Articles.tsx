// @ts-ignore
import React from 'react'

import { useQuery, gql } from "@apollo/client";
// @ts-ignore
import { GETPUBLISHED_ARTICLES } from "./Gql"
import { Row, Container, Col, Image } from 'react-bootstrap'
import { Art } from "./Art"


export const Articles = () => {

    const { loading, error, data } = useQuery(GETPUBLISHED_ARTICLES);
    console.log(loading, data)

    return (
        <Container>
            <Row>
                <Col md={9}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 0, marginRight: 24, marginLeft: 24 }}>
                    </div>
                    {data?.getPublished.map((blog: any) => (
                        <Art blog={blog} key={blog.id} />

                    ))}

                </Col>
                <Col md={3}></Col>
            </Row>

        </Container>
    )
}
