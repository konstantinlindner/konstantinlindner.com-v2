import NavBar from '../components/NavBar';
import {
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  Stack,
  Button,
  Divider,
  CardFooter,
  ButtonGroup,
  Flex,
} from '@chakra-ui/react';

function Projects() {
  return (
    <>
      <NavBar />

      <Flex>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_1200,h_675/https://blog.fit52.com/wp-content/uploads/2020/05/fit52-BlogCover-1200x675-2.jpg"
              alt="fit52 banner image"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">fit52</Heading>
              <Text>
                fit52 is a fitness app designed by Carrie Underwood, offering
                users an immersive and empowering fitness experience. With a
                focus on long-term health and sustainability, fit52 provides a
                comprehensive platform for individuals of all fitness levels to
                achieve their wellness goals.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Read More
            </Button>
          </CardFooter>
        </Card>

        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://www.pockettactics.com/wp-content/sites/pockettactics/2022/09/hanx101-trivia-apple-arcade.jpg"
              alt="Hanx101 banner image"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Hanx101</Heading>
              <Text>
                Hanx101 is an engaging trivia game developed by actor Tom Hanks.
                With his love for knowledge and entertainment, Hanx101 brings an
                immersive trivia experience right to your fingertips. Featuring
                intuitive gameplay and stunning visuals, Hanx101 keeps you
                hooked with its ever-expanding question database and exciting
                rewards.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Read More
            </Button>
          </CardFooter>
        </Card>
      </Flex>
    </>
  );
}

export default Projects;
