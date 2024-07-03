import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import TODOHero from "./components/TodoHero/TodoHero";
import TODOList from "./components/Todolist/TodoList";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <TODOHero />
      <Form />
      <TODOList />
    </div>
  );
}

export default App;
