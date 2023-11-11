const express = require("express");
const route = express.Router();

const users = require("./login.route");
const todos = require("./todo.route");

route.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to my Todo API - create by alfian",
  });
});

route.use(users);
route.use(todos);

module.exports = route;
