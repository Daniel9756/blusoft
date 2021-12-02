// @ts-ignore
import React from 'react'

import { useQuery, gql } from "@apollo/client";
// @ts-ignore
import { GETPUBLISHED_ARTICLES } from "./Gql"
import { Row, Container, Col, Image } from 'react-bootstrap'
import { Art } from "./Art"
import { FiLoader } from 'react-icons/fi';



export const Articles = () => {

    const { loading, error, data } = useQuery(GETPUBLISHED_ARTICLES);
    console.log(loading, data)

    return (
        <Container>
            <Row>
                <Col md={9}>
{loading  && (<div  style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: 20, marginTop: '120px' }}><FiLoader  style={{fontSize: '80px'}} /></div>)} 
             {data ? <div>
              {data?.getPublished.map((blog: any) => (
                        <Art blog={blog} key={blog.id} />

                    ))}

             </div>: '' }                         
                </Col>
                <Col md={3}></Col>
            </Row>

        </Container>
    )
}
