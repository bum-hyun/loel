import { gql } from "apollo-boost";

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    getAllPosts {
      label
      items {
        id
        category
        title
        html
        markdown
        image
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_CATEGORY_POSTS = gql`
  query getCategoryPosts($category: String!) {
    getCategoryPosts(category: $category) {
      id
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

export const CREATE_POST = gql`
  mutation createPost($input: EditPostInput!) {
    createPost(input: $input) {
      id
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

export const MODIFY_POST = gql`
  mutation modifyPost($id: String!, $input: EditPostInput!) {
    modifyPost(id: $id, input: $input) {
      id
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

export const REMOVE_POST = gql`
  mutation removePost($id: String!) {
    removePost(id: $id)
  }
`;
