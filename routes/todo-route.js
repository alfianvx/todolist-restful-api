const express = require("express");
const route = express.Router();

const {
  getAllTodos,
  getTodoById,
  createNewTodo,
  editTodoById,
  deleteTodoById,
  deleteAllTodo,
} = require("../controllers/todo-controller");

route.get("/todos", getAllTodos);
route.get("/todos/:id", getTodoById);
route.post("/todos", createNewTodo);
route.put("/todos/:id", editTodoById);
route.delete("/todos", deleteAllTodo);
route.delete("/todos/:id", deleteTodoById);

module.exports = route;
