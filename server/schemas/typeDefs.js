const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    favorites: [Game!]
  }

  type Game {
    _id: ID
    title: String
    description: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    text: String
    createdAt: String
    likes: [User]!
    user: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    games: [Game]
    game(_id: ID!): Game
    me: User
  }
`;

module.exports = typeDefs;
