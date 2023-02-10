import { Text, Box, Skeleton, Flex, Avatar, Button } from "@chakra-ui/react";

const TopCommunities = () => {
  return (
    <Box border="1px" borderColor="border" mb="2" bg="pbg">
      <Skeleton isLoaded={true}>
        <Flex
          h="80px"
          w="100%"
          bg="pc"
          justify="flex-start"
          align="flex-end"
          px="4"
          py="2"
        >
          <Text fontSize="16px" fontWeight="semibold" color="tt">
            Communities
          </Text>
        </Flex>
      </Skeleton>
      <Flex
        align="center"
        justify="space-between"
        borderBottom="1px"
        borderColor="border"
        px="3"
        py="2"
      >
        <Flex align="center" justify="flex-start" flex="1">
          <Box mr="5">
            <Text fontSize="14px" fontWeight="bold" color="pt">
              1
            </Text>
          </Box>
          <Flex align="center">
            <Avatar mr="2" size="sm" src="https://bit.ly/broken-link" />
            <Text fontSize="14px" fontWeight="normal" color="pt">
              reddit
            </Text>
          </Flex>
        </Flex>

        <Button size="xs">Join</Button>
      </Flex>
      <Box py="3" px="3">
        <Button w="100%" colorScheme="blue" variant="solid" size="xs">
          View All
        </Button>
      </Box>
    </Box>
  );
};
export default TopCommunities;
