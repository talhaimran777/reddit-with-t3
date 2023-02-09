import {
  ArrowDownIcon,
  ArrowUpIcon,
  AtSignIcon,
  ChatIcon,
} from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Post = () => {
  const PostHeader = () => {
    return (
      <Box mb="2">
        <Flex
          align={{ base: "flex-start", md: "center" }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex align="center">
            <AtSignIcon h="3" color="pc" mr="0.5" />
            <Text mr="1" fontSize="12px" fontWeight="bold" color="sh">
              r/reddit
            </Text>
          </Flex>
          <Text fontSize="12px" fontWeight="normal" color="st">
            Posted by u/talhaimran 15.hours ago
          </Text>
        </Flex>
      </Box>
    );
  };

  const PostBody = () => {
    return (
      <Box mb="2">
        <Heading
          as="h3"
          mb="2"
          fontSize="18px"
          size="lg"
          fontWeight="semibold"
          color="ph"
        >
          Test Post Title
        </Heading>
        <Text fontSize="14px" fontWeight="normal" color="pt" align="justify">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Text>
      </Box>
    );
  };

  const PostFooter = () => {
    return (
      <Box>
        {/* {!showComments && ( */}
        <Flex cursor="pointer">
          <Box p="2" display="flex" _hover={{ bg: "sbg" }}>
            <ChatIcon color="st" fontSize="18px" mr="2" />
            <Text fontSize="12px" fontWeight="bold" color="st">
              5 Comments
            </Text>
          </Box>
        </Flex>
        {/* )} */}

        {/* {showComments && ( */}
        {/* <Box h="min-content" my="4"> */}
        {/*   <Comments setShowComments={setShowComments} /> */}
        {/* </Box> */}
        {/* )} */}
      </Box>
    );
  };

  return (
    <Flex
      height="-webkit-fit-content"
      border="1px"
      borderColor="border"
      mb="2.5"
    >
      <Flex p="2" bg="tbg">
        <Flex direction="column">
          <ArrowUpIcon fontSize="20" mb="1" _hover={{ bg: "sbg" }} color="pt" />
          <Text fontSize="16px" fontWeight="bold" color="pt" mb="1">
            14
          </Text>
          <ArrowDownIcon fontSize="20" _hover={{ bg: "sbg" }} color="pt" />
        </Flex>
      </Flex>
      <Box bg="pbg" px="2" pt="3" pb="1.5" width="100%">
        <PostHeader />
        <PostBody />
        <PostFooter />
      </Box>
    </Flex>
  );
};

const Posts = () => {
  return (
    <>
      <Post />
    </>
  );
};
export default Posts;
