import Clock from "./Clock";
import { SimpleGrid } from "@chakra-ui/react";
import { useRecoilValue, useRecoilState } from "recoil";
import { clocks, warpClockAtom } from "../store";
import { useEffect } from "react";
import { DateTime } from "luxon";

const Clocks = () => {
  const clockList = useRecoilValue(clocks);
  const [warpClock, setWarpClock] = useRecoilState(warpClockAtom);

  // sync warp time with primary clock if primary clock changes
  useEffect(() => {
    if (warpClock) {
      const primaryClock = clockList.find((c) => c.isPrimary);
      setWarpClock((wc) =>
        DateTime.fromObject({
          hour: wc.hour,
          minute: wc.minute,
          zone: primaryClock.timezone,
        })
      );
    }
  }, [clockList]);

  return (
    <SimpleGrid columns={[1, 2]} spacing={5}>
      {clockList.map((c) => (
        <Clock {...c} key={c.id} />
      ))}
    </SimpleGrid>
  );
};

export default Clocks;
