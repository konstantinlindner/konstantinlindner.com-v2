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
  Stack,
  useDisclosure,
  Collapse,
} from '@chakra-ui/react';
import ColorModeSwitcher from './colorModeSwitcher';
import NextLink from 'next/link';
import { Icon } from '@iconify/react';

function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

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
            <ColorModeSwitcher size="sm" fontSize="xl" />
          </Flex>
        </Box>
      </Hide>

      <Show below="sm">
        <Box maxW="550px" pt="7" pb="0">
          <Flex>
            <IconButton
              onClick={onToggle}
              aria-label="Menu"
              variant="none"
              size="md"
              fontSize="2xl"
              icon={
                isOpen ? <Icon icon="mdi:close" /> : <Icon icon="mdi:menu" />
              }
            ></IconButton>
            <Spacer />
            <ColorModeSwitcher size="md" fontSize="2xl" variant="none" />
          </Flex>

          <Collapse in={isOpen} animateOpacity>
            <Stack pt="5" pb="5" direction="column">
              <Button as={NextLink} href={'/'} size="md" variant="outline">
                Home
              </Button>

              <Button
                as={NextLink}
                href={'/projects'}
                size="md"
                variant="outline"
              >
                Projects
              </Button>

              <Button
                as={NextLink}
                href={'/gallery'}
                size="md"
                variant="outline"
              >
                Gallery
              </Button>

              <Button as={NextLink} href={'/about'} size="md" variant="outline">
                About
              </Button>
            </Stack>
          </Collapse>
        </Box>
      </Show>
    </>
  );
}

export default NavBar;
