import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Clocks from "../components/Clocks";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Heading size="md">A simple timezone tracker</Heading>
      <Box h="4"></Box>
      <Flex justifyContent="flex-end">
        <Button
          bgColor="green.100"
          textColor="olive.700"
          _hover={{ bgColor: "green.200" }}
        >
          Add a clock
        </Button>
      </Flex>
      <Box h="4"></Box>
      <Clocks />
    </Layout>
  );
}
