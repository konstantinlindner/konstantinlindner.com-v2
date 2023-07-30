import {
  Box,
  ButtonGroup,
  Button,
  Flex,
  Spacer,
  IconButton,
  Show,
  Stack,
  useDisclosure,
  Collapse,
  useMediaQuery,
} from '@chakra-ui/react';
import ColorModeSwitcher from './colorModeSwitcher';
import NextLink from 'next/link';
import { Icon } from '@iconify/react';

function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isSmallScreen] = useMediaQuery('(max-width: 600px)');

  return (
    <>
      {/* Desktop navbar */}
      <Box
        display={isSmallScreen ? 'none' : 'block'}
        maxW="600px"
        pt="7"
        pb="10"
        mx="auto"
      >
        <Flex>
          <ButtonGroup ml="-2.5" spacing="1" size="sm" variant="ghost">
            <Button as={NextLink} href={'/'}>
              Home
            </Button>

            <Button as={NextLink} href={'/projects'}>
              Projects
            </Button>

            <Button as={NextLink} href={'/about'}>
              About
            </Button>
          </ButtonGroup>
          <Spacer />
          <ColorModeSwitcher size="sm" fontSize="xl" />
        </Flex>
      </Box>

      {/* Mobile navbar */}
      <Box display={isSmallScreen ? 'block' : 'none'} maxW="550px" pt="2">
        <Flex>
          <IconButton
            onClick={onToggle}
            aria-label="Menu"
            variant="ghost"
            _hover={{ bg: 'null' }}
            _active={{ bg: 'null' }}
            _focus={{ bg: 'null' }}
            size="md"
            fontSize="2xl"
            icon={isOpen ? <Icon icon="mdi:close" /> : <Icon icon="mdi:menu" />}
          ></IconButton>

          <Spacer />
          <ColorModeSwitcher size="md" fontSize="2xl" variant="ghost" />
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

            <Button as={NextLink} href={'/about'} size="md" variant="outline">
              About
            </Button>
          </Stack>
        </Collapse>
      </Box>
    </>
  );
}

export default NavBar;
