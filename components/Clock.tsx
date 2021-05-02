import Clock from "react-clock";
import { DateTime } from "luxon";
import { Box, Heading, VStack, Text, HStack } from "@chakra-ui/layout";

const CustomClock = ({ time }: { time: DateTime }) => {
  return (
    <VStack bg="green.100" rounded="lg" p="4" spacing={5}>
      <Clock
        value={time.toJSDate()}
        renderHourMarks={true}
        hourMarksLength={5}
        hourMarksWidth={2}
        renderMinuteMarks={false}
        renderNumbers={true}
      />
      <VStack>
        <Heading size="md">New Haven</Heading>
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
