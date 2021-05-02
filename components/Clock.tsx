import { DeleteIcon } from "@chakra-ui/icons";
import { Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import Clock from "react-clock";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IClock } from "../models";
import { centralClock, clocks } from "../store";
import { changeJSDateTimezone } from "../utils";
import TextEditable from "./TextEditable";

const CustomClock = ({ id, name, timezone }: IClock) => {
  const clockTime = useRecoilValue(centralClock);
  const time = clockTime.setZone(timezone);
  const setClocks = useSetRecoilState(clocks);

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

  return (
    <VStack
      bg="green.100"
      rounded="lg"
      p="4"
      spacing={5}
      id={id}
      pos="relative"
    >
      <IconButton
        onClick={handleDelete}
        size="xs"
        aria-label="delete"
        icon={<DeleteIcon />}
        pos="absolute"
        top="5"
        right="5"
      />
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
  );
};

export default CustomClock;
