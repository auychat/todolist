'use client'

import React, { createContext, useState } from "react";
import { dummyData } from "@/pages/api/dummyData";
import { ITodoListData } from "./TodoInterface";

// Create a new context for managing the todo list data
export const TodoContext = createContext<ITodoListData>({
    todos: [],
});

// Create a provider for the todo list context
export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const rawTodos = dummyData;

  return (
    <TodoContext.Provider value={rawTodos}>{children}</TodoContext.Provider>
  );
};
