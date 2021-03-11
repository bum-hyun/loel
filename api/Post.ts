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
  mutation createPost($input: CreatePostInput!) {
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
  mutation modifyPost($id: String!, $input: ModifyPostInput!) {
    modifyPost(id: $id, input: $input)
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($id: String!) {
    removePost(id: $id)
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($comment: PostComment!, $postId: String!, $email: String) {
    createComment(comment: $comment, postId: $postId, email: $email) {
      id
      name
      contents
      parent
      class
      email
      createdAt
    }
  }
`;

export const GET_COMMENTS = gql`
  query getComments($postId: String!) {
    getComments(postId: $postId) {
      id
      name
      contents
      email
      parent
      class
      createdAt
    }
  }
`;
