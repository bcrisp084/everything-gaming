const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./config/connection");
const { authMiddleware } = require("./utils/authorize");
const { typeDefs, resolvers } = require("./schemas");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const startApolloServer = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  await server.start();
  server.applyMiddleware({ app });

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer();
