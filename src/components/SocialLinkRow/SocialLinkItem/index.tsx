import { Icon } from '@iconify/react';
import { Link, IconButton } from '@chakra-ui/react';

interface LinkListItemProps {
  link: string;
  name: string;
  icon: string;
  color?: string;
}

function LinkListItem(props: LinkListItemProps) {
  const { link, name, icon, color } = props;

  return (
    <Link rounded="full" isExternal href={link}>
      <IconButton
        aria-label={name}
        rounded="full"
        size="sm"
        fontSize="xl"
        _hover={{ color }}
        icon={<Icon icon={icon} />}
      />
    </Link>
  );
}

export default LinkListItem;
