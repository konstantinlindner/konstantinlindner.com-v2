import NavBar from '../components/NavBar';
import ProjectsDisplay from '../components/ProjectsDisplay';
import { Box } from '@chakra-ui/react';

function Projects() {
  return (
    <Box pb="10" mx="5">
      <NavBar />

      <ProjectsDisplay />
    </Box>
  );
}

export default Projects;
