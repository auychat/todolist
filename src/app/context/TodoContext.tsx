'use client'

import React, { createContext, useState, useEffect, use } from "react";
import { dummyData } from "@/pages/api/dummyData";
import { ITodoContext, ITodoListData, ITodoItem } from "./TodoInterface";

// Create a new context for managing the todo list data
export const TodoContext = createContext<ITodoContext>({
  rawTodos: { todos: [] },
  addTodo: () => {},
});

// Create a provider for the todo list context
export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const rawTodos = dummyData;
  const [todos, setTodos] = useState(rawTodos.todos);

  // Add a new todo to the list
  const addTodo = (newTodo: ITodoItem) => {
    const newTodos = todos.concat(newTodo);
    console.log("oldTodo", todos)
    console.log("newTodos", newTodos)
    setTodos(newTodos);
  };

  console.log("todos", todos)

  const contextValue: ITodoContext ={
    rawTodos: {todos: todos},
    addTodo: addTodo,
  }

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
