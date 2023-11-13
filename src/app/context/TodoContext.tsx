'use client'

import React, { createContext, useState, useEffect, use } from "react";
import { dummyData } from "@/pages/api/dummyData";
import { ITodoContext, ITodoListData, ITodoItem } from "./TodoInterface";

// Create a new context for managing the todo list data
export const TodoContext = createContext<ITodoContext>({
  rawTodos: { todos: [] },
  addTodo: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
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
    setTodos(newTodos);
  };

  // Edit a todo in the list
  const editTodo = (todoId: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // Delete a todo from the list
  const deleteTodo = (todoId: number) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };


  const contextValue: ITodoContext ={
    rawTodos: {todos: todos},
    addTodo: addTodo,
    editTodo: editTodo,
    deleteTodo: deleteTodo,
  }

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
