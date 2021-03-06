import { CreateTodoForm } from "ui";
import { DisplayTodos } from "ui";

import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";

import { useMachine } from "@xstate/react";
import { todoMachine } from "state-machine";

const Home: NextPage = () => {
  const [state, send] = useMachine(todoMachine, {
    services: {
      loadTodos: async () => {
        return [""];
      },
    },
  });
  return (
    <Box bg="white" p={6} rounded="md">
      <CreateTodoForm
        createTodo={() => console.log("todo created")}
      />
      <DisplayTodos
        todos={[
          {
            id: 1,
            title: "sample data",
            tasks: [
              {
                id: 1,
                task: "more sample",
                todoId: 1,
                completed: false,
              },
            ],
          },
        ]}
        createSubtask={() => console.log("create")}
        toggleSubtaskCompletion={() => console.log("toggle")}
      />
    </Box>
  );
};

export default Home;
