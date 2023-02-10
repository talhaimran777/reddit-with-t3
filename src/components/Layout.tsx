import { Box, Container, Flex } from "@chakra-ui/react";
import PostInitiator from "./PostInitiator";
import Posts from "./Posts";
import TopCommunities from "./TopCommunities";

const Layout = () => {
  return (
    <Flex flex="1" pt="5">
      <Container
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        maxW="1000px"
      >
        <Box
          flex={{ base: "1", lg: "0.67" }}
          width={{ base: "100%", md: "660px" }}
          mr={{ lg: "6" }}
        >
          <PostInitiator />
          <Posts />
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          flex={{ base: "1", lg: "0.33" }}
        >
          <TopCommunities />
        </Box>
      </Container>
    </Flex>
  );
};

export default Layout;
