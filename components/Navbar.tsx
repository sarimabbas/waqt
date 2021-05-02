import { Heading, HStack, Text } from "@chakra-ui/react";
import "@fontsource/lora/400.css";
import "@fontsource/lora/700.css";

const Navbar = () => {
  return (
    <HStack justify="space-between">
      <Heading letterSpacing="tight">Waqt</Heading>
      <HStack spacing={10}>
        <Text>Help</Text>
        <Text>Sign in</Text>
      </HStack>
    </HStack>
  );
};

export default Navbar;
