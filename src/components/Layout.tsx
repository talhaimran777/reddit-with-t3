import { Box, Container, Flex } from "@chakra-ui/react";

interface Props {
  Left: React.FC;
  Right: React.FC;
}

const Layout: React.FC<Props> = ({ Left, Right }) => {
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
          mx={{ base: "auto" }}
          mr={{ lg: "6" }}
        >
          <Left />
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          flex={{ base: "1", lg: "0.33" }}
        >
          <Right />
        </Box>
      </Container>
    </Flex>
  );
};

export default Layout;
