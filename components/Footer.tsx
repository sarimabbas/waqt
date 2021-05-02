import { Box, Text, Link, HStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>
      <HStack align="baseline">
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
        {/* github */}
        <iframe
          src="https://ghbtns.com/github-btn.html?user=sarimabbas&repo=waqt-next&type=star&count=true&size=large"
          frameBorder="0"
          scrolling="0"
          height="30"
          title="GitHub"
        ></iframe>
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
