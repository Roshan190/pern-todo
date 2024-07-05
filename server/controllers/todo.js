const pool = require("../db");
const { v4: uuidv4 } = require("uuid");

exports.getTodoList = async (request, response) => {
  try {
    const { userEmail } = request.params;

    const todos = await pool.query(
      "SELECT * from todos WHERE user_email = $1",
      [userEmail]
    );
    response.json(todos.rows);
  } catch (error) {
    console.error(error);
    response.send(error);
  }
};

exports.addTodo = async (request, response) => {
  try {
    console.log("request.body", request.body);
    const { user_email, title, status, date } = request.body;
    const id = uuidv4();

    const todos = await pool.query(
      "INSERT INTO todos(id, user_email, title, status, date) VALUES($1, $2, $3, $4, $5)",
      [id, user_email, title, status, date]
    );
    response.json(todos.rows);
  } catch (error) {
    console.error(error);
    response.send(error);
  }
};

exports.deleteTodo = async (request, response) => {
  try {
    const { todoId } = request.params;

    const todos = await pool.query("DELETE FROM todos WHERE id=$1", [todoId]);
    response.json(todos.rows);
  } catch (error) {
    console.error(error);
    response.send(error);
  }
};

exports.updateTodo = async (request, response) => {
  try {
    const { user_email, title, status, date, id } = request.body;

    const todos = await pool.query(
      "UPDATE todos SET user_email = $1, title = $2, status = $3, date = $4 WHERE id = $5;",
      [user_email, title, status, date, id]
    );
    response.json(todos.rows);
  } catch (error) {
    console.error(error);
    response.send(error);
  }
};
