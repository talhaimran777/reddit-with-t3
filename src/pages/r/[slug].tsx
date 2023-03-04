import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "components/Button";
import Posts from "components/Posts";
import TopCommunities from "components/TopCommunities";
import AboutCommunity from "components/AboutCommunity";

const CommunityProfile: NextPage = () => {
  const { query } = useRouter();

  const ProfileCover = () => {
    return (
      <Box h="90px" bg="red.400">
        &nbsp;
      </Box>
    );
  };

  const commonButtonStyles: any = {
    py: "1.5",
    px: "9",
    cursor: "pointer",
  };

  const ProfileHeader = () => {
    const HorizontalNav = () => {
      return (
        <Text
          border="none"
          borderBottom="2px"
          borderBottomColor="red.400"
          borderWidth="medium"
          w="min-content"
          fontWeight={"bold"}
          mx="6px"
        >
          Posts
        </Text>
      );
    };

    return (
      <Box h="100px" bg="white">
        <Container
          maxW="970px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          h="100%"
          p="0"
        >
          <Flex alignItems="center" gap="4" mt="-4">
            <Box
              h="80px"
              w="80px"
              rounded="full"
              bg="black"
              borderColor="white"
              borderWidth={"thick"}
            />
            <Text fontSize="2xl" fontWeight="bold">
              r/{query.slug}
            </Text>
            <Button
              text="Join"
              primary={true}
              customStyling={{ ...commonButtonStyles }}
            />
          </Flex>
          <HorizontalNav />
        </Container>
      </Box>
    );
  };

  return (
    <>
      <Head>
        <title>Community Profile</title>
        <meta name="description" content="Showing all the blog posts!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileCover />
      <ProfileHeader />

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
            <Posts />
          </Box>
          <Box
            display={{ base: "none", lg: "block" }}
            flex={{ base: "1", lg: "0.33" }}
          >
            <AboutCommunity />
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default CommunityProfile;
