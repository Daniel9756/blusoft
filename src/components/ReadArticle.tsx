import React, {useEffect} from 'react'

// @ts-ignore
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import "./Comp.css"
import { RouteComponentProps, Link, useParams } from "react-router-dom";
import { FiLoader } from 'react-icons/fi';
import { useQuery, gql } from "@apollo/client";
import { GET_AN_ARTICLE, GET_AN_AUTHOR } from "./Gql"
// import ArticleDetail from './ArticleDetail';
import { Row, Col, Image } from 'react-bootstrap';



// type TParams = { id: string };

export const ReadArticle = () => {
    const params: any = useParams()
const {id, AuthorId}  = params
    console.log(id, AuthorId)

    // const id = match.params.id

    const { loading, error, data } = useQuery(GET_AN_ARTICLE, {
        variables: { id }
    });

      const { loading: fetching, error: err, data: writer, refetch  } = useQuery(GET_AN_AUTHOR, {
        variables: { AuthorId }
    });

useEffect(()=>{
    refetch() 
},[data])

    console.log(writer)
    console.log(loading, error, data)
    if (loading) return <div>Loading ...</div>;
    if (error) return <div>Error! {error}</div>;

    const contentState = convertFromRaw(JSON.parse(data?.getOneArticle?.body));
    const editorState = EditorState.createWithContent(contentState);
    return (
        <div className='read'>
            <Row>
                <Col md={3}>  
                {fetching || !writer && (<p>Loading ...</p>)}
                {writer && writer?.getOneAuthor !== null ? <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }}>
                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }}>

                            <div style={{ marginTop: 35 }}>
                                <Image src="https://res.cloudinary.com/lectua/image/upload/c_fill,h_294,q_88,w_283,x_241,y_200/v1634908595/person_lrod2j.jpg" rounded />
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }}>
                            <em className="bio">{writer?.getOneAuthor?.fullname}</em>

                            <em className="bio">{writer?.getOneAuthor?.occupation}</em>

                            <em className="bio">{writer?.getOneAuthor?.email}</em>
                        </div>
                    </div> : ''  }
                        
                </Col>
                <Col md={6}>
                
                    <div>
                        <h2 className="h3">{data?.getOneArticle?.title}</h2>
                    </div>
                    <div className="artimage">
                        <Image rounded src={data?.getOneArticle?.url} style={{width: "100%", height: 350, margin:2}} />

                    </div>
                    <hr />
                    <div className="editor">
                        {data?.getOneArticle && (
                            <Editor
                                blockStyleFn={getBlockStyle}
                                editorState={editorState} readOnly={true}
                            />
                        )}

                    </div>

                </Col>
                <Col md={3}></Col>


            </Row>
        </div>
    )
}


function getBlockStyle(block: any) {
    switch (block.getType()) {
        case 'blockquote': return 'RichEditor-blockquote';
        case 'code-block': return 'RichEditor-blockquote';
        default: return null;
    }
}


