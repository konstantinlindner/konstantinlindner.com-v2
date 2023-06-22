import { Icon } from '@iconify/react';
import { IconButton, useColorMode } from '@chakra-ui/react';

function ColorModeSwitcher({
  size = 'sm',
  fontSize = 'xl',
  variant = 'solid',
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="Toggle color mode"
      rounded="full"
      variant={variant}
      size={size}
      fontSize={fontSize}
      _hover={{ bg: 'null' }}
      icon={
        isDark ? (
          <Icon icon="mdi:weather-sunny" />
        ) : (
          <Icon icon="mdi:weather-night" />
        )
      }
    />
  );
}

export default ColorModeSwitcher;
