import React from 'react'
import { useParams } from "react-router-dom";

// @ts-ignore
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import "./Comp.css"
import { RouteComponentProps } from "react-router-dom";

import { useQuery, gql } from "@apollo/client";
import { GET_AN_ARTICLE } from "./Gql"
// import ArticleDetail from './ArticleDetail';
import { Row, Col } from 'react-bootstrap';



type TParams = { id: string };

export const ReadArticle = ({ match }: RouteComponentProps<TParams>) => {

    const id = match.params.id

    const { loading, error, data } = useQuery(GET_AN_ARTICLE, {
        variables: { id }
    });
    console.log(loading, error, data)
    if (loading) return <p>Loading ...</p>;
    if (error) return <div>Error! {error}</div>;;
    const contentState = convertFromRaw(JSON.parse(data?.getOneArticle?.body));
    const editorState = EditorState.createWithContent(contentState);
    return (
        <div className='read'>
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    {/* <pre>{error?.graphQLErrors.map(({ message }, i) => (
                        <span key={i} className="error">{message}</span>
                    ))}
                    </pre> */}
                    <div>
                        <h2 className="h3">{data?.getOneArticle?.title}</h2>
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
                <Col md={2}></Col>


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


