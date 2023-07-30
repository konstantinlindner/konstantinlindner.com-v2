import { Text, Box } from '@chakra-ui/react';

interface ExperienceItem {
  language: string;
  level: string;
}

function ExperienceItem({ language, level }: ExperienceItem) {
  return (
    <Box>
      <Text style={{ display: 'inline-block' }} fontWeight="bold" width="100px">
        {language}
      </Text>

      <Text as="span">{level}</Text>
    </Box>
  );
}

export default ExperienceItem;
