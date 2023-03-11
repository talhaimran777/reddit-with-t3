import { Box, Container, Flex, Text } from "@chakra-ui/react";
import HorizontalNav from "components/HorizontalNav";
import Button from "components/Button";
import { useRouter } from "next/router";

const ProfileHeader = () => {
  const { query } = useRouter();
  const commonButtonStyles: any = {
    py: "1.5",
    px: "9",
    cursor: "pointer",
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
export default ProfileHeader;
