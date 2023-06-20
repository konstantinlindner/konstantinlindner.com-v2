import Link from 'next/link';
import { Box, HStack, Text } from '@chakra-ui/react';

function NavBar() {
  return (
    <>
      <HStack marginX="2vw" py={8}>
        <Box>
          <HStack as="ul" listStyleType="none" spacing="2vw">
            <Link href="/">Home</Link>

            <Link href="/about">About</Link>

            <Link href="/gallery">Gallery</Link>
          </HStack>
        </Box>
      </HStack>
    </>
  );
}

export default NavBar;
