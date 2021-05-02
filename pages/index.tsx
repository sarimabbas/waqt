import { Box, Button, HStack, Link, Text, Input } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import AddClock from "../components/AddClock";
import ChangeTime from "../components/ChangeTime";
import Clocks from "../components/Clocks";
import Layout from "../components/Layout";
import { showAddClockModal } from "../store";
import Head from "next/head";

export default function Home() {
  const setShow = useSetRecoilState(showAddClockModal);
  return (
    <>
      <Head>
        <script src="https://buttons.github.io/buttons.js"></script>
      </Head>
      <Layout>
        <Box h="8" />
        <HStack justifyContent="space-between">
          <Button onClick={() => setShow(true)}>Add clock</Button>
          <ChangeTime />
        </HStack>
        <AddClock />
        <Box h="4"></Box>
        <Clocks />
      </Layout>
    </>
  );
}
