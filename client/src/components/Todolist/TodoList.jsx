import TodoItem from "../TodoItem/TodoItem";

function TODOList({ todos = [{ task: "Hello World " }] }) {
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
