import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    setTodos((prevState) => {
      return prevState.concat(new Todo(todoText));
    });
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} removeTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
