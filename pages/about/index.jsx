/* eslint-disable react/jsx-key */
import { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
} from 'react-icons/fa';

import {BiLogoMongodb, BiLogoNodejs, BiLogoTailwindCss, BiLogoTypescript} from 'react-icons/bi'

import {
  SiNextdotjs,
  SiMui,
  SiExpress,
  SiMongoose,
  SiSolidity,
  SiFirebase
} from 'react-icons/si';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Front End',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <BiLogoTypescript />,
          <FaReact />,
          <SiNextdotjs />,
          <SiSolidity />,
        ],
      },
      {
        title: 'Backed End',
        icons: [<BiLogoNodejs/>, <BiLogoMongodb/>, <SiExpress />, <SiMongoose />, <SiFirebase/>],
      },
      {
        title: 'CMS',
        icons: [<FaWordpress />,],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'IBM V2 Mastery - Honoree',
        stage: '2018 - 2019',
      },
      {
        title: 'NPower Training Best Trainer - Honoree',
        stage: '2019',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Engineer - Codepence',
        stage: '2023 - present',
      },
      {
        title: 'DGM IT - Future Renewables',
        stage: '2022 - 2023',
      },
      {
        title: 'Web developer - CitizenHelpline',
        stage: '2020 - 2022',
      },
      {
        title: 'Tutor - Pure Access IT',
        stage: '2019 - 2020',
      },
      {
        title: 'Tutor/Engineer - McAnderson Associates',
        stage: '2018 - 2019',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'IBM Certified Data Engineer - IBM Skills Academy',
        stage: '2019',
      },
      {
        title: 'Cyber Diplomacy - UN office of disarmament affairs',
        stage: '2020',
      },
      {
        title: 'Start up - Aalto University',
        stage: '2020',
      },
      {
        title: 'Web design for Everybody - University of Michigan',
        stage: '2020',
      },
      {
        title: 'Google IT Support - Google',
        stage: '2020',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      {/* <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 top-20 -left-[370px]"
      >
        <Avatar />
      </motion.div> */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h3
            className="h3"
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            My <span className="text-accent">story.</span>
          </motion.h3>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 z-10"
          >
            I&apos;ve thrived in crafting applications that resonate with users, ensuring a symphony of user experience and interface design that fosters not just usage, but a relationship between the application and its user.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Completed Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
