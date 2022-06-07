import { Text, Box, Checkbox, Flex } from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";

//import styles from "../styles/TodoEntrySubtask.module.css";

type Props = {
  task: string;
  taskId: number;
  todoId: number;
  completed: boolean;
  toggleSubtaskCompletion: Function;
};

//className={styles.taskwrapper}
//className={completed ? styles.strike : styles.nonstrike}

export const TodoEntrySubtask = ({
  task,
  taskId,
  todoId,
  completed,
  toggleSubtaskCompletion: toggleCompletion,
}: Props) => {
  return (
    <Flex
      onClick={() =>
        toggleCompletion({
          todoId,
          taskId,
          completed: !completed,
        })
      }
      cursor="pointer"
      p="2"
      borderRadius="sm"
    >
      <Text color="gray.400">{task}</Text>
    </Flex>
  );
};
