import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import AddClock from "../components/AddClock";
import Clocks from "../components/Clocks";
import Layout from "../components/Layout";
import { showAddClockModal } from "../store";

export default function Home() {
  const setShow = useSetRecoilState(showAddClockModal);
  return (
    <Layout>
      <Heading size="md">A simple timezone tracker</Heading>
      <Box h="4"></Box>
      <Flex justifyContent="flex-end">
        <Button
          onClick={() => setShow(true)}
          bgColor="green.100"
          textColor="olive.700"
          _hover={{ bgColor: "green.200" }}
        >
          Add a clock
        </Button>
      </Flex>
      <AddClock />
      <Box h="4"></Box>
      <Clocks />
    </Layout>
  );
}
