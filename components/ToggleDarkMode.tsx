import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { useEffect, useCallback } from "react";

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const setClockColor = useCallback(() => {
    if (colorMode === "dark") {
      document.documentElement.style.setProperty("--clock-color", "#ffffff");
    } else {
      document.documentElement.style.setProperty("--clock-color", "#4a5568");
    }
  }, [colorMode]);

  useEffect(() => {
    setClockColor();
  }, [setClockColor]);

  const toggle = useCallback(() => {
    setClockColor();
    toggleColorMode();
  }, [colorMode]);

  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggle} />
      <MoonIcon />
    </HStack>
  );
};

export default ToggleDarkMode;
