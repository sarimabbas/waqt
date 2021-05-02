import { DeleteIcon, TimeIcon } from "@chakra-ui/icons";
import { Heading, HStack, Text, VStack, Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import Clock from "react-clock";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IClock } from "../models";
import { centralClock, clocks, warpClockAtom } from "../store";
import { changeJSDateTimezone } from "../utils";
import TextEditable from "./TextEditable";

const CustomClock = ({ id, name, timezone, isPrimary }: IClock) => {
  const setClocks = useSetRecoilState(clocks);
  const clockTime = useRecoilValue(centralClock);
  const warpClock = useRecoilValue(warpClockAtom);

  const time = warpClock
    ? warpClock.setZone(timezone)
    : clockTime.setZone(timezone);

  const handleEditName = (val: string) => {
    setClocks((clocks) =>
      clocks.map((c) => {
        if (c.id === id) {
          return {
            ...c,
            name: val,
          };
        } else {
          return c;
        }
      })
    );
  };

  const handleDelete = () => {
    setClocks((clocks) => {
      const updd = clocks.filter((c) => c.id !== id);
      console.log(updd);
      return updd;
    });
  };

  const handleMakePrimary = () => {
    setClocks((clocks) =>
      clocks.map((c) => {
        if (c.id === id) {
          return {
            ...c,
            isPrimary: true,
          };
        } else {
          return {
            ...c,
            isPrimary: false,
          };
        }
      })
    );
  };

  const warpState = () => {
    if (isPrimary) {
      return {
        bg: "linear-gradient(#e66465, #9198e5)",
        bgRepeat: "no-repeat",
        bgSize: "cover",
        bgPosition: "50% 10%",
        bgBlendMode: "multiply",
      };
    }
    return {
      bg: "green.100",
    };
  };

  return (
    <Box {...warpState()} rounded="lg" overflow="hidden" p="1">
      <VStack
        bg="green.100"
        p="4"
        spacing={5}
        id={id}
        pos="relative"
        rounded="lg"
      >
        <VStack top="5" right="5" w="full" align="flex-end" spacing={10}>
          <IconButton
            onClick={handleDelete}
            size="xs"
            aria-label="delete"
            icon={<DeleteIcon />}
            pos="absolute"
          />
          <IconButton
            onClick={handleMakePrimary}
            size="xs"
            aria-label="delete"
            icon={<TimeIcon />}
            pos="absolute"
          />
        </VStack>
        <Clock
          value={changeJSDateTimezone(time.toJSDate(), timezone)}
          renderHourMarks={true}
          hourMarksLength={5}
          hourMarksWidth={2}
          renderMinuteMarks={false}
          renderNumbers={true}
        />
        <VStack>
          {/* editable heading */}
          <Heading size="md" textAlign="center" noOfLines={1} isTruncated>
            <TextEditable
              initialValue={name ?? timezone}
              onBlur={handleEditName}
            />
          </Heading>
          {/* date and time */}
          <HStack>
            <Text>
              {time.toLocaleString({
                weekday: "short",
                month: "short",
                day: "2-digit",
              })}
            </Text>
            <Text>
              {time.toLocaleString({
                hour: "numeric",
                minute: "2-digit",
              })}
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default CustomClock;
