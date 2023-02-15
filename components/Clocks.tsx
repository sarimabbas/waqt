import { SimpleGrid } from "@chakra-ui/react";
import { DateTime } from "luxon";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { clocks, warpClockAtom } from "../store";

const DynamicClock = dynamic(() => import("./Clock"), {
  ssr: false,
});

const Clocks = () => {
  const clockList = useRecoilValue(clocks);
  const [warpClock, setWarpClock] = useRecoilState(warpClockAtom);

  // sync warp time with primary clock if primary clock changes
  useEffect(() => {
    if (warpClock) {
      const primaryClock = clockList.find((c) => c.isPrimary);
      setWarpClock((wc) =>
        DateTime.fromObject(
          {
            hour: wc.hour,
            minute: wc.minute,
          },
          {
            zone: primaryClock.timezone,
          }
        )
      );
    }
  }, [clockList]);

  return (
    <SimpleGrid columns={[1, 2]} spacing={5}>
      {clockList.map((c) => (
        <DynamicClock {...c} key={c.id} />
      ))}
    </SimpleGrid>
  );
};

export default Clocks;
