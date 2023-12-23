import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;
export const REMOVE_USER_MUTATION = gql`
mutation removeUser( $id: Number!, $email: String!, $password: String! ) {
  removeUser(id: $id, email: $email, password: $password) {
    id
  }
}`;