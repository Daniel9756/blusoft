
import React from 'react'

import { useQuery, gql } from "@apollo/client";
import { GETFEATURED_ARTICLES } from "./Gql"
import { Fblog } from './Fblog';



export const Featured = () => {

    const { loading, error, data } = useQuery(GETFEATURED_ARTICLES);
    console.log(loading, data) 

    return (
        <div>
             <div style={{ textAlign: 'center', marginBottom: 42, }}>
                <small className="subtitle1">Top Headlines</small>
            </div>
           
            {data?.getFeatured.map((blog: any) => (
                <Fblog blog={blog} key={blog.id} />
               
            ))}
        </div>
    )
}