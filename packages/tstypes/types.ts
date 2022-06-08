export interface TodoRequest {
  title: string;
}

export interface Todo extends TodoRequest {
  id: number;
  tasks: Task[];
}

export interface TaskRequest {
  task: string;
  todoId: number;
}

export interface Task extends TaskRequest {
  id: number;
  completed: boolean;
}

export interface TaskCompletionRequest {
  taskId: number;
  todoId: number;
  completed: boolean;
}
