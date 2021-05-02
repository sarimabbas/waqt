import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>
      <a
        href="https://www.producthunt.com/posts/waqt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-waqt"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=141990&theme=dark"
          alt="Waqt - Simple timezone tracker | Product Hunt"
          style={{ width: "250px", height: "54px" }}
          width="250"
          height="54"
        />
      </a>
      <Box h={4} />
    </Box>
  );
};

export default Footer;
