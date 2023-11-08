import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./custom/Button";

interface IFormInput {
  title: string;
  description: string;
  dueDate: string;
  priority: PriorityEnum;
  status: StatusEnum;
}

enum PriorityEnum {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

enum StatusEnum {
  Todo = "Todo",
  Doing = "Doing",
  Done = "Done",
}

const AddTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <label>Title</label>
      <input type="text" {...register("title")} />
      <label>Description</label>
      <input type="text" {...register("description")} />
      <label>Due Date</label>
      <input type="date" {...register("dueDate")} />
      <label>Priority</label>
      <select {...register("priority")}>
        <option value={PriorityEnum.Low}>Low</option>
        <option value={PriorityEnum.Medium}>Medium</option>
        <option value={PriorityEnum.High}>High</option>
      </select>
      <select {...register("status")}>
        <option value={StatusEnum.Todo}>Todo</option>
        <option value={StatusEnum.Doing}>Doing</option>
        <option value={StatusEnum.Done}>Done</option>
      </select>
      <Button type="submit" btnColor="blue-primary">Add Todo</Button>
    </form>
  );
};

export default AddTodo;
