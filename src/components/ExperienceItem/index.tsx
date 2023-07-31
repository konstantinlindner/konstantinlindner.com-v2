import { Text, Link, Box, Divider } from '@chakra-ui/react';
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
    <Box>
      <Text fontSize="lg">
        <Link fontWeight="bold" href={link} isExternal>
          {where}
        </Link>
      </Text>

      <Text fontSize="md" as="i">
        {what}
      </Text>

      <Text fontSize="sm">{date}</Text>

      <Text style={{ whiteSpace: 'pre-line' }} my="7">
        {dedent(content)}
      </Text>

      <Divider />
    </Box>
  );
}

export default ExperienceItem;
