import NavBar from '../components/NavBar';
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
          maxW="550"
          mx="auto"
        >
          <Heading>I am</Heading>

          <Text>
            An extremely curious, positive and optimistic person with an eye for
            detail and improvement. I am almost always happy, spirited and ready
            to go on whatever journey awaits next, seldom you will hear me
            saying the word no. Some of my biggest strengths are finding areas
            of improvement, big or small, and seeing the possible solutions to a
            specific problem. Furthermore, data and statistics are big interests
            and passions of mine. I love creating Excel-sheets filled to the
            brim with formulas and charts to visualize important data.
          </Text>

          <Text>
            Another equally fundamental part in my life is getting to know and
            working with people, focusing on building great relationships and
            real connections. When evaluating a workplace, how well the
            employees are operating as a team, helping out each other and
            working together to achieve things are some of my main areas of
            consideration and attention.
          </Text>

          <Heading>Selected Work Experience</Heading>

          <Text>
            <Link href="https://m56studios.com/" target="'_blank">
              m56 Studios
            </Link>
          </Text>

          <Text>Junior QA Engineer</Text>
          <Text>Apr 2022 - current</Text>
          <ul>
            <li>
              Working on the development team for fit52, a fitness app from
              Carrie Underwood.
            </li>
            <li>
              Responsible for reviewing and approving code changes for both
              front-end and back-end portions of the mobile application,
              utilizing manual as well as automated testing.
            </li>
            <li>
              Automated testing includes writing automated tests in tools like
              Detox and Maestro for testing on iOS, Android and web platforms.
            </li>
            <li>
              Other responsibilities include bug and ticket triage, content
              changes, developing the QA process and testing schedules as well
              as documentation.
            </li>
            <li>
              Agile Methodologies · Scrum · Code Review · GitHub and Git ·
              TypeScript and JavaScript · React
            </li>
          </ul>

          <Text>
            <Link href="https://inet.se/" target="'_blank">
              Inet AB
            </Link>
          </Text>
          <Text>Logistics Coordinator</Text>
          <Text>Aug 2020 - Nov 2021</Text>
          <ul>
            <li>
              Solely employed full-time as a logistics coordinator at Inet,
              Sweden`s most trusted and loved computer and technology retailer
              (similar to NCIX or Micro Center).
            </li>
            <li>
              Responsible for deliveries from manufacturers and distributors to
              our warehouse, internal shipments, as well as resolving any issues
              with shipping agents. Other tasks include declaring shipments of
              dangerous goods and making compensation claims in case of lost or
              damaged goods.
            </li>
            <li>
              I worked closely with our warehouse, freight partners as well as
              with end customers when deliveries were delayed, shipping concerns
              arose or other logistical obstacles needed to be solved.
            </li>
            <li>
              Worked closely with the in-house dev team to develop and improve
              our internal programs and tools.
            </li>
          </ul>

          <Text>
            <Link href="https://inet.se/" target="'_blank">
              Inet AB
            </Link>
          </Text>

          <Text>Technical Advisor</Text>
          <Text>Jun 2018 - Aug 2020</Text>
          <ul>
            <li>
              Helping customers with technical advice pre-sale, troubleshooting
              and support after-sale as well as mixed administrative work. Did
              both first- and second-line support.
            </li>
            <li>
              Mainly focused on building custom systems for both private and
              business needs. Computers built after spec, networks and smart
              home were my focus areas.
            </li>
            <li>
              Was awarded the honorable Suverän Service by a mystery shopper
              hired by Better Business Worldwide. See more info below.
            </li>
          </ul>

          <Heading>
            <span>Education</span>
            <br />
          </Heading>

          <Text>
            <a href="https://hermods.se/" target="'_blank">
              Hermods
            </a>
          </Text>
          <Text>Natural Sciences</Text>
          <Text>2023 - 2024</Text>
          <ul>
            <li>Studying biology, chemistry, physics as well as math.</li>
          </ul>

          <Text>
            <a
              href="https://www.udemy.com/course/the-complete-javascript-course/"
              target="'_blank"
            >
              Udemy
            </a>
          </Text>
          <Text>The Complete JavaScript Course</Text>
          <Text>2022 - 2023</Text>
          <ul>
            <li>
              Enrolled in the most complete and in-depth JavaScript course on
              Udemy.
            </li>
          </ul>

          <Text>
            <a href="https://donnergymnasiet.se/" target="'_blank">
              Donnergymnasiet
            </a>
          </Text>
          <Text>Economics & Law</Text>
          <Text>2015 - 2018</Text>
          <ul>
            <li>
              Enrolled in the Economics and Law program at one of the top
              schools in Gothenburg. I was also engaged in several school clubs
              and organizations. Graduated June 2018.
            </li>
          </ul>

          <Heading>
            <span>Awards</span>
            <br />
          </Heading>

          <Text>
            <a href="https://www.betterbusiness.se/" target="'_blank">
              Better Business World Wide
            </a>
          </Text>
          <Text>Suverän Service</Text>
          <Text>Dec 2020</Text>
          <Text>
            I was awarded the commendation Suverän Service by a mystery shopper
            hired by Better Business. The motivation was: Konstantin sounded
            very kind, trustworthy and listened to me as a customer. He really
            did all he could to help me with my problem. He had a nice tone and
            it felt like talking to a friend. I would gladly have bought
            something just because I got to talk to this employee.
          </Text>

          <Heading>
            <span>Language Skills</span>
            <br />
          </Heading>

          <Text>
            <b>Swedish</b> - mother tounge
          </Text>
          <Text>
            <b>German</b> - mother tounge
          </Text>
          <Text>
            <b>English</b> - fluent
          </Text>
          <Text>
            <b>French</b> - basic
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default About;
