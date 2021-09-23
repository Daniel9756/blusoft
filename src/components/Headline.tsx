import React from 'react'
import "./Comp.css"
import { Container } from 'react-bootstrap'

function Headline() {
    return (
        <Container className='headlines'>
            <div style={{ textAlign: 'center', marginBottom: 22, }}>
                <small className="subtitle1">Top Headlines</small>
            </div>
            <div>
            <div className='title'>
                <div  className='readmore'>
                    <h4 className='h4'>React, the best javascript frontend library</h4>
                    <a href="#" className="link-primary">
                        <h6 style={{ fontWeight: 'bold' }}> Read More</h6>
                    </a>
                </div>
                <hr />
                <div>
                    <div>
                        <em style={{ marginLeft : 8, fontWeight: 'bold' }} >Visitors :</em><small style={{ marginLeft : 8,  }} >22,345</small>
                    </div>
                   
                </div>                
            </div>
            <div className='title'>
                <div  className='readmore'>
                    <h4 className='h4'>How to start a project with React, Typescript and Graphql</h4>
                    <a href="#" className="link-primary">
                        <h6 style={{ fontWeight: 'bold' }}> Read More</h6>
                    </a>
                </div>
                <hr />
                <div>
                    <div>
                        <em style={{ marginLeft : 8, fontWeight: 'bold' }} >Visitors :</em><small style={{ marginLeft : 8,  }} >6 425</small>
                    </div>
                   
                </div>                
            </div> <div className='title'>
                <div  className='readmore'>
                    <h4 className='h4'>Build a javascript calculator for beginers</h4>
                    <a href="#" className="link-primary">
                        <h6 style={{ fontWeight: 'bold' }}> Read More</h6>
                    </a>
                </div>
                <hr />
                <div>
                    <div>
                        <em style={{ marginLeft : 8, fontWeight: 'bold' }} >Visitors :</em><small style={{ marginLeft : 8,  }} >22,345</small>
                    </div>
                   
                </div>                
            </div> <div className='title'>
                <div  className='readmore'>
                    <h4 className='h4'>Node.js, Epress and Express-validator tutorial</h4>
                    <a href="#" className="link-primary">
                        <h6 style={{ fontWeight: 'bold' }}> Read More</h6>
                    </a>
                </div>
                <hr />
                <div>
                    <div>
                        <em style={{ marginLeft : 8, fontWeight: 'bold' }} >Visitors :</em><small style={{ marginLeft : 8,  }} >2,345</small>
                    </div>
                   
                </div>                
            </div>
            
            </div>
        </Container>
    )
}

export default Headline
