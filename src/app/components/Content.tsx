"use client";

import React, { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import Button from "./custom/Button";

const Content = () => {
  const { rawTodos } = useContext(TodoContext);

  return (
    <div>
      {/* Sort */}
      <div className="flex gap-8">
        <p>Low</p>
        <p>Medium</p>
        <p>High</p>
      </div>
      <div className="flex gap-8">
        <p>Todo</p>
        <p>Doing</p>
        <p>Done</p>
      </div>

      <ul className="flex flex-col gap-8">
        {rawTodos.todos.map((todo) => (
          <li key={todo.id}>
            <div className="flex justify-between bg-white p-6 rounded-lg shadow-lg">
              {/* Text Content */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl">{todo.task}</h3>
                <p>{todo.description}</p>
                <p>Due Date : {todo.dueDate}</p>
                <p>Priority: {todo.priority}</p>
                <p>Status: {todo.completed ? "Done" : "Doing"}</p>
              </div>

              {/* Edit Delete */}
              <div>
                <p>edit</p>
                <p>delete</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
