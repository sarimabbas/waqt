import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/lora/400.css";
import "@fontsource/lora/700.css";
import { DateTime } from "luxon";
import { useEffect } from "react";
import "react-clock/dist/Clock.css";
import { RecoilRoot, useSetRecoilState } from "recoil";
import theme from "../chakra.theme";
import { centralClock } from "../store";
import "../styles/global.css";

const withRecoil = (AppComponent) => {
  const withRecoilComponent = (props) => (
    <RecoilRoot>
      <AppComponent {...props} />
    </RecoilRoot>
  );
  return withRecoilComponent;
};

function MyApp({ Component, pageProps }) {
  const setCentralClock = useSetRecoilState(centralClock);
  useEffect(() => {
    const handle = setInterval(() => {
      setCentralClock(DateTime.utc());
    }, 1000);
    return () => {
      clearInterval(handle);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default withRecoil(MyApp);
