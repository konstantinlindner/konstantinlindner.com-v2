import { Text, Link, Box, Flex, useMediaQuery } from '@chakra-ui/react';
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
    <Box w="100%">
      <Box display="flex" position="relative" justifyContent="center">
        <Link mr="auto" fontWeight="bold" href={link} isExternal>
          {where}
        </Link>

        <Box
          position={isSmallScreen ? undefined : 'absolute'}
          mx={isSmallScreen ? 'auto' : 'none'}
        >
          <Text as="i">{what}</Text>
        </Box>
      </Box>

      <Text fontSize="sm">{date}</Text>

      <Text style={{ whiteSpace: 'pre-line' }} mt="5">
        {dedent(content)}
      </Text>
    </Box>
  );
}

export default ExperienceItem;
