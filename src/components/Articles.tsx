// @ts-ignore
import React from 'react'

import { useQuery, gql } from "@apollo/client";
// @ts-ignore
import { GETPUBLISHED_ARTICLES } from "./Gql"
import { Navbar, Container, Nav, Image } from 'react-bootstrap'



export const Articles = () => {

    const { loading, error, data } = useQuery(GETPUBLISHED_ARTICLES);
    console.log(loading, data) 

    return (
        <Container>
            Here is the headlie page
           
        </Container>
    )
}
