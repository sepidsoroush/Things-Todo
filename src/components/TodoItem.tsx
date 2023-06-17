import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ todoText: string; removeTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.removeTodo}>
      {props.todoText}
    </li>
  );
};

export default TodoItem;
