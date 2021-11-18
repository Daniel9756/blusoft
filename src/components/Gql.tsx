import { useQuery, gql } from "@apollo/client";


export const GET_AN_AUTHOR = gql`
query getOneAuthor($id: String) {
  getOneAuthor(id: $id) {
    id
    fullname
    email
    occupation
    bio
    role
    password
    
  }
}
`;

export const GET_AN_ARTICLE = gql`
query getOneArticle($id: String) {
  getOneArticle(id: $id) {
    id
    title  
    body
  body
    AuthorId 
  url
}
  }
`;


export const GETFEATURED_ARTICLES = gql`
query getFeatured {
  getFeatured {
    id
    title
    body
    featured
    fullname
    published
    AuthorId
    createdAt
    url
  }
}
  
`;



export const GETPUBLISHED_ARTICLES = gql`
query getPublished {
  getPublished {
    id
    title
    body
    AuthorId
    published
    fullname
    featured
    url
  }
}
`;