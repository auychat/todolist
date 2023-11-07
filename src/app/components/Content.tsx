'use client'

import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Content = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <h1>Your Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>
              <h3>{todo.task}</h3>
              <p>{todo.description}</p>
              <p>Due Date : {todo.dueDate}</p>
              <p>Priority: {todo.priority}</p>
              <p>Status: {todo.completed ? "Done" : "Doing"}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
