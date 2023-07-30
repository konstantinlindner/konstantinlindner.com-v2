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
        width="180px"
        href={link}
        isExternal
        style={{ display: 'inline-block' }}
      >
        {where}
      </Link>

      <Box as="span">
        <Text as="i">{what}</Text>
      </Box>

      <Text fontSize="sm">{date}</Text>

      <Text style={{ whiteSpace: 'pre-line' }} mt="5">
        {dedent(content)}
      </Text>
    </Box>
  );
}

export default ExperienceItem;