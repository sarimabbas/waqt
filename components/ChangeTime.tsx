import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Input,
  Text,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";
import { DateTime } from "luxon";
import { ChangeEvent, useRef } from "react";
import { useRecoilState } from "recoil";
import { clocks, warpClockAtom } from "../store";

const ChangeTime = () => {
  const [clocksData, setClocks] = useRecoilState(clocks);
  const [warpClock, setWarpClock] = useRecoilState(warpClockAtom);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkTime = e.target.value;
    console.log("check time", checkTime);
    if (checkTime !== "") {
      const hour = parseInt(checkTime.split(":")[0]);
      const minute = parseInt(checkTime.split(":")[1]);
      const primaryClock = clocksData.find((c) => c.isPrimary);
      const warpClock = DateTime.fromObject({
        hour: hour,
        minute: minute,
        zone: primaryClock.timezone,
      });
      setWarpClock(warpClock);
    } else {
      setWarpClock(null);
    }
  };

  const warpState = {
    textColor: "white",
    bg: "url('/warp.gif'), rgba(53, 9, 35, 0.3)",
    bgRepeat: "no-repeat",
    bgSize: "cover",
    bgPosition: "50% 10%",
    bgBlendMode: "multiply",
  };

  const buttonBaseState = () => {
    if (warpClock) {
      return warpState;
    }
    return {};
  };

  const inputEl = useRef(null);

  return (
    <Popover>
      <PopoverTrigger>
        <Button {...buttonBaseState()} _hover={warpState} w="110px">
          {warpClock
            ? warpClock.toLocaleString({
                hour: "numeric",
                minute: "2-digit",
              })
            : "Warp time"}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Warp time</PopoverHeader>
        <PopoverBody>
          <Text mb="4">Change all clocks according to the primary clock:</Text>
          <Input type="time" onChange={(e) => handleChange(e)} ref={inputEl} />
        </PopoverBody>
        <PopoverFooter>
          <Button
            onClick={() => {
              inputEl.current.value = "";
              setWarpClock(null);
            }}
          >
            Clear
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default ChangeTime;
