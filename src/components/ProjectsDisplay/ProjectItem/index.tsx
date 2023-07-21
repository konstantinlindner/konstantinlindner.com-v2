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
  Link,
  Flex,
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
  link1: string;
  linkLabel1: string;
  link2: string;
  linkLabel2: string;
}

function ProjectItem(props: ProjectItemProps) {
  const {
    name,
    imgUrl,
    frontText,
    backText,
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
    <Card
      as={motion.div}
      animate={{
        rotateY: isRotated.card ? 180 : 0,
        transition: { duration: 0.35 },
      }}
      maxW="sm"
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
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{backText}</Text>
        </Stack>
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
            Read More
          </Button>
          <ButtonGroup ml="auto" spacing="5">
            <Button variant="link">
              <Link href={link1} isExternal>
                {linkLabel1}
              </Link>
            </Button>
            <Button variant="link">
              <Link href={link2} isExternal>
                {linkLabel2}
              </Link>
            </Button>
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
          <ButtonGroup ml="auto" spacing="5">
            <Button variant="link">
              <Link href={link1} isExternal>
                {linkLabel1}
              </Link>
            </Button>
            <Button variant="link">
              <Link href={link2} isExternal>
                {linkLabel2}
              </Link>
            </Button>
          </ButtonGroup>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default ProjectItem;
