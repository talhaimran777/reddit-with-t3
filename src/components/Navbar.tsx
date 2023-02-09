import { Avatar, Flex, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      bg="pbg"
      height="49px"
      padding="6px 20px"
      justifyContent={{ base: "space-between" }}
      borderBottom="1px"
      borderColor="border"
    >
      <Flex
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
        cursor="pointer"
      >
        <Image src="/redditFace.svg" height="33px" />
        <Image
          display={{ base: "none", md: "unset" }}
          src="/redditText.svg"
          height="46px"
        />
        {/* {auth.isAuthenticated && ( */}
        {/*   <NavigationMenu/> */}
        {/* )} */}
      </Flex>

      {/* {!auth.isAuthenticated && ( */}
      {/*   <Flex align="center" display={{ base: "none", md: "flex" }}> */}
      {/*     <Button */}
      {/*       text="Login" */}
      {/*       secondary={true} */}
      {/*       customStyling={{ ...commonButtonStyles, ...loginButtonStyles }} */}
      {/*       handlers={authModalhandlers("login")} */}
      {/*     /> */}
      {/*     <Button */}
      {/*       text="Sign Up" */}
      {/*       primary={true} */}
      {/*       customStyling={{ ...commonButtonStyles }} */}
      {/*       handlers={authModalhandlers("signup")} */}
      {/*     /> */}
      {/*     <AuthModal /> */}
      {/*   </Flex> */}
      {/* )} */}
      {/* {auth.isAuthenticated && ( */}
      {/*   <Flex align="center" display={{ base: "none", md: "flex" }}> */}
      {/*     <Button */}
      {/*       text="Logout" */}
      {/*       primary={true} */}
      {/*       customStyling={{ ...commonButtonStyles, ...loginButtonStyles }} */}
      {/*       handlers={logoutHandler()} */}
      {/*     /> */}
      <Avatar
        size="sm"
        name={"Talha Imran"}
        // src={auth.user?.profile_image}
      />
      {/*   </Flex> */}
      {/* )} */}
    </Flex>
  );
};
export default Navbar;
