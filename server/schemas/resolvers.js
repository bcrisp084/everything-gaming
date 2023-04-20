const { AuthenticationError } = require("apollo-server-express");
const { User, Game } = require("../models");
const { signToken } = require("../utils/authorize");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate("games");
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username }).populate("games");
    },
    games: async () => {
      return await Game.find().populate("comments");
    },
    game: async (parent, { _id }) => {
      return await Game.findOne({ _id }).populate("comments");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("games");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
