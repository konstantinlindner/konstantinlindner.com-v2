import NavBar from '../components/NavBar';
import ProjectsDisplay from '../components/ProjectsDisplay';
import { VStack, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <Box pb="10" mx="5">
      <NavBar />

      <VStack
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
        spacing="10"
        mt="10"
        direction="column"
      >
        <ProjectsDisplay />
      </VStack>
    </Box>
  );
}

export default Projects;
