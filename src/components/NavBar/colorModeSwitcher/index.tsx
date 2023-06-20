import { Icon } from '@iconify/react';
import { IconButton, useColorMode } from '@chakra-ui/react';

function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="Toggle color mode"
      rounded="full"
      size="sm"
      fontSize="xl"
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
