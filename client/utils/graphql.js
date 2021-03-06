import gql from "graphql-tag";

export const FETCH_PINGS_QUERY = gql`
  {
    getPings {
      id
      body
      location {
        type
        coordinates
      }
      imageUrl
      createdAt
      author {
        id
        imageUrl
        username
      }
      support {
        supported
        user {
          id
        }
      }
      supportCount
      dismissCount
      commentCount
    }
  }
`;

export const FETCH_PING_QUERY = gql`
  query getPing($pingId: ID!) {
    getPing(pingId: $pingId) {
      id
      body
      location {
        type
        coordinates
      }
      imageUrl
      createdAt
      author {
        id
        imageUrl
        username
      }
      support {
        supported
        user {
          id
        }
      }
      comments {
        id
        createdAt
        body
        author {
          id
          username
          imageUrl
        }
      }
      supportCount
      dismissCount
      commentCount
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      imageUrl
      token
      username
      createdAt
    }
  }
`;
export const SUPPORT_PING = gql`
  mutation supportPing($pingId: ID!, $support: Boolean!) {
    supportPing(pingId: $pingId, support: $support) {
      id
      body
      imageUrl
      createdAt
      author {
        id
        username
      }
      support {
        id
        supported
        user {
          username
        }
      }
      supportCount
      dismissCount
      commentCount
    }
  }
`;
export const CREATE_PING = gql`
  mutation createPing(
    $body: String!
    $imageUrl: String
    $lat: Float!
    $long: Float!
  ) {
    createPing(body: $body, imageUrl: $imageUrl, lat: $lat, long: $long) {
      id
      body
      imageUrl
      createdAt
      author {
        id
        imageUrl
        username
      }
      support {
        supported
        user {
          id
        }
      }
      supportCount
      commentCount
    }
  }
`;
export const CREATE_COMMENT = gql`
  mutation createComment($pingId: ID!, $body: String!) {
    createComment(pingId: $pingId, body: $body) {
      id
      body
      imageUrl
      createdAt
      author {
        id
        imageUrl
        username
      }
      comments {
        id
        createdAt
        body
        author {
          id
          username
          imageUrl
        }
      }
      supportCount
      commentCount
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($password: String!) {
    deleteUser(password: $password)
  }
`;

export const NEW_PING_SUBSCRIPTION = gql`
  subscription {
    newPing {
      id
      body
      imageUrl
      createdAt
      location {
        type
        coordinates
      }
      author {
        id
        imageUrl
        username
      }
      support {
        supported
        user {
          id
        }
      }
      supportCount
      commentCount
    }
  }
`;
