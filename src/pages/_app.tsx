import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Fonts from "../styles/fonts";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo";
import { ReactNode } from "react";

const Providers = ({ children }: { readonly children: ReactNode }) => (
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </ApolloProvider>
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  // TODO Getlayout thing
  //   const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Providers>
      <Fonts />
      <Component {...pageProps} />
    </Providers>
  );
};

export default MyApp;
