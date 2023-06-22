import { ButtonGroup } from '@chakra-ui/react';
import SocialLinkItem from './SocialLinkItem';

interface SocialLink {
  name: string;
  icon: string;
  color?: string;
  link: string;
}

function SocialLinkRow() {
  const socialLinks: SocialLink[] = [
    {
      name: 'Email',
      icon: 'mdi:email',
      color: '#ffd500',
      link: 'mailto:hello@konstantinlindner.com',
    },
    {
      name: 'Instagram',
      icon: 'mdi:instagram',
      color: '#FF0069',
      link: 'https://instagram.com/konstantin.lindner',
    },
    {
      name: 'Spotify',
      icon: 'mdi:spotify',
      color: '#1cd760',
      link: 'https://open.spotify.com/user/el9iz0421ohco9v4ps97j2l8e?si=tbfl8hbFRyaycr4iPfxOsw',
    },
    {
      name: 'LinkedIn',
      icon: 'mdi:linkedin',
      color: '#0077B5',
      link: 'https://linkedin.com/in/konstantinlindner',
    },
    {
      name: 'Github',
      icon: 'mdi:github',
      link: 'https://github.com/konstantinlindner',
    },
  ];

  return (
    <ButtonGroup>
      {socialLinks.map((link) => (
        <SocialLinkItem
          key={link.name}
          link={link.link}
          name={link.name}
          icon={link.icon}
          color={link.color}
        />
      ))}
    </ButtonGroup>
  );
}

export default SocialLinkRow;
