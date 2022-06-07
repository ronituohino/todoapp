import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Progress,
  Flex,
  Divider,
  Input,
  Button,
  Text,
  AccordionIcon,
  Spacer,
  Textarea,
} from "@chakra-ui/react";

import { TodoEntrySubtask } from "../TodoEntrySubtask";

import { useFormik } from "formik";
import * as yup from "yup";

export const TodoEntry = ({
  id,
  title,
  tasks,
  createSubtask,
  toggleSubtaskCompletion,
}) => {
  const taskFormik = useFormik({
    initialValues: {
      task: "",
    },
    validationSchema: yup.object().shape({
      task: yup.string().required(),
    }),
    onSubmit: (values) =>
      createSubtask({
        task: values.task,
        todoId: id,
      }),
  });

  const taskAmount = tasks.length;
  const completedTaskAmount = tasks.filter((t) => t.completed).length;
  const completedValue = (completedTaskAmount / taskAmount) * 100;
  const todoCompleted = completedValue === 100;

  return (
    <AccordionItem
      borderRadius="lg"
      borderTopWidth="0px"
      boxShadow="xs"
      borderWidth="1px"
      mb="4"
    >
      <AccordionButton flexDir="row" fontSize="xl">
        <Text>{title}</Text>
        <Spacer />

        {taskAmount > 0 && (
          <>
            <Text ml="4" mr="2" fontSize="sm">
              {completedTaskAmount}/{taskAmount}
            </Text>
            <Progress
              mr="4"
              hasStripe
              flexBasis="250"
              value={completedValue}
            />
          </>
        )}

        <AccordionIcon />
      </AccordionButton>

      <Divider />

      <AccordionPanel pb={4}>
        <Textarea placeholder="Sample description" mt="2"></Textarea>

        <Divider mt="4" mb="2" />

        <Flex direction="column" p="2" gap="2">
          {tasks.map((task) => {
            return (
              <TodoEntrySubtask
                key={task.id}
                taskId={task.id}
                todoId={id}
                task={task.task}
                completed={task.completed}
                toggleSubtaskCompletion={toggleSubtaskCompletion}
              />
            );
          })}

          <form onSubmit={taskFormik.handleSubmit}>
            <Flex gap="2">
              <Input
                id="task"
                name="task"
                type="text"
                variant="flushed"
                onChange={taskFormik.handleChange}
                value={taskFormik.values.task}
                size="sm"
                placeholder="A subtask I should do..."
              ></Input>
              <Button type="submit" size="sm">
                Add
              </Button>
            </Flex>
          </form>

          <Flex>
            <Spacer />
            <Button disabled={!todoCompleted}>Complete task</Button>
          </Flex>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};
