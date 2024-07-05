import { useState } from "react";
import { useTodos } from "../../context/TodoContext/TodoContext";
import addTodo from "../../apis/addTodo";

function Form() {
  const [todo, setTodo] = useState("");
  const { getTodoList } = useTodos();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (todo) {
      try {
        const { data, status } = await addTodo({
          user_email: "test@gmail.com",
          title: todo,
          status: false,
        });

        if (status === 200) {
          getTodoList();
          setTodo("");
        } else {
          alert("Failed to add TODO.");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="todo">
        <input
          type="text"
          id="todo"
          placeholder="Write your next task"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </label>
      <button>
        <span className="visually-hidden">Submit</span>
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
        >
          <path
            d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
            fillRule="nonzero"
          />
        </svg>
      </button>
    </form>
  );
}
export default Form;
