import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";

const Layout = ({
  children,
  title,
}: {
  readonly children: ReactNode;
  readonly title: string;
}) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </Box>
  );
};

export default Layout;
