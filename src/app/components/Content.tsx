"use client";

import React, { useContext,useState, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import Button from "./custom/Button";

const Content = () => {
  const { rawTodos, editTodo, deleteTodo } = useContext(TodoContext);

  const handleEditTodo = (todoId : number) => {
    console.log("edit todo id", todoId);
  }

  const handleDeleteTodo = (todoId : number) => {
    console.log("delete todo id", todoId);
    alert(`Are you sure you want to delete todo id ${todoId}`);
    deleteTodo(todoId);
  }

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
              <div className="flex flex-col gap-4 items-center justify-center">
                <button
                  type="button"
                  className="w-[100px] h-[50px] bg-blue-500 rounded-lg text-white font-bold hover:bg-opacity-75"
                  onClick={() => handleEditTodo(todo.id)}
                >
                  edit
                </button>
                <button
                  type="button"
                  className="w-[100px] h-[50px] bg-red-500 rounded-lg text-white font-bold hover:bg-opacity-75"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
