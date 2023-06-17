import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const contextValue = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {contextValue.items.map((item) => (
        <TodoItem
          key={item.id}
          todoText={item.text}
          removeTodo={contextValue.removeItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
