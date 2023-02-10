import { Box, ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "../utils/api";

import Navbar from "components/Navbar";
import "../styles/globals.css";
import theme from "../theme";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const customTheme = extendTheme(theme);

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={customTheme}>
        <Flex flexDirection="column" bg="sbg" minH="100vh">
          <Navbar />
          <Component {...pageProps} />
        </Flex>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
