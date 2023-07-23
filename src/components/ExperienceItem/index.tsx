import { Text, Link, Box } from '@chakra-ui/react';

interface ExperienceItem {
  link: string;
  where: string;
  what: string;
  date: string;
  content: string;
}

function ExperienceItem({ link, where, what, date, content }: ExperienceItem) {
  return (
    <>
      <Link fontWeight="bold" href={link} isExternal>
        {where}
      </Link>

      <Box as="span" ml="20">
        <Text as="i">{what}</Text>
      </Box>

      <Text fontSize="sm">{date}</Text>

      <Text my="1">{content}</Text>
    </>
  );
}

export default ExperienceItem;
