import React from "react";
import Todo from "../models/todos";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} todoText={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
