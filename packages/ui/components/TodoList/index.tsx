import { Accordion } from "@chakra-ui/react";

type Props = {
  children: JSX.Element;
};

export const TodoList = ({ children }: Props) => {
  return (
    <Accordion allowMultiple width="xl">
      {children}
    </Accordion>
  );
};
