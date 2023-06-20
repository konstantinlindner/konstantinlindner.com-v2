// import Link from 'next/link';
import { Box, ButtonGroup, Button } from '@chakra-ui/react';
import ColorModeSwitcher from './colorModeSwitcher';
import NextLink from 'next/link';

function NavBar() {
  return (
    <>
      <Box display="flex" justifyContent="flex-end" pr="5" pt="5">
        <ColorModeSwitcher />
      </Box>

      <ButtonGroup spacing="1" size="sm" variant="ghost">
        <NextLink href={'/'} passHref>
          <Button>Home</Button>
        </NextLink>

        <NextLink href={'/projects'} passHref>
          <Button>Projects</Button>
        </NextLink>

        <NextLink href={'/gallery'} passHref>
          <Button>Gallery</Button>
        </NextLink>

        <NextLink href={'/about'} passHref>
          <Button>About</Button>
        </NextLink>
      </ButtonGroup>
    </>
  );
}

export default NavBar;
