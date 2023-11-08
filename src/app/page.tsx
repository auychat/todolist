"use client";

import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Content from "./components/Content";
import Header from "./components/Header";
import Button from "./components/custom/Button";

export default function Home() {
  const [showAddTodo, setShowAddTodo] = useState(false);

  const handleShowAddTodo = () => {
    setShowAddTodo(!showAddTodo);
  };

  return (
    <main className="bg-white h-full p-8">
      <div className="max-w-[720px] mx-auto p-8 bg-slate-300 rounded-lg">
        <Header />
        <div>
          {showAddTodo ? (
            <AddTodo showAddTodo={handleShowAddTodo} />
          ) : (
            <>
              <Button btnColor="blue-primary" className="w-full" onClick={handleShowAddTodo}>
                Add New Todo
              </Button>
              <Content />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
