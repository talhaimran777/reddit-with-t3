import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "../utils/api";

import Navbar from "../components/Navbar";
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
        <Box bg="sbg" h="100vh">
          <Navbar />
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
