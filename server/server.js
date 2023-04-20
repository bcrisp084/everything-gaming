const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const db = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
