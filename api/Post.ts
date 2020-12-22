import { gql } from "apollo-boost";

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    getAllPosts {
      id
      email
      category
      title
      html
      markdown
      image
      createdAt
      updatedAt
    }
  }
`;

export const GET_POST = gql`
  query getPosts($id: String!) {
    getPost(id: $id) {
      id
      email
      category
      title
      html
      markdown
      image
      createdAt
      updatedAt
      user {
        email
        name
      }
    }
  }
`;
