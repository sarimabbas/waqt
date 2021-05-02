import {
  Box,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Button,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useRecoilState, useSetRecoilState } from "recoil";
import Select from "react-select";
import moment from "moment-timezone";
import { clocks, showAddClockModal } from "../store";
import { useMemo, useState } from "react";
import { DateTime } from "luxon";
import { IClock } from "../models";
import { v4 as uuidv4 } from "uuid";

function AddClock() {
  const [show, setShow] = useRecoilState(showAddClockModal);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const setClocks = useSetRecoilState(clocks);

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

  const handleAdd = () => {
    const newClock: IClock = {
      id: uuidv4(),
      name: selectedTimezone,
      timezone: selectedTimezone,
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
          <Text>Add by timezone...</Text>
          <Select
            options={timezones}
            onChange={(val) => {
              setSelectedTimezone(val?.value);
            }}
          />
          <Box h={10}></Box>
          <Text>...Or by city</Text>
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
