import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <MoonIcon />
    </HStack>
  );
};

export default ToggleDarkMode;
