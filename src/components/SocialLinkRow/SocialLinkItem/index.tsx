import { Icon } from '@iconify/react';
import { Link, IconButton } from '@chakra-ui/react';

interface LinkListItemProps {
  link: string;
  name: string;
  icon: string;
  color?: string;
  size: string;
  fontSize: string;
}

function LinkListItem(props: LinkListItemProps) {
  const { link, name, icon, color, size, fontSize } = props;

  return (
    <Link rounded="full" isExternal href={link}>
      <IconButton
        aria-label={name}
        rounded="full"
        size={size}
        fontSize={fontSize}
        _hover={{ color }}
        icon={<Icon icon={icon} />}
      />
    </Link>
  );
}

export default LinkListItem;
