import { Icon } from '@iconify/react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';

function ColorModeSwitcher({
  size = 'sm',
  fontSize = 'xl',
  variant = 'solid',
}) {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="Toggle color mode"
      rounded="full"
      variant={variant}
      size={size}
      fontSize={fontSize}
      _hover={{ bg: 'null' }}
      _active={{ bg: 'null' }}
      _focus={{ bg: 'null' }}
      icon={useColorModeValue(
        <Icon icon="mdi:weather-night" />,
        <Icon icon="mdi:weather-sunny" />,
      )}
    />
  );
}

export default ColorModeSwitcher;
