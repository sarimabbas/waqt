import { Heading, HStack, Text } from "@chakra-ui/react";
import "@fontsource/lora/400.css";
import "@fontsource/lora/700.css";

const Navbar = () => {
  return (
    <HStack justify="space-between">
      <Heading letterSpacing="tight">Waqt</Heading>
      <Heading size="md">A simple timezone tracker</Heading>
    </HStack>
  );
};

export default Navbar;
