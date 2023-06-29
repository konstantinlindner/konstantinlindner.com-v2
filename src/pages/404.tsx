import NavBar from '../components/NavBar';
import SocialLinkRow from '../components/SocialLinkRow';
import {
  Link,
  Heading,
  Image,
  Text,
  Box,
  Hide,
  Show,
  Center,
  Button,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { Icon } from '@iconify/react';

function Home() {
  return (
    <>
      <Box pb="5" mx="5">
        <NavBar />

        <VStack maxW="550" mx="auto" mt="2">
          <Icon style={{ fontSize: '100px' }} icon="mdi:dinosaur-pixel" />

          <Heading mt="2" whiteSpace="nowrap">
            Not found - 404
          </Heading>
          <Text whiteSpace="nowrap">Sorry, this page does not exist. </Text>
          <Button mt="4" as={NextLink} href={'/'}>
            Go back home
          </Button>
        </VStack>
      </Box>
    </>
  );
}

export default Home;
