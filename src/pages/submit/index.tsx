import { type NextPage } from "next";
import Head from "next/head";

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import TopCommunities from "components/TopCommunities";

const CreatePost: NextPage = () => {
  const PostCreator = (
    <Box>
      <Text fontSize="lg" fontWeight="semibold" mb="3">
        Create a post
      </Text>
      <Divider opacity="1" borderBottomWidth="1.5px" borderColor="white" />
      <Box height="-webkit-fit-content" bg="white" my="6" p="4">
        <form>
          <FormControl
            mb={5}
            isRequired
            // isInvalid={isNameError}
          >
            <FormLabel htmlFor="name" fontWeight="medium">
              Name
            </FormLabel>
            <Input
              id="name"
              name="name"
              // onChange={onChange}
              // value={formik.values.name}
            />
            {/* <FormErrorMessage fontSize="xs"> */}
            {/*   {formik.errors.name} */}
            {/* </FormErrorMessage> */}
          </FormControl>

          <FormControl
            mb={5}
            isRequired
            // isInvalid={isBodyError}
          >
            <FormLabel htmlFor="body" fontWeight="medium">
              Body
            </FormLabel>
            <Textarea
              id="body"
              name="body"
              // onChange={onChange}
              // value={formik.values.body}
            />
            {/* <FormErrorMessage fontSize="xs"> */}
            {/*   {formik.errors.body} */}
            {/* </FormErrorMessage> */}
          </FormControl>

          <FormControl
            mb={5}
            isRequired
            // isInvalid={isCommunityError}
          >
            <FormLabel htmlFor="community" fontWeight="medium">
              Community
            </FormLabel>
            <Select
              placeholder="Select Community"
              // onChange={onChange}
              id="community"
              name="community"
            >
              {/* {communities.map((community) => ( */}
              {/*   <option value={`${community.id}`}>{community.name}</option> */}
              {/* ))} */}
            </Select>
            {/* <FormErrorMessage fontSize="xs"> */}
            {/*   {formik.errors.community} */}
            {/* </FormErrorMessage> */}
          </FormControl>
          <Button>Create Post</Button>
        </form>
      </Box>
    </Box>
  );

  return (
    <>
      <Head>
        <title>Create Post</title>
        <meta name="description" content="Showing all the blog posts!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex bg="sbg" flex="1" justify="center" pt="5">
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
            {PostCreator}
          </Box>
          <Box
            display={{ base: "none", lg: "block" }}
            flex={{ base: "1", lg: "0.33" }}
          >
            <TopCommunities />
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default CreatePost;
