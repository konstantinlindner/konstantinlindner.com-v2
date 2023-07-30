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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import dedent from 'dedent';

function Home() {
  const introText = `A full-stack developer with a passion for crafting exceptional digital experiences. My journey in the vast world of web development has led me to explore a diverse range of technologies and frameworks, shaping me into the developer I am today.

  I'm deeply enamored with React and Typescript, and they form the backbone of my projects. NextJS and Express are my go-to tools for building powerful, scalable applications, while Prisma ensures smooth database interactions. But my interests don't end there—I've also dabbled with Vue and Svelte, always hungry to expand my horizons and embrace new challenges. When it comes to styling, I've worked with CSS frameworks like Chakra UI, Tailwind, and MUI, making sure that every pixel on the screen is pixel-perfect. Backend technologies I have used include Firebase, Supabase and Laravel.

  I approach life with curiosity, optimism, and an unyielding thirst for improvement. A perpetual optimist, you'll seldom hear me say no to any challenge that comes my way. I believe in setting high standards for myself and those around me, constantly striving to become better at my craft. My keen eye for detail helps me identify areas of improvement, no matter how small, and I enjoy brainstorming creative solutions to solve problems effectively.`;

  return (
    <Box pb="10" mx="5">
      <NavBar />

      <Box
        as={motion.div}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { duration: 0.8, delay: 0.1 },
        }}
        maxW="600"
        mx="auto"
      >
        <Hide below="sm">
          <Image
            float="right"
            ml="3"
            mb="3"
            borderRadius="full"
            boxSize="150px"
            src="https://res.cloudinary.com/dhiamlbjm/image/upload/v1682728237/pb_france_original_webp.webp"
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
            alt="Konstantin Lindner"
          />
        </Show>

        <Hide below="sm">
          <Heading whiteSpace="nowrap">Konstantin Lindner</Heading>
          <Text whiteSpace="nowrap">
            QA Engineer @{' '}
            <Link fontWeight="bold" href="https://m56studios.com/" isExternal>
              m56 Studios
            </Link>
          </Text>
        </Hide>

        <Show below="sm">
          <Center>
            <Heading whiteSpace="nowrap">Konstantin Lindner</Heading>
          </Center>
          <Text align="center" whiteSpace="nowrap">
            QA Engineer @{' '}
            <Link fontWeight="bold" href="https://m56studios.com/" isExternal>
              m56 Studios
            </Link>
          </Text>
        </Show>

        <Box
          mt="5"
          as={motion.div}
          initial={{
            y: 10,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, delay: 0.1 },
          }}
        >
          <Text style={{ whiteSpace: 'pre-line' }}>{dedent(introText)}</Text>

          <Box pt="5">
            <Hide below="sm">
              <SocialLinkRow size="sm" fontSize="xl" />
            </Hide>

            <Show below="sm">
              <Center>
                <SocialLinkRow size="md" fontSize="2xl" />
              </Center>
            </Show>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
