import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import getTodos from "../../apis/getTodos";

const TodoContext = createContext({
  todos: [],
  setTodos: () => {},
  getTodoList: () => {},
});

export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const getTodoList = async () => {
    try {
      const { data, status } = await getTodos();
      if (status === 200) {
        setTodos(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos, getTodoList }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
