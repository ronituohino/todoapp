import { CreateTodoForm } from "ui";
import { DisplayTodos } from "ui";

import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box bg="white" p={6} rounded="md">
      <CreateTodoForm
        createTodo={() => console.log("todo created")}
      />
      <DisplayTodos
        todos={[]}
        createSubtask={() => console.log("create")}
        toggleSubtaskCompletion={() => console.log("toggle")}
      />
    </Box>
  );
};

export default Home;
