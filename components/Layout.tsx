import { Box, Container, VStack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <Container py="4" h="full" w="full">
      <VStack
        justify="space-between"
        w="full"
        align="left"
        h="full"
        spacing={10}
      >
        <Box>
          <Navbar />
          <Box h="4" />
          {children}
        </Box>
        <Footer />
      </VStack>
    </Container>
  );
};

export default Layout;
