import axios from "axios";

export default async function deleteTodo({ todoId }) {
  try {
    return await axios.delete(
      `${process.env.REACT_APP_DB_ENDPOINT}/delete-todo/${todoId}`
    );
  } catch (error) {
    console.error(error);
  }
}
