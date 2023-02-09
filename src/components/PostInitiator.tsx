import { Avatar, AvatarBadge, Flex, Input } from "@chakra-ui/react";

const PostInitiator = () => {
  return (
    <Flex
      border="1px"
      borderColor="border"
      mb="4"
      bg="pbg"
      p="3"
      align="center"
    >
      <Avatar mr="3" size="sm" src="https://bit.ly/broken-link">
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>

      <Input
        // onClick={navigateToPostCreation}
        placeholder="Create Post"
        _focus={{
          outline: "none",
        }}
      />
    </Flex>
  );
};
export default PostInitiator;
