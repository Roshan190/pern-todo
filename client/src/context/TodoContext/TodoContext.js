import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext({ todos: [], setTodos: () => {} });

export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
