export interface ITodoItem {
    id: number;
    task: string;
    description: string;
    dueDate: string;
    priority: string;
    completed: boolean;
}

export interface ITodoListData {
    todos: ITodoItem[];
}

export interface ITodoContext {
    rawTodos: ITodoListData;
    addTodo: (todo: ITodoItem) => void;
    editTodo: (todoId: number) => void;
    deleteTodo: (todoId: number) => void;
}