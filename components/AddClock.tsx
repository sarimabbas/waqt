import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { DateTime } from "luxon";
import moment from "moment-timezone";
import { useMemo, useState } from "react";
import Select from "react-select";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { IClock } from "../models";
import { clocks, showAddClockModal } from "../store";

function AddClock() {
  const [show, setShow] = useRecoilState(showAddClockModal);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [clocksData, setClocks] = useRecoilState(clocks);

  const timezones = useMemo(() => {
    const list = moment.tz.names();
    const filtered = list.filter((zone) => {
      return DateTime.utc().setZone(zone).isValid;
    });
    return filtered.map((item) => {
      return {
        value: item,
        label: item,
      };
    });
  }, []);

  const primaryAlreadyExists = () => clocksData.some((c) => c.isPrimary);

  const handleAdd = () => {
    const newClock: IClock = {
      id: uuidv4(),
      name: selectedTimezone,
      timezone: selectedTimezone,
      isPrimary: !primaryAlreadyExists(),
    };
    setClocks((val) => [...val, newClock]);
    setShow(false);
  };

  return (
    <Modal isOpen={show} onClose={() => setShow(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Add Clock</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb="2">Add by timezone...</Text>
          <Select
            options={timezones}
            onChange={(val) => {
              setSelectedTimezone(val?.value);
            }}
          />
          {/* <Box h={10}></Box> */}
          {/* <Text>...Or by city</Text> */}
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleAdd} disabled={!selectedTimezone}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddClock;
