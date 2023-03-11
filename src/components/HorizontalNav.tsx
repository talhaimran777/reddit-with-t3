import { Box, Text } from "@chakra-ui/react";

const HorizontalNav = () => {
  return (
    <Box
      w="min-content"
      fontWeight={"bold"}
      width={{ base: "100%", md: "660px", lg: "100%" }}
      mx={{ base: "6px", md: "auto" }}
    >
      <Text
        border="none"
        borderBottom="2px"
        borderBottomColor="red.400"
        borderWidth="medium"
        width={"fit-content"}
      >
        Posts
      </Text>
    </Box>
  );
};
export default HorizontalNav;
