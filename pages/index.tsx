import { Box, Button, HStack } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import AddClock from "../components/AddClock";
import ChangeTime from "../components/ChangeTime";
import Clocks from "../components/Clocks";
import Layout from "../components/Layout";
import { showAddClockModal } from "../store";
import Seo from "../components/Seo";
import Tutorial from "../components/Tutorial";

export default function Home() {
  const setShow = useSetRecoilState(showAddClockModal);
  return (
    <>
      <Seo
        title="Waqt - A simple timezone tracker"
        description="An essential tool for the remote era. Waqt lets you effortlessly convert between timezones across the world. With its powerful warp time feature, you can keep up with colleagues and friends no matter where they are."
        image={`https://waqt.doom.sh/screenshot.png`}
      />
      <Layout>
        <Box h="8" />
        <HStack justifyContent="space-between">
          <Button onClick={() => setShow(true)}>Add clock</Button>
          <ChangeTime />
        </HStack>
        <AddClock />
        <Tutorial />
        <Box h="4"></Box>
        <Clocks />
      </Layout>
    </>
  );
}
