import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/lora/400.css";
import "@fontsource/lora/700.css";
import "react-clock/dist/Clock.css";
import { RecoilRoot } from "recoil";
import theme from "../chakra.theme";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}
export default MyApp;
