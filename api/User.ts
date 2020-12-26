import { gql } from "apollo-boost";

export const LOGIN = gql`
  mutation login($loginInput: LoginInput!) {
    login(input: $loginInput) {
      name
      email
      token
    }
  }
`;

export const REGISTER = gql`
  mutation register($registerInput: RegisterInput!) {
    register(input: $registerInput) {
      name
      email
    }
  }
`;
