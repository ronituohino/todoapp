import { TodoList } from "../TodoList";
import { TodoEntry } from "../TodoEntry";

import { Todo } from "../../types/types";

export const DisplayTodos = ({
  todos,
  createSubtask,
  toggleSubtaskCompletion,
}) => {
  return (
    <TodoList>
      {todos.map((todo: Todo) => {
        return (
          <TodoEntry
            key={todo.id}
            id={todo.id}
            title={todo.title}
            tasks={todo.tasks}
            createSubtask={createSubtask}
            toggleSubtaskCompletion={toggleSubtaskCompletion}
          />
        );
      })}
    </TodoList>
  );
};
