import NavBar from '../components/NavBar';
import {
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  Stack,
  VStack,
  Button,
  Divider,
  CardFooter,
  ButtonGroup,
  SimpleGrid,
  Box,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface CardRotationState {
  [key: string]: boolean;
}

function Projects() {
  const [isRotated, setIsRotated] = useState<CardRotationState>({
    fit52: false,
    hanx101: false,
    lifelytics: false,
  });

  const handleFlip = (cardName: string) => {
    setIsRotated((prevState) => ({
      ...prevState,
      [cardName]: !prevState[cardName],
    }));
  };

  return (
    <>
      <Box pb="5" mx="10">
        <NavBar />

        <VStack spacing="10" mt="10" direction="column">
          <Heading>Professional Projects</Heading>

          <SimpleGrid columns={[1, null, 2]} spacing={4}>
            <Card
              as={motion.div}
              animate={{
                rotateY: isRotated.fit52 ? 180 : 0,
                transition: { duration: 0.35 },
              }}
              maxW="sm"
            >
              <CardBody
                display={isRotated.fit52 ? 'none' : 'block'}
                as={motion.div}
                animate={{
                  opacity: isRotated.fit52 ? 0 : 1,
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dhiamlbjm/image/upload/v1687394922/fit52_uwhbyh.jpg"
                  alt="fit52 card image"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">fit52</Heading>
                  <Text>
                    A fitness app designed by Carrie Underwood, offering users
                    an immersive and empowering fitness experience. With a focus
                    on long-term health and sustainability, fit52 provides a
                    comprehensive platform for individuals of all fitness levels
                    to achieve their wellness goals.
                  </Text>
                </Stack>
              </CardBody>

              <CardBody
                display={isRotated.fit52 ? 'block' : 'none'}
                as={motion.div}
                animate={{
                  opacity: isRotated.fit52 ? 1 : 0,
                }}
                transform="rotateY(180deg)"
              >
                <Stack mt="6" spacing="3">
                  <Heading size="md">fit52</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                  </Text>
                </Stack>
              </CardBody>

              <Divider />

              <CardFooter
                display={isRotated.fit52 ? 'none' : 'block'}
                as={motion.div}
                animate={{
                  opacity: isRotated.fit52 ? 0 : 1,
                }}
              >
                <ButtonGroup spacing="5">
                  <Button variant="solid" onClick={() => handleFlip('fit52')}>
                    Read More
                  </Button>
                  <Button variant="link">
                    {' '}
                    <Link href="https://www.fit52.com/" isExternal>
                      Website
                    </Link>
                  </Button>
                </ButtonGroup>
              </CardFooter>

              <CardFooter
                display={isRotated.fit52 ? 'block' : 'none'}
                as={motion.div}
                animate={{
                  opacity: isRotated.fit52 ? 1 : 0,
                }}
                transform="rotateY(180deg)"
              >
                <ButtonGroup spacing="5">
                  <Button variant="solid" onClick={() => handleFlip('fit52')}>
                    Back
                  </Button>
                  <Button variant="link">
                    {' '}
                    <Link href="https://www.fit52.com/" isExternal>
                      Website
                    </Link>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card
              as={motion.div}
              animate={{
                rotateY: isRotated.hanx101 ? 180 : 0,
                transition: { duration: 0.35 },
              }}
              maxW="sm"
            >
              <CardBody
                display={isRotated.hanx101 ? 'none' : 'block'}
                as={motion.div}
                animate={{
                  opacity: isRotated.hanx101 ? 0 : 1,
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dhiamlbjm/image/upload/v1687394922/hanx101_sti1dt.jpg"
                  alt="Hanx101 card image"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Hanx101</Heading>
                  <Text>
                    An engaging trivia game developed by actor Tom Hanks. With
                    his love for knowledge and entertainment, Hanx101 brings an
                    immersive trivia experience right to your fingertips.
                    Featuring intuitive gameplay and stunning visuals, Hanx101
                    keeps you hooked with its ever-expanding question database
                    and exciting rewards.
                  </Text>
                </Stack>
              </CardBody>

              <CardBody
                display={isRotated.hanx101 ? 'block' : 'none'}
                as={motion.div}
                animate={{
                  opacity: isRotated.hanx101 ? 1 : 0,
                }}
                transform="rotateY(180deg)"
              >
                <Stack mt="6" spacing="3">
                  <Heading size="md">Hanx101</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                  </Text>
                </Stack>
              </CardBody>

              <Divider />

              <CardFooter
                display={isRotated.hanx101 ? 'none' : 'block'}
                as={motion.div}
                animate={{
                  opacity: isRotated.hanx101 ? 0 : 1,
                }}
              >
                <ButtonGroup spacing="5">
                  <Button variant="solid" onClick={() => handleFlip('hanx101')}>
                    Read More
                  </Button>
                  <Button variant="link">
                    {' '}
                    <Link href="https://www.hanx101.com/" isExternal>
                      Website
                    </Link>
                  </Button>
                </ButtonGroup>
              </CardFooter>

              <CardFooter
                display={isRotated.hanx101 ? 'block' : 'none'}
                as={motion.div}
                animate={{
                  opacity: isRotated.hanx101 ? 1 : 0,
                }}
                transform="rotateY(180deg)"
              >
                <ButtonGroup spacing="5">
                  <Button variant="solid" onClick={() => handleFlip('hanx101')}>
                    Back
                  </Button>
                  <Button variant="link">
                    {' '}
                    <Link href="https://www.hanx101.com/" isExternal>
                      Website
                    </Link>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </SimpleGrid>

          <Heading>Personal Projects</Heading>

          <SimpleGrid columns={[1, null, 2]} spacing={4}>
            <Card
              as={motion.div}
              animate={{
                rotateY: isRotated.lifelytics ? 180 : 0,
                transition: { duration: 0.35 },
              }}
              maxW="sm"
            >
              <CardBody
                display={isRotated.lifelytics ? 'none' : 'block'}
                as={motion.div}
                animate={{
                  opacity: isRotated.lifelytics ? 0 : 1,
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dhiamlbjm/image/upload/v1687395147/lifelytics_jjtugq.webp"
                  alt="Lifelytics card image"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Lifelytics</Heading>

                  <Text>
                    A base for your productivity and well-being. Track and
                    visualize your personal finances, health and life stats in
                    one tool.
                  </Text>
                </Stack>
              </CardBody>

              <CardBody
                display={isRotated.lifelytics ? 'block' : 'none'}
                as={motion.div}
                animate={{
                  opacity: isRotated.lifelytics ? 1 : 0,
                }}
                transform="rotateY(180deg)"
              >
                <Stack mt="6" spacing="3">
                  <Heading size="md">Lifelytics</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                  </Text>
                </Stack>
              </CardBody>

              <Divider />

              <CardFooter
                display={isRotated.lifelytics ? 'none' : 'block'}
                as={motion.div}
                animate={{
                  opacity: isRotated.lifelytics ? 0 : 1,
                }}
              >
                <ButtonGroup spacing="5">
                  <Button
                    variant="solid"
                    onClick={() => handleFlip('lifelytics')}
                  >
                    Read More
                  </Button>
                  <Button variant="link">
                    {' '}
                    <Link href="https://life.konstantin.app/" isExternal>
                      Website
                    </Link>
                  </Button>
                </ButtonGroup>
              </CardFooter>

              <CardFooter
                display={isRotated.lifelytics ? 'block' : 'none'}
                as={motion.div}
                animate={{
                  opacity: isRotated.lifelytics ? 1 : 0,
                }}
                transform="rotateY(180deg)"
              >
                <ButtonGroup spacing="5">
                  <Button
                    variant="solid"
                    onClick={() => handleFlip('lifelytics')}
                  >
                    Back
                  </Button>
                  <Button variant="link">
                    {' '}
                    <Link href="https://life.konstantin.app/" isExternal>
                      Website
                    </Link>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </VStack>
      </Box>
    </>
  );
}

export default Projects;
