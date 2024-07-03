import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import TODOHero from "./components/TodoHero/TodoHero";
import TODOList from "./components/Todolist/TodoList";
import TodoContextProvider from "./context/TodoContext/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <div className="wrapper">
        <Header />
        <TODOHero />
        <Form />
        <TODOList />
      </div>
    </TodoContextProvider>
  );
}

export default App;
