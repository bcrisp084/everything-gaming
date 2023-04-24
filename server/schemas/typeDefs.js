const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    email: String
    favorites: [Game!]
  }

  type Game {
    _id: ID
    title: String
    description: String
    likes: Int
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    text: String
    createdAt: String
    user: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userName: String!): User
    games: [Game]
    game(_id: ID!): Game
    me: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      userName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
