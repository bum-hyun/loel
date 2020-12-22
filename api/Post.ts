import { gql } from "apollo-boost";

export const GET_ALL_POST = gql`
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
