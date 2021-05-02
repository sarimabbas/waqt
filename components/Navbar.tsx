import { Heading, Stack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Stack
      justify="space-between"
      align="baseline"
      direction={["column", "row"]}
    >
      <Heading letterSpacing="tight">Waqt</Heading>
      <Heading size="md">A simple timezone tracker</Heading>
    </Stack>
  );
};

export default Navbar;
