import { Box, Text, Link, HStack } from "@chakra-ui/react";
import ToggleDarkMode from "./ToggleDarkMode";
import GitHubButton from "react-github-btn";
import { useSetRecoilState } from "recoil";
import { showTutorialAtom } from "../store";

const Footer = () => {
  const setShowTutorial = useSetRecoilState(showTutorialAtom);

  return (
    <Box w="full">
      <HStack justify="space-between" w="full">
        <HStack spacing={5} align="center">
          <Link onClick={() => setShowTutorial(true)}>How to use</Link>
          <ToggleDarkMode />
        </HStack>
        <HStack align="baseline">
          {/* github */}
          <GitHubButton
            href="https://github.com/sarimabbas/waqt-next"
            data-color-scheme="no-preference: light; light: light; dark: dark;"
            data-size="large"
            data-show-count="true"
            aria-label="Star sarimabbas/waqt-next on GitHub"
          >
            Star
          </GitHubButton>
          {/* product hunt */}
          <a
            href="https://www.producthunt.com/posts/waqt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-waqt"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=141990&theme=dark"
              alt="Waqt - Simple timezone tracker | Product Hunt"
              style={{ height: "30px" }}
              height="30"
            />
          </a>
        </HStack>
      </HStack>

      <Box h={4} />
      <Text>
        Built by Sarim Abbas. Contact at{" "}
        <Link href="mailto:hello@sarim.work">hello@sarim.work</Link>
      </Text>
      <Box h={4} />
    </Box>
  );
};

export default Footer;
