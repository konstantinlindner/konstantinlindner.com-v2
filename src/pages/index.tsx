import NavBar from '../components/NavBar';
import SocialLinkRow from '@/components/SocialLinkRow';
import {
  Link,
  Heading,
  Image,
  Text,
  Box,
  Flex,
  HStack,
  VStack,
  Hide,
  Show,
  IconButton,
  Center,
} from '@chakra-ui/react';

function Home() {
  return (
    <>
      <Box pb="10" mx="10">
        <NavBar />

        <Box maxW="550" mx="auto">
          <Hide below="sm">
            <Image
              float="right"
              ml="3"
              mb="3"
              borderRadius="full"
              boxSize="150px"
              src="https://res.cloudinary.com/dhiamlbjm/image/upload/v1682728237/pb_france_original_webp.webp"
              fallbackSrc="/assets/profile.webp"
              alt="Konstantin Lindner"
            />
          </Hide>

          <Show below="sm">
            <Image
              mx="auto"
              mb="3"
              borderRadius="full"
              boxSize="150px"
              src="https://res.cloudinary.com/dhiamlbjm/image/upload/v1682728237/pb_france_original_webp.webp"
              fallbackSrc="/assets/profile.webp"
              alt="Konstantin Lindner"
            />
          </Show>

          <Hide below="sm">
            <Heading whiteSpace="nowrap">Konstantin Lindner</Heading>
            <Text whiteSpace="nowrap">
              Junior QA Engineer @{' '}
              <Link fontWeight="bold" href="https://m56studios.com/" isExternal>
                m56 Studios
              </Link>
            </Text>
          </Hide>

          <Show below="sm">
            <Center>
              <Heading whiteSpace="nowrap">Konstantin Lindner</Heading>{' '}
            </Center>
            <Text align="center" whiteSpace="nowrap">
              Junior QA Engineer @{' '}
              <Link fontWeight="bold" href="https://m56studios.com/" isExternal>
                m56 Studios
              </Link>
            </Text>
          </Show>

          <Text mt="5" align="left" py="1" maxW="700">
            An aspiring full-stack developer. My stack of choice is React using
            Typescript, NextJS and Express with Prisma. I also have experience
            with frameworks such as Vue and Svelte. When it comes to CSS
            frameworks, I have worked with Chakra UI, Tailwind and MUI.
            Experience with Firebase and Supabase.
          </Text>
          <Text align="left" py="1" maxW="700">
            As a person I am curious and optimistic, with an eye for detail and
            improvement. I&apos;m driven by always becoming better at what I do
            and set high standards for both myself and others.
          </Text>
          <Text align="left" py="1" maxW="700">
            Currently working on the development team for{' '}
            <Link fontWeight="bold" href="https://www.fit52.com/" isExternal>
              fit52
            </Link>
            , a fitness app from Carrie Underwood. Previous projects include
            working on{' '}
            <Link fontWeight="bold" href="https://www.hanx101.com/" isExternal>
              Hanx101
            </Link>
            , a trivia game by Tom Hanks as well as multiple projects related to
            AI and machine learning, still unreleased.
          </Text>
          <Box pt="5">
            <SocialLinkRow />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
