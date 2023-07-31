import {
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  Stack,
  Button,
  CardFooter,
  ButtonGroup,
  Link,
  Flex,
  Box,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface CardRotationState {
  [key: string]: boolean;
}

interface ProjectItemProps {
  name: string;
  imgUrl: string;
  frontText: string;
  backText: string;
  year?: string;
  role?: string;
  stack: string;
  link1?: string;
  linkLabel1?: string;
  link2?: string;
  linkLabel2?: string;
}

function ProjectItem(props: ProjectItemProps) {
  const {
    name,
    imgUrl,
    frontText,
    backText,
    year,
    role,
    stack,
    link1,
    linkLabel1,
    link2,
    linkLabel2,
  } = props;

  const [isRotated, setIsRotated] = useState<CardRotationState>({
    card: false,
  });

  const handleFlip = (cardName: string) => {
    setIsRotated((prevState) => ({
      ...prevState,
      [cardName]: !prevState[cardName],
    }));
  };

  return (
    <Box>
      <Card
        as={motion.div}
        animate={{
          rotateY: isRotated.card ? 180 : 0,
          transition: { duration: 0.35 },
        }}
        maxWidth="sm"
        height="xl"
      >
        <CardBody
          display={isRotated.card ? 'none' : 'block'}
          as={motion.div}
          animate={{
            opacity: isRotated.card ? 0 : 1,
          }}
        >
          <Image src={imgUrl} alt={name} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
            <Text>{frontText}</Text>
          </Stack>
        </CardBody>

        <CardBody
          display={isRotated.card ? 'block' : 'none'}
          as={motion.div}
          animate={{
            opacity: isRotated.card ? 1 : 0,
          }}
          transform="rotateY(180deg)"
        >
          <Flex height="100%" direction="column" justify="space-between">
            <Box>
              <Heading mb="4" size="md">
                {name}
              </Heading>

              <Text>{backText}</Text>
            </Box>

            <Box>
              {year && (
                <Box>
                  <Heading mb="2" size="sm">
                    Year
                  </Heading>
                  <Text>{year}</Text>
                  <Divider mt="2" />
                </Box>
              )}

              {role && (
                <Box mt="2">
                  <Heading mb="2" size="sm">
                    Role
                  </Heading>
                  <Text>{role}</Text>
                  <Divider mt="2" />
                </Box>
              )}

              {stack && (
                <Box mt="2">
                  <Heading mb="2" size="sm">
                    Stack
                  </Heading>
                  <Text>{stack}</Text>
                </Box>
              )}
            </Box>
          </Flex>
        </CardBody>

        <Divider />

        <CardFooter
          display={isRotated.card ? 'none' : 'block'}
          as={motion.div}
          animate={{
            opacity: isRotated.card ? 0 : 1,
          }}
        >
          <Flex>
            <Button variant="solid" onClick={() => handleFlip('card')}>
              Project Info
            </Button>
            <ButtonGroup ml="auto" my="auto" spacing="5">
              <Link href={link1} isExternal>
                {linkLabel1}
              </Link>
              <Link href={link2} isExternal>
                {linkLabel2}
              </Link>
            </ButtonGroup>
          </Flex>
        </CardFooter>

        <CardFooter
          display={isRotated.card ? 'block' : 'none'}
          as={motion.div}
          animate={{
            opacity: isRotated.card ? 1 : 0,
          }}
          transform="rotateY(180deg)"
        >
          <Flex>
            <Button variant="solid" onClick={() => handleFlip('card')}>
              Back
            </Button>
            <ButtonGroup ml="auto" my="auto" spacing="5">
              <Link href={link1} isExternal>
                {linkLabel1}
              </Link>
              <Link href={link2} isExternal>
                {linkLabel2}
              </Link>
            </ButtonGroup>
          </Flex>
        </CardFooter>
      </Card>
    </Box>
  );
}

export default ProjectItem;
