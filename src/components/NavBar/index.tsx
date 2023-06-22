// import Link from 'next/link';
import {
  Box,
  ButtonGroup,
  Button,
  Flex,
  Spacer,
  Hide,
  IconButton,
  Show,
} from '@chakra-ui/react';
import ColorModeSwitcher from './colorModeSwitcher';
import NextLink from 'next/link';
import { Icon } from '@iconify/react';

function NavBar() {
  return (
    <>
      <Hide below="sm">
        <Box maxW="550px" pt="7" pb="10" mx="auto">
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
      </Hide>

      <Show below="sm">
        <Box maxW="550px" pt="7" pb="10" mx="auto">
          <Flex>
            <IconButton
              aria-label="Menu"
              size="sm"
              fontSize="xl"
              icon={<Icon icon="mdi:menu" />}
            ></IconButton>
            <Spacer />
            <ColorModeSwitcher />
          </Flex>
        </Box>
      </Show>
    </>
  );
}

export default NavBar;
