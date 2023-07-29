import { Text, Link, Box, VStack } from '@chakra-ui/react';
import dedent from 'dedent';

interface ExperienceItem {
  link: string;
  where: string;
  what: string;
  date: string;
  content: string;
}

function ExperienceItem({ link, where, what, date, content }: ExperienceItem) {
  return (
    <Box w="100%">
      <Link
        fontWeight="bold"
        href={link}
        isExternal
        style={{ display: 'inline-block', width: '180px' }}
      >
        {where}
      </Link>

      <Box as="span">
        <Text as="i">{what}</Text>
      </Box>

      <Text fontSize="sm">{date}</Text>

      <VStack spacing="2">
        <Text style={{ whiteSpace: 'pre-line' }} my="2">
          {dedent(content)}
        </Text>
      </VStack>
    </Box>
  );
}

export default ExperienceItem;
