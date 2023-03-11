import {
  ArrowDownIcon,
  ArrowUpIcon,
  AtSignIcon,
  ChatIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";

interface Comment {
  id?: Number;
  commentBy: String;
  body: String;
  replies: Comment[] | [];
}

interface CommentProps {
  id?: Number;
  replies: Comment[] | [];
  commentBy: String;
  body: String;
}

interface CommentsSystemProps {
  setShowComments: any;
}

const Post: React.FC = () => {
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
            Posted by u/talhaimran 3 months ago
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
          Learn Docker
        </Heading>
        <Text fontSize="14px" fontWeight="normal" color="pt" align="justify">
          Today, I will be showing how you can dockering rails app.
        </Text>
      </Box>
    );
  };

  const comments = [
    {
      id: 1,
      commentBy: "r/hamza",
      body: `Pretty print actually works with multiple arguments too, where as
      the above expects the second argument to be options to inspect which is
      probably not intentional.`,
      replies: [
        {
          id: 3,
          commentBy: "r/talha",
          body: `I'm really satisfied with new neovim version.`,
          replies: [],
        },
      ],
    },
    {
      id: 2,
      commentBy: "r/talha",
      body: `Testing out new neovim version.`,
      replies: [],
    },
  ];

  const Comment: React.FC<CommentProps> = ({
    id,
    replies,
    commentBy,
    body,
  }) => {
    const [replying, setReplying] = useState(false);
    const replyInputRef: any = useRef(null);

    const replyHandler = async () => {
      // Todo: Write Reply Handler Logic
      const data = {
        comment: {
          body: "Nice one!",
          post_id: 1,
          user_id: 1,
        },
      };
    };

    return (
      <Box px="2" w="full">
        <Flex mt="5">
          <Flex
            direction={"column"}
            justify={"center"}
            align="center"
            mr="2"
            position={"relative"}
          >
            <Avatar mb="2" mt="-1" size="xs" src="https://bit.ly/broken-link" />
            <Box w="1" flex="1" bg="gray.200" mt="1">
              &nbsp;
            </Box>
            <Box
              h="1"
              w="4"
              flex="1"
              bg="gray.200"
              position={"absolute"}
              top="8"
              left="3"
            >
              &nbsp;
            </Box>
          </Flex>
          <Box w="full">
            <Flex mb="2" align="center">
              <Text fontSize="12px" fontWeight="bold" color="st" mr={"2"}>
                u/{commentBy}
              </Text>

              <Text
                fontSize="10px"
                fontWeight="normal"
                color="st"
                cursor="pointer"
              >
                17.hours ago
              </Text>
            </Flex>

            <Text
              fontSize="14px"
              fontWeight="normal"
              color="st"
              mt="-1"
              ml="1"
              align={"justify"}
            >
              {body}
            </Text>

            <Box
              mt="2"
              ml="-2"
              p="2"
              cursor="pointer"
              _hover={{ bg: "sbg" }}
              w="min-content"
              onClick={() => setReplying(true)}
            >
              <Flex>
                <ChatIcon color="st" fontSize="18px" mr="2" />
                <Text fontSize="12px" fontWeight="bold" color="st">
                  Reply
                </Text>
              </Flex>
            </Box>

            {replying && (
              <Flex justify="center" align="center" mt="4">
                <Input name="reply" mr="3" ref={replyInputRef} />
                <Button mr="3" size="sm" onClick={replyHandler}>
                  Reply
                </Button>
                <Button mr="3" size="sm" onClick={() => setReplying(false)}>
                  Close
                </Button>
              </Flex>
            )}

            {replies.map((reply) => (
              <Box ml="-4">
                <Comment
                  id={reply.id}
                  replies={reply.replies}
                  commentBy={reply.commentBy}
                  body={reply.body}
                />
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
    );
  };

  const Comments: React.FC<CommentsSystemProps> = ({ setShowComments }) => {
    return (
      <Flex align="center" justify="center" direction="column" w="full">
        {comments.map((comment) => (
          <Comment
            id={comment.id}
            replies={comment.replies}
            commentBy={comment.commentBy}
            body={comment.body}
          />
        ))}
        <CloseIcon
          mt="10"
          cursor="pointer"
          fontSize="20"
          color="pt"
          onClick={() => setShowComments(false)}
        />
      </Flex>
    );
  };

  const PostFooter = () => {
    const [showComments, setShowComments] = useState(false);

    return (
      <Box>
        {!showComments && (
          <Flex cursor="pointer" onClick={() => setShowComments(!showComments)}>
            <Box p="2" display="flex" _hover={{ bg: "sbg" }}>
              <ChatIcon color="st" fontSize="18px" mr="2" />
              <Text fontSize="12px" fontWeight="bold" color="st">
                5 Comments
              </Text>
            </Box>
          </Flex>
        )}

        {showComments && (
          <Box h="min-content" my="4">
            <Comments setShowComments={setShowComments} />
          </Box>
        )}
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

const Posts: React.FC = () => {
  return (
    <>
      <Post />
    </>
  );
};
export default Posts;
