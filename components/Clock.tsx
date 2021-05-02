import { DeleteIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
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
      return clocks.filter((c) => c.id !== id);
    });
  };

  const handleMakePrimary = () => {
    setClocks((clocks) => {
      const updated = clocks.map((c) => {
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
      });
      return updated;
    });
  };

  const cardBgColor = useColorModeValue("gray.50", "gray.700");

  return (
    <Box
      rounded="lg"
      overflow="hidden"
      p="1"
      bg={isPrimary ? "linear-gradient(#e66465, #9198e5)" : cardBgColor}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="50% 10%"
      bgBlendMode="multiply"
    >
      <VStack
        bg={cardBgColor}
        p="4"
        spacing={5}
        id={id}
        pos="relative"
        rounded="lg"
      >
        <HStack
          px={4}
          w="full"
          pos="absolute"
          top="4"
          align="center"
          justify="space-between"
          spacing={10}
        >
          <IconButton
            id={isPrimary + ""}
            onClick={handleDelete}
            size="sm"
            aria-label="delete"
            icon={<DeleteIcon />}
          />
          <IconButton
            onClick={handleMakePrimary}
            size="sm"
            aria-label="delete"
            icon={<TimeIcon />}
          />
        </HStack>
        <Clock
          value={changeJSDateTimezone(time.toJSDate(), timezone)}
          renderHourMarks={true}
          hourMarksLength={5}
          hourMarksWidth={2}
          renderMinuteMarks={false}
          renderNumbers={true}
        />
        <VStack>
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
          {/* editable heading */}
          <Heading size="md" textAlign="center" noOfLines={1} isTruncated>
            <TextEditable
              initialValue={name ?? timezone}
              onBlur={handleEditName}
            />
          </Heading>
        </VStack>
      </VStack>
    </Box>
  );
};

export default CustomClock;
