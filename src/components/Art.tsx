import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./Comp.css"
import { Container } from 'react-bootstrap'

export const Art = (props: any) => {

    const { blog } = props
    const { id, title, fullname, featured, published, AuthorId } = blog


    return (<>
        <Container className="blogroot">
            <div className='title'>
                <div className='readmore'>
                    <Link to={`article/${id}`} className='bloglink'>
                        <h5 className='blogtitle'>
                            {title}
                        </h5>

                    </Link>
                    <Link to={`article/${id}`}>
                        Read More ...
                    </Link>

                </div>
                <hr />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <em style={{ marginLeft: 8, fontWeight: 'bold' }} >Author</em>
                    </div>
                    <Link to={`profile/${AuthorId}`} className='userlink'>

                        {fullname}

                    </Link>
                </div>
            </div>

        </Container>


    </>
    )
}
