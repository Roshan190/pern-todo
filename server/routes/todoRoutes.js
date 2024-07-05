const express = require("express");
const todo = require("../controllers/todo");

const router = express.Router();

router.get("/get-todos/:userEmail", todo.getTodoList);

router.post("/add-todo", todo.addTodo);

router.delete("/delete-todo/:todoId", todo.deleteTodo);

router.put("/update-todo/:todoId", todo.updateTodo);

module.exports = router;
