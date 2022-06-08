import { createMachine, assign } from "xstate";

export const todoMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUFkCGBjAFgJYB2YAdADarYQlQAq6qsAxBqWSQG6oDW5aDDgIlyVGnUYZYCbqlzZkhVMQDaABgC6iUAAdmhJSp0gAHogAc6gExlr6gJwBmAIwA2CwBZPAdk8uAGhAAT0QAWh8LMjcnJxtfAFZHNx9rAF80oMEsPCIObNgAGWoISBZcACcwRTAAOTAAdxN9WENlYhNzBASHTzIEjx83T2tfF3ULCyDQhGsEnzInHwcLSOsnJIsBjKymYTyBJiKSstKKMGQwZoMjDqQzRGs3BzJ1FydPB0c5nqHPacQLjmZC+QJc4LeA3UEx2IGy+1EZAKxRoZUghmurVunUePgWcSBng81gszy+CQBCDiTlennUAzJqQssQSsPhuURlWqSmIDCYZAAZqgKgBbACSxF0AFdkCxYFKAEYijH3FptYz3LqrWxud7qDZfJapayU562T6jBwuCyjazghxsvYcjhcxSSfmwbBcOj1BpSVBsFTkOT8JFOkQuqpu3n+sie72833+2TEHgKW4abSqm7tHEIXVRN4QlzzLYuXqm3xkbxl6xM5nWdKZOHhg5kV08vkYONen2Nf0sMAVCrCsi6CiKIWisNCZ3kDvu7vxvt+pgptNulSZzHqu6gLoxF4uHz6t7eQ0OByUm3qMh-NzDN4WY8xR2ziPkM4XRcB9jB1N8Ic75tl+nbJnI6btNu2ZYrmmqPAkIIuL4RJAlY9jqP8ISIMMdhuAkGxEhMbjJJ4b45B+ZCgT+g7DqO46TsKIozhRIFgOcYFrhBm5qFoO7YvBCCeEsZDMn44mfM4wxuJWCw1gkQL1k4jbkQiHDopx3ZTiKACitCyvKSoqnoOYavu4TuC4rx1jaPRJCsUzYQgJ4vI2Pglg+3gEUMqlzmQGk-j2CZQHphiQAOf6cABobspRAUxh6va8qFlwQOBAGQVufEwbueZPFEblWA4dpuT4TiUgkqx3u4CkOIM8yxL5cX6YFy7Jfp4VMLRI4VGOE7INpLFqeQ8VdqgQV0ClnUYOu8g8dBJmwWZDyzMCzyuGVmEfEkCRYTMZU0gRnnqKkCRnfqGTNsQ6BwCYsVtuItAJdI-FweZCAvJeKTOPSzyePMbgmk5YQQtEYIrCknikq4FhNW2yInBAr3LV0TiXneGypL4J6jLElL2osDibe4dr4d4ZHNvdnJRpp43aRK0rIMje4rV4tjuE4VhFu8TjDBVz52ECgMeA+Gw2nD1Pcq1SVQEmTDM3mz5RGVzgDJEmHgntiCRMrWyfO8MQ2CkEuRlLz2oArgnLH0KsbCkVj+MhFUTHY-gkshgN2gpJufux37m5b71uP0RJPDEIzKV8UP4wMixDLzynPNbPispTraIqNsbaSlgcrSDpKibqHsrF9jkzJVVklQ+vTIbt3g+-5LXmxN7VhWl8s5QJ71hMpdheMykcnidu2mnirvLH4rgESMqe7MBGdN2NuddGEdq3qSmvPBYpfOwVbuRNaxV4rDafz+pdEVAAylyYAs2qXcrcJLyrAkdpeJtp0Uk5z59E8J0Pg7G0cwfbL3COsPoG9i7bzqmXCyzJ+jMl2hMdQJEPCrEumkIAA */
  createMachine(
    {
      context: {
        todos: [] as string[],
        errorMessage: undefined as string | undefined,
        todoInput: "",
      },
      tsTypes: {} as import("./app.typegen").Typegen0,
      schema: {
        services: {} as {
          loadTodos: {
            data: string[];
          };
          saveTodo: {
            data: void;
          };
          deleteTodo: {
            data: void;
          };
          updateTodo: {
            data: void;
          };
        },
      },
      id: "todoMachine",
      initial: "loadingTodos",
      states: {
        loadingTodos: {
          invoke: {
            src: "loadTodos",
            onDone: [
              {
                actions: "assignTodosToContext",
                cond: "hasTodos",
                target: "todosLoaded",
              },
              {
                target: "creatingTodo",
              },
            ],
          },
        },
        todosLoaded: {
          on: {
            createNew: {
              target: "creatingTodo",
            },
            delete: {
              target: "deletingTodo",
            },
            edit: {
              target: "editingTodo",
            },
          },
        },
        creatingTodo: {
          initial: "formInput",
          states: {
            formInput: {
              on: {
                submit: {
                  target: "savingNewTodo",
                },
              },
            },
            savingNewTodo: {
              invoke: {
                src: "saveTodo",
                onDone: [
                  {
                    target: "#todoMachine.todosLoaded",
                  },
                ],
                onError: [
                  {
                    target: "#todoMachine.errorScreen",
                  },
                ],
              },
            },
          },
        },
        deletingTodo: {
          invoke: {
            src: "deleteTodo",
            onDone: [
              {
                target: "loadingTodos",
              },
            ],
            onError: [
              {
                target: "errorScreen",
              },
            ],
          },
        },
        editingTodo: {
          initial: "formEdit",
          states: {
            formEdit: {
              on: {
                submit: {
                  target: "savingEditedTodo",
                },
              },
            },
            savingEditedTodo: {
              invoke: {
                src: "updateTodo",
                onDone: [
                  {
                    target: "#todoMachine.todosLoaded",
                  },
                ],
                onError: [
                  {
                    target: "#todoMachine.errorScreen",
                  },
                ],
              },
            },
          },
        },
        errorScreen: {},
      },
    },
    {
      actions: {
        assignTodosToContext: assign((context, event) => {
          return {
            todos: event.data,
          };
        }),
      },
      guards: {
        hasTodos: (context, event) => {
          return event.data.length > 0;
        },
      },
    }
  );
