const express = require("express");
const route = express.Router();

const {
  getAllTodos,
  getTodoById,
  createNewTodo,
  editTodoById,
  deleteTodoById,
  deleteAllTodo,
} = require("../controllers/todo.controller");
const auth = require("../middleware/auth");

route.get("/users/:userId/todos", auth, getAllTodos);
route.get("/users/:userId/todos/:todoId", auth, getTodoById);
route.post("/users/:userId/todos", auth, createNewTodo);
route.put("/users/:userId/todos/:todoId", auth, editTodoById);
route.delete("/users/:userId/todos/:todoId", auth, deleteTodoById);
route.delete("/users/:userId/todos", auth, deleteAllTodo);

module.exports = route;
