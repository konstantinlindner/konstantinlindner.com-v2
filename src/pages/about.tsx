import NavBar from '../components/NavBar';
import SocialLinkRow from '../components/SocialLinkRow';
import ExperienceItem from '../components/ExperienceItem';
import { Box, Heading, Text, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function About() {
  return (
    <>
      <Box pb="5" mx="5">
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
          maxW="600"
          mx="auto"
        >
          <Box mb="2">
            <Heading size="lg" color={'#eb3a34'}>
              Hi,
            </Heading>
            <Heading as="span" size="lg" color="grey">
              My name is{' '}
            </Heading>
            <Heading as="span" size="lg">
              Konstantin Lindner.
            </Heading>
          </Box>

          <SocialLinkRow />

          <Box
            my="10"
            as={motion.div}
            initial={{
              y: 10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.1 },
            }}
          >
            <Heading size="lg" color={'#eb3a34'} mb="1">
              I am
            </Heading>

            <Text py="1">
              An extremely curious, positive and optimistic person with an eye
              for detail and improvement. I am almost always happy, spirited and
              ready to go on whatever journey awaits next, seldom you will hear
              me saying the word no. Some of my biggest strengths are finding
              areas of improvement, big or small, and seeing the possible
              solutions to a specific problem. Furthermore, data and statistics
              are big interests and passions of mine. I love creating
              Excel-sheets filled to the brim with formulas and charts to
              visualize important data.
            </Text>

            <Text py="1">
              Another equally fundamental part in my life is getting to know and
              working with people, focusing on building great relationships and
              real connections. When evaluating a workplace, how well the
              employees are operating as a team, helping out each other and
              working together to achieve things are some of my main areas of
              consideration and attention.
            </Text>
          </Box>

          <Box
            mb="10"
            as={motion.div}
            initial={{
              y: 10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.1 },
            }}
          >
            <Heading size="lg" color={'#eb3a34'} mb="1">
              Selected Work Experience
            </Heading>

            <ExperienceItem
              link="https://m56studios.com/"
              where="m56 Studios"
              what="QA Engineer"
              date="Apr 2022 - Present"
              content="- Working on the development team for fit52, a fitness app from
                Carrie Underwood.

                - Responsible for reviewing and approving code changes for both
                front-end and back-end portions of the mobile application,
                utilizing manual as well as automated testing.

                - Automated testing includes writing automated tests in tools like
                Detox and Maestro for testing on iOS, Android and web platforms.

                - Other responsibilities include bug and ticket triage, content
                changes, developing the QA process and testing schedules as well
                as documentation.

                - Agile Methodologies · Scrum · Code Review · GitHub and Git ·
                TypeScript and JavaScript · React"
            />

            <ExperienceItem
              link="https://inet.se/"
              where="Inet AB"
              what="Logistics Coordinator"
              date="Aug 2020 - Nov 2021"
              content="- Solely employed full-time as a logistics coordinator at Inet,
              Sweden`s most trusted and loved computer and technology retailer
              (similar to NCIX or Micro Center).

                - Responsible for deliveries from manufacturers and distributors
                to our warehouse, internal shipments, as well as resolving any
                issues with shipping agents. Other tasks include declaring
                shipments of dangerous goods and making compensation claims in
                case of lost or damaged goods.

                - I worked closely with our warehouse, freight partners as well as
                with end customers when deliveries were delayed, shipping
                concerns arose or other logistical obstacles needed to be
                solved.

                - Other responsibilities include bug and ticket triage, content
                changes, developing the QA process and testing schedules as well
                as documentation.

                - Worked closely with the in-house dev team to develop and improve
                our internal programs and tools."
            />

            <ExperienceItem
              link="https://inet.se/"
              where="Inet AB"
              what="Technical Advisor"
              date="Jun 2018 - Aug 2020"
              content="- Solely employed full-time as a logistics coordinator at Inet,
              Sweden`s most trusted and loved computer and technology retailer
              (similar to NCIX or Micro Center).

                - Helping customers with technical advice pre-sale,
                troubleshooting and support after-sale as well as mixed
                administrative work. Did both first- and second-line support.

                - Mainly focused on building custom systems for both private and
                business needs. Computers built after spec, networks and smart
                home were my focus areas.

                - Was awarded the honorable Suverän Service by a mystery shopper
                hired by Better Business Worldwide. See more info below."
            />
          </Box>

          <Box
            mb="10"
            as={motion.div}
            initial={{
              y: 10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.1 },
            }}
          >
            <Heading size="lg" color={'#eb3a34'} mb="1">
              Education
            </Heading>

            <ExperienceItem
              link="https://hermods.se/"
              where="Hermods"
              what="Biology"
              date="2023"
              content="Studied biology."
            />

            <ExperienceItem
              link="https://www.udemy.com/course/the-complete-javascript-course/"
              where="Udemy"
              what="The Complete JavaScript Course"
              date="2022"
              content="Enrolled in the most complete and in-depth JavaScript course on
              Udemy."
            />

            <ExperienceItem
              link="https://donnergymnasiet.se/"
              where="Donnergymnasiet"
              what="Economics & Law"
              date="2015 - 2018"
              content="Enrolled in the Economics and Law program at one of the top
              schools in Gothenburg. I was also engaged in several school
              clubs and organizations. Graduated June 2018."
            />
          </Box>

          <Box
            mb="10"
            as={motion.div}
            initial={{
              y: 10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.1 },
            }}
          >
            <Heading size="lg" color={'#eb3a34'} mb="1">
              Certifications & Awards
            </Heading>

            <ExperienceItem
              link="https://www.betterbusiness.se/"
              where="Better Business World Wide"
              what="Suverän Service"
              date="Dec 2020"
              content="I was awarded the commendation Suverän Service by a mystery
              shopper hired by Better Business. The motivation was: Konstantin
              sounded very kind, trustworthy and listened to me as a customer.
              He really did all he could to help me with my problem. He had a
              nice tone and it felt like talking to a friend. I would gladly
              have bought something just because I got to talk to this employee."
            />

            <ExperienceItem
              link="https://www.ielts.org/"
              where="IELTS Official"
              what="8.5 Overall Band Score"
              date="Jun 2023"
              content="On IELTS English test I received a 8.5 Overall band score out of a maximum of 9. https://www.ielts.org/for-test-takers/how-ielts-is-scored"
            />
          </Box>

          <Box
            mb="10"
            as={motion.div}
            initial={{
              y: 10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.1 },
            }}
          >
            <Heading size="lg" color={'#eb3a34'} mb="1">
              Language Skills
            </Heading>

            <Box py="1">
              <Text>
                <b>Swedish</b> - mother tounge
              </Text>
              <Text>
                <b>German</b> - mother tounge
              </Text>
              <Text>
                <b>English</b> - fluent (IELTS 8.5 out of 9)
              </Text>
              <Text>
                <b>French</b> - basic
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default About;
