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
  Flex,
  Box,
  Link,
} from '@chakra-ui/react';

function Projects() {
  return (
    <>
      <Box pb="5" mx="10">
        <NavBar />

        <VStack
          spacing="10"
          mt="10"
          direction="column"
          mx="auto"
          align="center"
        >
          <Heading>Professional Projects</Heading>

          <SimpleGrid columns={2} spacing={4}>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://res.cloudinary.com/dhiamlbjm/image/upload/v1687394922/fit52_uwhbyh.jpg"
                  alt="fit52 card image"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">fit52</Heading>
                  <Text>
                    fit52 is a fitness app designed by Carrie Underwood,
                    offering users an immersive and empowering fitness
                    experience. With a focus on long-term health and
                    sustainability, fit52 provides a comprehensive platform for
                    individuals of all fitness levels to achieve their wellness
                    goals.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="5">
                  <Button variant="solid">Read More</Button>
                  <Button variant="link">
                    {' '}
                    <Link
                      fontWeight="bold"
                      href="https://www.fit52.com/"
                      isExternal
                    >
                      Website
                    </Link>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://res.cloudinary.com/dhiamlbjm/image/upload/v1687394922/hanx101_sti1dt.jpg"
                  alt="Hanx101 card image"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Hanx101</Heading>
                  <Text>
                    Hanx101 is an engaging trivia game developed by actor Tom
                    Hanks. With his love for knowledge and entertainment,
                    Hanx101 brings an immersive trivia experience right to your
                    fingertips. Featuring intuitive gameplay and stunning
                    visuals, Hanx101 keeps you hooked with its ever-expanding
                    question database and exciting rewards.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="5">
                  <Button variant="solid">Read More</Button>
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

          <SimpleGrid columns={2} spacing={4}>
            <Card maxW="sm">
              <CardBody>
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
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="5">
                  <Button variant="solid">Read More</Button>
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
