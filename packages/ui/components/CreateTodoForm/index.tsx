import {
  Box,
  Flex,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import * as yup from "yup";

type Props = {
  createTodo: Function;
};

export const CreateTodoForm = ({ createTodo }: Props) => {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: yup.object().shape({
      title: yup.string().required(),
    }),
    onSubmit: (values) => createTodo({ title: values.title }),
  });

  return (
    <Box
      mb="4"
      boxShadow="xs"
      borderRadius="lg"
      borderWidth="1px"
      p="4"
    >
      <form onSubmit={formik.handleSubmit}>
        <Flex direction="row" gap="4">
          <FormControl isInvalid={!!formik.errors.title}>
            <Input
              id="title"
              name="title"
              type="text"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.title}
              placeholder="Something I should do..."
            />
            <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="purple">
            Add
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
