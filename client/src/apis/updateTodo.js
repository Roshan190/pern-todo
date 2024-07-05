import axios from "axios";

export default async function updateTodo({ user_email, title, status, id }) {
  try {
    return await axios.put(
      `${process.env.REACT_APP_DB_ENDPOINT}/update-todo/${id}`,
      {
        user_email,
        title,
        status,
        date: new Date().toLocaleDateString("en-IN"),
      }
    );
  } catch (error) {
    console.error(error);
  }
}
