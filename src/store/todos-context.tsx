import { createContext } from "react";
import React, { useState } from "react";
import Todo from "../models/todos";

type TodosContextObj = {
  items: Todo[];
  addItems: (text: string) => void;
  removeItem: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addItems: () => {},
  removeItem: () => {},
});

const TodosContextProvider: React.FC = (props) => {
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

  const contextValue: TodosContextObj = {
    items: todos,
    addItems: addTodoHandler,
    removeItem: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
