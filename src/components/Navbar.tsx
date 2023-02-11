import { Avatar, Flex, Image } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import NavigationMenu from "components/NavigationMenu";
import Button from "components/Button";

const Navbar = () => {
  const { data } = useSession();
  const isAuthenticated = data?.user;

  const commonButtonStyles: any = {
    py: "1.5",
    px: "9",
    cursor: "pointer",
  };

  const loginButtonStyles: any = {
    mr: "3",
  };

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
        {isAuthenticated && <NavigationMenu />}
      </Flex>

      {!isAuthenticated && (
        <Flex align="center" display={{ base: "none", md: "flex" }}>
          {/* <Button onClick = {() => signIn()}>Login</Button> */}

          <Button
            text="Login"
            secondary={true}
            customStyling={{ ...commonButtonStyles, ...loginButtonStyles }}
            handlers={{ onClick: () => signIn() }}
          />
          {/* <Button */}
          {/*   text="Sign Up" */}
          {/*   primary={true} */}
          {/*   customStyling={{ ...commonButtonStyles }} */}
          {/*   handlers={authModalhandlers("signup")} */}
          {/* /> */}
        </Flex>
      )}
      {isAuthenticated && (
        <Flex align="center" display={{ base: "none", md: "flex" }}>
          {/* <Button onClick={() => signOut()}>Logout</Button> */}
          <Button
            text="Logout"
            primary={true}
            customStyling={{ ...commonButtonStyles, ...loginButtonStyles }}
            handlers={{ onClick: () => signOut() }}
          />
          <Avatar
            size="sm"
            name={"Talha Imran"}
            // src={auth.user?.profile_image}
          />
        </Flex>
      )}
    </Flex>
  );
};
export default Navbar;
