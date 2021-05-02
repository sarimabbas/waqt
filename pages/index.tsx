import { Box, Button, HStack, Link, Text, Heading } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import AddClock from "../components/AddClock";
import Clocks from "../components/Clocks";
import Layout from "../components/Layout";
import { showAddClockModal } from "../store";

export default function Home() {
  const setShow = useSetRecoilState(showAddClockModal);
  return (
    <Layout>
      <Text>
        Direct all queries to{" "}
        <Link href="mailto:hello@sarim.work">hello@sarim.work</Link>
      </Text>
      <Box h="8" />
      <HStack justifyContent="space-between">
        <Button
          onClick={() => setShow(true)}
          bgColor="green.100"
          textColor="olive.700"
          _hover={{ bgColor: "green.200" }}
        >
          Add a clock
        </Button>
        <Button
          bgColor="green.100"
          textColor="olive.700"
          _hover={{
            textColor: "white",
            bgImage: "url('/warp.gif')",
            bgRepeat: "no-repeat",
            bgSize: "cover",
            bgPosition: "50% 20%",
          }}
        >
          Warp time
        </Button>
      </HStack>
      <AddClock />
      <Box h="4"></Box>
      <Clocks />
    </Layout>
  );
}
