// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    assignTodosToContext: "done.invoke.todoMachine.loadingTodos:invocation[0]";
  };
  internalEvents: {
    "done.invoke.todoMachine.loadingTodos:invocation[0]": {
      type: "done.invoke.todoMachine.loadingTodos:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.todoMachine.deletingTodo:invocation[0]": {
      type: "done.invoke.todoMachine.deletingTodo:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    loadTodos: "done.invoke.todoMachine.loadingTodos:invocation[0]";
    saveTodo: "done.invoke.todoMachine.creatingTodo.savingNewTodo:invocation[0]";
    deleteTodo: "done.invoke.todoMachine.deletingTodo:invocation[0]";
    updateTodo: "done.invoke.todoMachine.editingTodo.savingEditedTodo:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    services: "loadTodos" | "deleteTodo" | "saveTodo" | "updateTodo";
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    loadTodos: "done.invoke.todoMachine.deletingTodo:invocation[0]";
    deleteTodo: "delete";
    saveTodo: "submit";
    updateTodo: "submit";
  };
  eventsCausingGuards: {
    hasTodos: "done.invoke.todoMachine.loadingTodos:invocation[0]";
  };
  eventsCausingDelays: {};
  matchesStates:
    | "loadingTodos"
    | "todosLoaded"
    | "creatingTodo"
    | "creatingTodo.formInput"
    | "creatingTodo.savingNewTodo"
    | "deletingTodo"
    | "editingTodo"
    | "editingTodo.formEdit"
    | "editingTodo.savingEditedTodo"
    | "errorScreen"
    | {
        creatingTodo?: "formInput" | "savingNewTodo";
        editingTodo?: "formEdit" | "savingEditedTodo";
      };
  tags: never;
}
