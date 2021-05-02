import {
  Box,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  AspectRatio,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { showTutorialAtom } from "../store";

function Tutorial() {
  const [show, setShow] = useRecoilState(showTutorialAtom);

  return (
    <Modal isOpen={show} onClose={() => setShow(false)} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">How to use</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AspectRatio
            overflow="hidden"
            ratio={1446 / 1656}
            rounded="lg"
            mb="4"
            border="1px"
            borderColor="gray.200"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/FtbtTTWIpdQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Tutorial;
