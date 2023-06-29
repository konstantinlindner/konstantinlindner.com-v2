import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import Fonts from '../styles/fonts';
import { ReactNode } from 'react';
import { GoogleAnalytics } from 'nextjs-google-analytics';

const Providers = ({ children }: { readonly children: ReactNode }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  // TODO Getlayout thing
  //   const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Providers>
        <Fonts />
        <Component {...pageProps} />
      </Providers>
    </>
  );
};

export default MyApp;
