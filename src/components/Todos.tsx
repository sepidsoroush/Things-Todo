import React, { FC } from "react";
import Todo from "../models/todos";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; removeTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          todoText={item.text}
          removeTodo={props.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
