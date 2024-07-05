import axios from "axios";

export default async function addTodo({ user_email, title, status }) {
  try {
    return await axios.post(`${process.env.REACT_APP_DB_ENDPOINT}/add-todo`, {
      user_email,
      title,
      status,
      date: new Date().toLocaleDateString("en-IN"),
    });
  } catch (error) {
    console.error(error);
  }
}
