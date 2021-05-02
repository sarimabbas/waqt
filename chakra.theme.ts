import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export default extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: "Lora",
  },
  colors: {
    brand: "#BDEF09",
    olive: {
      50: "#faf9f0",
      100: "#f7f09e",
      200: "#ede258",
      300: "#cfc130",
      400: "#9b9a17",
      500: "#767e0a",
      600: "#5d6606",
      700: "#484d06",
      800: "#313406",
      900: "#221f06",
    },
    green: {
      50: "#f6f7f2",
      100: "#ebf0d6",
      200: "#cfe4a7",
      300: "#9cc771",
      400: "#54a542",
      500: "#3b8924",
      600: "#307218",
      700: "#295716",
      800: "#1d3b12",
      900: "#14240f",
    },
    seagreen: {
      50: "#eff5f4",
      100: "#d0f0f2",
      200: "#9be6e1",
      300: "#60ccbd",
      400: "#26ae93",
      500: "#1a936c",
      600: "#187c53",
      700: "#175f42",
      800: "#114132",
      900: "#0c2826",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("green.50", "gray.700")(props),
        textColor: mode("olive.700", "green.100")(props),
      },
    }),
  },
});
