// import Link from 'next/link';
import { Box, ButtonGroup, Button, Flex, Spacer } from '@chakra-ui/react';
import ColorModeSwitcher from './colorModeSwitcher';
import NextLink from 'next/link';

function NavBar() {
  return (
    <>
      <Box maxW="550px" py="5" mx="auto">
        <Flex>
          <ButtonGroup ml="-2.5" spacing="1" size="sm" variant="ghost">
            <Button as={NextLink} href={'/'}>
              Home
            </Button>

            <Button as={NextLink} href={'/projects'}>
              Projects
            </Button>

            <Button as={NextLink} href={'/gallery'}>
              Gallery
            </Button>

            <Button as={NextLink} href={'/about'}>
              About
            </Button>
          </ButtonGroup>
          <Spacer />
          <ColorModeSwitcher />
        </Flex>
      </Box>
    </>
  );
}

export default NavBar;
