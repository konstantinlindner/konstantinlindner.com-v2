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
      name: 'hanx101',
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
      imgUrl: 'https://media.giphy.com/media/TFUhfEuvjIY2PBUPK5/giphy.gif',
      frontText: `A link in bio type personal website.`,
      backText: `Bio Back Text`,
      link1: 'https://konstantin.bio/',
      linkLabel1: 'Website',
      link2: 'https://github.com/konstantinlindner/konstantin.bio',
      linkLabel2: 'Github',
    },
  ];

  return (
    <>
      <Heading>Professional Projects</Heading>

      <SimpleGrid columns={[1, null, 2]} spacing={4}>
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

      <SimpleGrid columns={[1, null, 2]} spacing={4}>
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
