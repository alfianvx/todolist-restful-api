const { Todo, User } = require("../models");

module.exports = {
  getAllTodos: async (req, res) => {
    try {
      const user = await User.findOne({ where: { id: req.params.userId } });
      const todos = await Todo.findAll({
        where: { user_id: req.params.userId },
      });

      if (!user) {
        res.status(401).json({
          message: "Unauthorized",
        });
      } else {
        res.status(200).json({
          message: "Sukses mendapatkan semua todo",
          data: todos,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "terjadi kesalahan server",
        error: error.message,
      });
    }
  },
  getTodoById: async (req, res) => {
    try {
      const todo = await Todo.findOne({
        where: { id: req.params.todosId, user_id: req.params.userId },
      });

      if (!todo) {
        res.status(401).json({
          message: "Todo yang anda cari tidak di temukan",
        });
      } else {
        res.status(200).json({
          message: "Sukses mendapatkan todo dengan id",
          data: todo,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "terjadi kesalahan server",
        error: error.message,
      });
    }
  },
  createNewTodo: async (req, res) => {
    try {
      const newTodo = req.body;
      const user = await User.findOne({ where: { id: req.params.userId } });

      if (!user) {
        res.status(404).json({
          message: "Unauthorized",
        });
      } else {
        const todo = await Todo.create({
          value: newTodo.value,
          user_id: parseInt(user.id),
        });
        res.status(201).json({
          message: "sukses menambahkan todo",
          data: todo,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "terjadi kesalahan server",
        error: error.message,
      });
    }
  },
  editTodoById: async (req, res) => {
    try {
      const updateTodo = req.body;
      const user = await User.findOne({ where: { id: req.params.userId } });
      if (!user) {
        res.status(404).json({
          message: "Unauthorized",
        });
      } else {
        await Todo.update(
          {
            status: updateTodo.status,
          },
          { where: { id: req.params.todoId } }
        );
        res.status(201).json({
          message: "Todo berhasil di update",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "terjadi kesalahan server",
        error: error.message,
      });
    }
  },
  deleteTodoById: async (req, res) => {
    try {
      const user = await User.findOne({ where: { id: req.params.userId } });

      if (!user) {
        res.status(401).json({
          message: "Unauhtorized",
        });
      } else {
        await Todo.destroy({
          where: {
            id: req.params.todoId,
          },
        });
        res.status(200).json({
          message: "Berhasil menghapus todo by id",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "terjadi kesalahan server",
        error: error.message,
      });
    }
  },
  deleteAllTodo: async (req, res) => {
    try {
      const deletedAllTodo = await Todo.destroy({ where: {} });

      if (deletedAllTodo) {
        res.status(200).json({
          message: "Berhasil menghapus semua todo",
        });
      } else {
        res.status(400).json({
          message: "Semua todo sudah terhapus",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "terjadi kesalahan server",
        error: error.message,
      });
    }
  },
};
