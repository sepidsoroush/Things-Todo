import Todos from "./components/Todos";
import Todo from "./models/todos";

function App() {
  const todos = [new Todo("Learn TypeScript"), new Todo("Learn React")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
