import React from "react";
import { DateTime } from "luxon";
import Clock from "./Clock";
import { SimpleGrid } from "@chakra-ui/react";

const Clocks = () => {
  const currentTime = DateTime.local();

  return (
    <SimpleGrid columns={2} spacing={10}>
      <Clock time={currentTime} />
    </SimpleGrid>
  );
};

export default Clocks;
