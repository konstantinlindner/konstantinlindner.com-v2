import { Text, Link, Box, Divider, useMediaQuery } from '@chakra-ui/react';
import dedent from 'dedent';

interface ExperienceItem {
  link: string;
  where: string;
  what: string;
  date: string;
  content: string;
}

function ExperienceItem({ link, where, what, date, content }: ExperienceItem) {
  const [isSmallScreen] = useMediaQuery('(max-width: 600px)');

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
