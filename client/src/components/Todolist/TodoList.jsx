import { useTodos } from "../../context/TodoContext/TodoContext";
import TodoItem from "../TodoItem/TodoItem";

function TODOList() {
  const { todos } = useTodos();

  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => <TodoItem key={index} item={item} />)
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}
export default TODOList;
