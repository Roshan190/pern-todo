import axios from "axios";

export default async function getTodos() {
  try {
    const userEmail = "test@gmail.com";
    return await axios.get(
      `${process.env.REACT_APP_DB_ENDPOINT}/get-todos/${userEmail}`
    );
  } catch (error) {
    console.error(error);
  }
}
