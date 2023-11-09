const express = require("express");
const route = express.Router();

const users = require("./login-route");
const todos = require("./todo-route");

route.get("/", (req, res) => {
  res.status(200).json({
    message: "hello from server",
  });
});

route.use(users);
route.use(todos);

module.exports = route;
