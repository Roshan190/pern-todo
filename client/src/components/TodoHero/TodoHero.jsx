import { useTodos } from "../../context/TodoContext/TodoContext";

function TODOHero() {
  const { todos } = useTodos();

  const todosCompleted = todos.reduce((prev, curr) => {
    if (curr?.status) {
      return (prev += 1);
    }

    return prev;
  }, 0);

  return (
    <section className="todohero_section">
      <div>
        <p className="text_large">Task Done</p>
        <p className="text_small">Keep it up</p>
      </div>
      <div>
        {todosCompleted} / {todos.length}
      </div>
    </section>
  );
}
export default TODOHero;
