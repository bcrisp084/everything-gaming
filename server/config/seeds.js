const db = require("./connection");

const { User, Game } = require("../models");

db.once("open", async () => {
  //   await User.deleteMany();
  //   await Game.deleteMany();

  const users = await User.insertMany([
    {
      firstName: "John",
      lastName: "Doe",
      username: "user1",
      email: "user1@yahoo.com",
      password: "password12345",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      username: "user2",
      email: "user2@gmail.com",
      password: "password12345",
    },
    {
      firstName: "Joe",
      lastName: "Doe",
      username: "user3",
      email: "user3@verizon.net",
      password: "password12345",
    },
  ]);

  const games = await Game.insertMany([
    {
      title: "The Legend of Zelda: Breath of the Wild",
      description: "its zelda",
      comments: [
        {
          text: "This game is awesome!",
          user: users[0]._id,
          createdAt: Date.now(),
          likes: [users[0]._id, users[1]._id],
        },
        {
          text: "I love this game!",
          user: users[1]._id,
          createdAt: Date.now(),
          likes: [users[0]._id, users[1]._id],
        },
      ],
    },

    {
      title: "Super Mario Odyssey",
      description: "its mario",
      comments: [
        {
          text: "This game is awesome!",
          user: users[0]._id,
          createdAt: Date.now(),
          likes: [users[0]._id, users[1]._id],
        },
        {
          text: "I love this game!",
          user: users[1]._id,
          createdAt: Date.now(),
          likes: [users[0]._id, users[1]._id],
        },
      ],
    },
    {
      title: "Super Smash Bros. Ultimate",
      description: "its smash",
      comments: [
        {
          text: "This game is awesome!",
          user: users[0]._id,
          createdAt: Date.now(),
          likes: [users[0]._id, users[1]._id],
        },
        {
          text: "I love this game!",
          user: users[1]._id,
          createdAt: Date.now(),
          likes: [users[0]._id, users[1]._id],
        },
      ],
    },
  ]);
  console.log("all done!");
  process.exit();
});
