import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./custom/Button";
import { TodoContext } from "../context/TodoContext";

interface IFormInput {
  id: number;
  task: string;
  description: string;
  dueDate: string;
  priority: string;
  completed: boolean;
}

interface AddTodoProps {
  showAddTodo: () => void;
}

const AddTodo = ({showAddTodo}: AddTodoProps) => {
  const { rawTodos, addTodo } = useContext(TodoContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // console.log(data);
    const newData = {
      ...data,
      id: rawTodos.todos.length + 1,
    }
    // console.log(newData)
    addTodo(newData);
    showAddTodo();
  };

  // handle add new todo

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <label>Title</label>
      <input type="text" {...register("task")} />
      <label>Description</label>
      <input type="text" {...register("description")} />
      <label>Due Date</label>
      <input type="date" {...register("dueDate")} />
      <label>Priority</label>
      <select {...register("priority")}>
        <option value={"Low"}>Low</option>
        <option value={"Medium"}>Medium</option>
        <option value={"High"}>High</option>
      </select>
      <select {...register("completed")}>
        <option value={"false"}>False</option>
        <option value={"true"}>True</option>
      </select>
      <Button type="submit" btnColor="blue-primary">
        Add Todo
      </Button>
    </form>
  );
};

export default AddTodo;
