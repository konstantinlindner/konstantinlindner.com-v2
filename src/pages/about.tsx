import NavBar from '../components/NavBar';
import SocialLinkRow from '../components/SocialLinkRow';
import ExperienceItem from '../components/ExperienceItem';
import LanguageItem from '../components/LanguageItem';
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import dedent from 'dedent';

function About() {
  const [isSmallScreen] = useMediaQuery('(max-width: 600px)');

  const iAmText = `A curious and optimistic full-stack developer, passionate about technology and data. Collaborating on exciting projects, building real connections, and embracing challenges drive me.

  Currently, I'm fortunate to be part of the development team for fit52, a cutting-edge fitness app created by none other than the amazing Carrie Underwood. It's an exciting project that fuels my desire to push boundaries and deliver the best possible results. In the past, I've been involved in creating the thrilling trivia game, Hanx101, in collaboration with the talented Tom Hanks. Additionally, I've had the privilege of contributing to various AI and machine learning projects, which are yet to be unveiled to the world.

  While technology captivates me, I also cherish the human element. Building genuine connections with people and fostering strong relationships are equally essential in both my personal and professional life. When evaluating any workplace or project, I pay keen attention to how well the team collaborates, supports one another, and achieves collective goals. True greatness often emerges from the unity of dedicated individuals working together.`;

  return (
    <Box pb="10" mx="5">
      <NavBar />

      <Box
        as={motion.div}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { duration: 0.8, delay: 0.1 },
        }}
      >
        <VStack align="left" spacing="10" maxW="600" mx="auto">
          <Box mb={isSmallScreen ? '0' : '-10'}>
            <Image
              float={isSmallScreen ? 'none' : 'right'}
              mx={isSmallScreen ? 'auto' : 'none'}
              ml={isSmallScreen ? 'none' : '3'}
              mb="3"
              borderRadius="full"
              boxSize="150px"
              src="https://res.cloudinary.com/dhiamlbjm/image/upload/v1690684064/about_tfpwej.webp"
              alt="Konstantin Lindner"
            />
            <Box mb="2">
              <Heading size="lg" color={'#eb3a34'}>
                Hi,
              </Heading>
              <Heading as="span" size="lg" color="grey">
                My name is{' '}
              </Heading>
              <Heading style={{ whiteSpace: 'nowrap' }} as="span" size="lg">
                Konstantin Lindner.
              </Heading>
            </Box>

            <Box>
              <SocialLinkRow size={isSmallScreen ? 'md' : 'sm'} fontSize="xl" />
            </Box>
          </Box>

          <Box
            as={motion.div}
            initial={{
              y: 10,
            }}
            animate={{
              y: 0,
              transition: { duration: 0.8, delay: 0.1 },
            }}
          >
            <Box>
              <Heading size="lg" color={'#eb3a34'} mb="5">
                I am
              </Heading>

              <Text style={{ whiteSpace: 'pre-line' }}>{dedent(iAmText)}</Text>
            </Box>
            <Box>
              <Heading size="lg" color={'#eb3a34'} mb="7">
                Selected Work Experience
              </Heading>

              <VStack spacing="7">
                <ExperienceItem
                  link="https://m56studios.com/"
                  where="m56 Studios"
                  what="QA Engineer"
                  date="Apr 2022 - Present"
                  content="At m56 Studios, I am an integral part of multiple projects, contributing to various exciting ventures. Firstly, I play a crucial role in the development team for fit52, a fitness app by Carrie Underwood. As a QA Engineer, I ensure the app's code quality by reviewing and approving code changes for both the front-end and back-end portions of the mobile application. My testing approach involves a combination of manual and automated testing techniques, where I create automated tests using tools like Detox and Maestro to cover testing on iOS and Android.
                \n\n
                In addition to fit52, I am also involved in working on the content management tool for Hanx101 Trivia, an exclusive trivia game on Apple Arcade, by Tom Hanks. My contributions to this project involve ensuring smooth functionality and effective content management for the best gaming experience.
                \n\n
                Furthermore, I am actively engaged in developing AI tools for other projects built on GPT-4 and other language models, as well as vector databases such as Pinecone. These cutting-edge technologies are at the forefront of innovation, and I am excited to be a part of their development.
                \n\n
                Beyond testing and development, I also take charge of bug and ticket triage, quickly addressing issues and implementing necessary content changes. My dedication extends to refining the QA process and establishing efficient testing schedules while maintaining essential process documentation.
                \n\n
                Being part of m56 Studios has provided me with invaluable experiences in a dynamic and forward-thinking environment. Collaborating on projects like fit52 and Hanx101 Trivia, and exploring AI advancements, has expanded my skill set and passion for creating high-quality software products. I take pride in contributing to projects that entertain and add value to users' lives, and I am eager to continue making meaningful contributions to the tech industry."
                />

                <ExperienceItem
                  link="https://inet.se/"
                  where="Inet AB"
                  what="Logistics Coordinator"
                  date="Aug 2020 - Nov 2021"
                  content="During my tenure at Inet AB, I served as a dedicated and full-time Logistics Coordinator at Sweden's most trusted and beloved computer and technology retailer.
                \n\n
                As Logistics Coordinator, I played a vital role in overseeing deliveries from manufacturers and distributors to our warehouse. I efficiently managed internal shipments and resolved any issues that arose with shipping agents. My responsibilities also extended to handling shipments of dangerous goods, ensuring compliance with regulations, and efficiently processing compensation claims in the event of lost or damaged goods.
                \n\n
                In this dynamic role, I collaborated closely with our warehouse team and freight partners to ensure seamless logistics operations. Additionally, I actively engaged with end customers, providing exceptional customer service when deliveries faced delays or shipping concerns arose. My problem-solving skills and attention to detail proved invaluable in navigating logistical obstacles and delivering a positive experience to our customers.
                \n\n
                An exciting aspect of my role was collaborating closely with the in-house development team to enhance our internal programs and tools. This collaboration allowed us to optimize and streamline logistics processes, improving overall efficiency and effectiveness.
                \n\n
                Working at Inet AB provided me with a valuable experience in a fast-paced and customer-centric environment. My role as a Logistics Coordinator allowed me to contribute significantly to the company's success, ensuring smooth and reliable logistics operations while delivering outstanding service to our customers. The opportunity to work with a dedicated team and contribute to the development of internal systems enriched my skill set and fueled my passion for technology and logistics."
                />

                <ExperienceItem
                  link="https://inet.se/"
                  where="Inet AB"
                  what="Technical Advisor"
                  date="Jun 2018 - Aug 2020"
                  content="As a Technical Advisor, I provided expert technical assistance to customers, offering pre-sale advice, troubleshooting support, and after-sale help. Tasks included picking components for custom computer systems for individuals and businesses, from gaming setups to advanced machines for 3D rendering, video editing, machine learning and audio production. I also specialized in networks, putting together corporate systems with Ubiquiti components as well as smart home setups.
                \n\n
                My dedication to providing excellent customer service was recognized when I was awarded the honorable Suverän Service commendation. This recognition came from a mystery shopper hired by Better Business Worldwide, and it highlighted my commitment to ensuring a positive and memorable customer experience.
                \n\n
                Working at Inet AB provided me with a rewarding experience, allowing me to combine my passion for technology with a focus on customer satisfaction. The opportunity to assist customers in overcoming technical challenges and finding suitable solutions enriched my understanding of diverse technology-related needs and preferences.
                \n\n
                My role as a Technical Advisor at Inet AB significantly contributed to my professional growth. The collaborative work environment and emphasis on customer-centricity instilled in me a strong sense of accomplishment. The skills and insights gained during this tenure continue to shape my approach to customer service and technical problem-solving, making this role a significant and memorable chapter in my career journey."
                />
              </VStack>
            </Box>
            <Box>
              <Heading size="lg" color={'#eb3a34'} mb="7">
                Education
              </Heading>

              <VStack spacing="10">
                <ExperienceItem
                  link="https://hermods.se/"
                  where="Hermods"
                  what="Biology"
                  date="2023"
                  content="During my time at Hermods, one of Sweden's oldest educational institutions, I had the opportunity to delve into the fascinating world of biology. The program provided a comprehensive and hands-on approach to understanding the complexities of life and the natural world. From the cellular level to ecological systems, the coursework covered a wide range of topics, equipping me with a solid foundation in biological principles."
                />

                <ExperienceItem
                  link="https://www.udemy.com/course/the-complete-javascript-course/"
                  where="Udemy"
                  what="The Complete JavaScript Course"
                  date="2022"
                  content='In 2022, as part of my training at m56 Studios, I completed "The Complete JavaScript Course" on Udemy. Taught by a knowledgeable instructor, the course covered JavaScript fundamentals to advanced concepts like React and Node.js. Hands-on projects and a supportive team environment at m56 Studios accelerated my growth as a developer. This course was a pivotal step in my professional journey, empowering me with valuable skills for web development and sparking a passion for continuous learning in the tech industry.'
                />

                <ExperienceItem
                  link="https://donnergymnasiet.se/"
                  where="Donnergymnasiet"
                  what="Economics & Law"
                  date="2015 - 2018"
                  content="Enrolled in the prestigious Economics and Law program at Donnergymnasiet, a top school in Gothenburg, from 2015 to 2018. Actively participated in various school clubs and organizations. Graduated in June 2018, this program provided an excellent educational foundation in the fields of economics and law, preparing me for future academic pursuits and professional endeavors."
                />
              </VStack>
            </Box>
            <Box>
              <Heading size="lg" color={'#eb3a34'} mb="7">
                Certifications & Awards
              </Heading>

              <VStack spacing="10">
                <ExperienceItem
                  link="https://www.betterbusiness.se/"
                  where="Better Business"
                  what="Suverän Service"
                  date="Dec 2020"
                  content='I received the rare and prestigious "Suverän Service" commendation from Better Business World Wide, as a mystery shopper recognized my exceptional customer service skills.
                \n\n
                The motivation behind the commendation read: "Konstantin displayed remarkable kindness, trustworthiness, and attentiveness to my needs as a customer. His dedication in resolving my issue went above and beyond, making our interaction feel like a conversation with a friend. I was so impressed that I would have happily made a purchase solely based on the positive experience of speaking with this outstanding employee."'
                />

                <ExperienceItem
                  link="https://www.ielts.org/"
                  where="IELTS Official"
                  what="8.5 Overall Band Score"
                  date="Jun 2023"
                  content="In June 2023, I took the IELTS English and achieved an overall band score of 8.5 out of 9. This accomplishment reflects my strong English language proficiency in Listening, Reading, Writing, and Speaking. I am proud of this achievement as it opens up opportunities for academic and professional growth in diverse international settings."
                />
              </VStack>
            </Box>
            <Box>
              <Heading size="lg" color={'#eb3a34'} mb="7">
                Language Skills
              </Heading>

              <VStack align="left" spacing="2">
                <LanguageItem
                  language="English"
                  level="Fluent (IELTS 8.5 out of 9)"
                />
                <LanguageItem language="Swedish" level="Mother Tounge" />
                <LanguageItem language="German" level="Mother Tounge" />
                <LanguageItem language="Spanish" level="Basic" />
                <LanguageItem language="French" level="Basic" />
                <LanguageItem language="Japanese" level="Learning" />
              </VStack>
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default About;
