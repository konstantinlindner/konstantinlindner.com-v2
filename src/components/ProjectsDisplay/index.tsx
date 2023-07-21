import ProjectItem from './ProjectItem';
import { Heading, SimpleGrid } from '@chakra-ui/react';

interface projectItem {
  name: string;
  imgUrl: string;
  frontText: string;
  backText: string;
  link1?: string;
  linkLabel1?: string;
  link2?: string;
  linkLabel2?: string;
}

function projectsDisplay() {
  const professionalProjects: projectItem[] = [
    {
      name: 'fit52',
      imgUrl:
        'https://res.cloudinary.com/dhiamlbjm/image/upload/v1687394922/fit52_uwhbyh.jpg',
      frontText: `Inspired by Carrie Underwood's passion for an active
        lifestyle, fit52 is a community driven fitness app, offering
        users an immersive and empowering fitness experience. With a
        focus on long-term health and sustainability, fit52 provides
        a comprehensive platform for individuals of all fitness
        levels to achieve their wellness goals.`,
      backText: `fit52 Back Text`,
      link1: 'https://www.fit52.com/',
      linkLabel1: 'Website',
    },
    {
      name: 'Hanx101',
      imgUrl:
        'https://res.cloudinary.com/dhiamlbjm/image/upload/v1687394922/hanx101_sti1dt.jpg',
      frontText: `An engaging trivia game developed by actor Tom Hanks. With
      his love for knowledge and entertainment, Hanx101 brings an
      immersive trivia experience right to your fingertips.
      Featuring intuitive gameplay and stunning visuals, Hanx101
      keeps you hooked with its ever-expanding question database
      and exciting rewards.`,
      backText: `Hanx101 Back Text`,
      link1: 'https://www.hanx101.com/',
      linkLabel1: 'Website',
    },
    {
      name: 'AI Projects',
      imgUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fhd-background.com%2Fwp-content%2Fuploads%2F2019%2F09%2FBest-high-resolution-desktop-backgrounds-1920p.jpg&f=1&nofb=1&ipt=c804ae66246e288948d7c4a66b52c76ee56ffa78dfacf331f6d83a6f0fdde562&ipo=images',
      frontText: `AI related projects`,
      backText: `AI Projects Back Text`,
    },
  ];

  const personalProjects: projectItem[] = [
    {
      name: 'Lifelytics',
      imgUrl:
        'https://res.cloudinary.com/dhiamlbjm/image/upload/v1687395147/lifelytics_jjtugq.webp',
      frontText: `A base for your productivity and well-being. Track and
        visualize your personal finances, health and life stats in
        one tool.`,
      backText: `Lifelytics Back Text`,
      link1: 'https://life.konstantin.app/',
      linkLabel1: 'Website',
      link2: 'https://github.com/konstantinlindner/lifelytics',
      linkLabel2: 'Github',
    },
    {
      name: 'konstantin.bio',
      imgUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fhd-background.com%2Fwp-content%2Fuploads%2F2019%2F09%2FBest-high-resolution-desktop-backgrounds-1920p.jpg&f=1&nofb=1&ipt=c804ae66246e288948d7c4a66b52c76ee56ffa78dfacf331f6d83a6f0fdde562&ipo=images',
      frontText: `A link in bio type personal website.`,
      backText: `Bio Back Text`,
      link1: 'https://konstantin.bio/',
      linkLabel1: 'Website',
      link2: 'https://github.com/konstantinlindner/konstantin.bio',
      linkLabel2: 'Github',
    },
    {
      name: 'Portfolio',
      imgUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fhd-background.com%2Fwp-content%2Fuploads%2F2019%2F09%2FBest-high-resolution-desktop-backgrounds-1920p.jpg&f=1&nofb=1&ipt=c804ae66246e288948d7c4a66b52c76ee56ffa78dfacf331f6d83a6f0fdde562&ipo=images',
      frontText: `The very site you are browsing right now.`,
      backText: `Portfolio Back Text`,
      link1: 'https://github.com/konstantinlindner/konstantinlindner.com',
      linkLabel1: 'Github',
    },
  ];

  return (
    <>
      <Heading>Professional Projects</Heading>

      <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing={5}>
        {professionalProjects.map((projectItem) => (
          <ProjectItem
            key={projectItem.name}
            name={projectItem.name}
            imgUrl={projectItem.imgUrl}
            frontText={projectItem.frontText}
            backText={projectItem.backText}
            link1={projectItem.link1}
            linkLabel1={projectItem.linkLabel1}
            link2={projectItem.link2}
            linkLabel2={projectItem.linkLabel2}
          />
        ))}
      </SimpleGrid>

      <Heading>Personal Projects</Heading>

      <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing={5}>
        {personalProjects.map((projectItem) => (
          <ProjectItem
            key={projectItem.name}
            name={projectItem.name}
            imgUrl={projectItem.imgUrl}
            frontText={projectItem.frontText}
            backText={projectItem.backText}
            link1={projectItem.link1}
            linkLabel1={projectItem.linkLabel1}
            link2={projectItem.link2}
            linkLabel2={projectItem.linkLabel2}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default projectsDisplay;
