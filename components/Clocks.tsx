import Clock from "./Clock";
import { SimpleGrid } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { clocks } from "../store";

const Clocks = () => {
  const clockList = useRecoilValue(clocks);
  return (
    <SimpleGrid columns={2} spacing={5}>
      {clockList.map((c) => (
        <Clock {...c} key={c.id} />
      ))}
    </SimpleGrid>
  );
};

export default Clocks;
