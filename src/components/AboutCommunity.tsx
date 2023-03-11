import { Box, Divider, Flex, Text } from "@chakra-ui/react";

const AboutCommunity: React.FC = () => {
  return (
    <Box border="1px" borderColor="border" mb="2" bg="pbg">
      <Flex h="40px" w="100%" bg="red.400" align="center" px="4" py="2">
        <Text fontSize="16px" fontWeight="semibold" color="tt">
          About Community
        </Text>
      </Flex>
      <Box p="4">
        <Text fontSize={"sm"}>Welcome to reddit</Text>
        <Text fontSize={"sm"} color="blackAlpha.600">
          Created Dec 16, 2009
        </Text>
      </Box>
      <Divider />
      <Box p="4">
        <Text fontSize={"lg"}>227k</Text>
        <Text fontSize={"xs"} color="blackAlpha.600">
          Members
        </Text>
      </Box>
    </Box>
  );
};

export default AboutCommunity;
