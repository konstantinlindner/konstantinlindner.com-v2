// import Link from 'next/link';
import { Box, ButtonGroup, Button, Flex, Spacer } from '@chakra-ui/react';
import ColorModeSwitcher from './colorModeSwitcher';
import NextLink from 'next/link';

function NavBar() {
  return (
    <>
      <Flex>
        <ButtonGroup mx="5" my="5" spacing="1" size="sm" variant="ghost">
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
        <Box mt="5" mr="5">
          <ColorModeSwitcher />
        </Box>
      </Flex>
    </>
  );
}

export default NavBar;
