import { Heading, Text, Flex, List, ListItem, useColorMode } from '@chakra-ui/core';

import { Layout } from '@components/index';
import TextLink from '@components/TextLink';
import { ReactNode, useContext } from 'react';
import { ColorModeContext } from '@contexts/CustomColorContext';
import { NextSeo } from 'next-seo';

const url = 'https://syhnserkan.com/about';
const title = 'About Me – Serkan Sayhan';

const CustomText = ({ children }: { children: ReactNode }) => {
  const colorModeObj = useContext(ColorModeContext);
  const { colorMode } = useColorMode();

  return (
    <Text
      fontSize="1.05rem"
      mb="1.5rem"
      fontWeight="400"
      color={
        colorMode === 'light' ? colorModeObj.aboutTextColor.light : colorModeObj.aboutTextColor.dark
      }
    >
      {children}
    </Text>
  );
};
const About = () => {
  const colorModeObj = useContext(ColorModeContext);
  const { colorMode } = useColorMode();

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      <Layout>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          maxW="80%"
          mx="auto"
          p="0 2rem"
        >
          <Heading
            textAlign="center"
            fontSize={['2rem', '2rem', '3rem', '3rem']}
            color={
              colorMode === 'light' ? colorModeObj.titleColor.light : colorModeObj.titleColor.dark
            }
            margin="5rem auto"
          >
            About me
          </Heading>
          <CustomText>
            Hi! I'm Serkan. I was born in 1999. I live in İstanbul and study as a Computer
            Engineering student. I like to build
            <TextLink text=" open-source projects " url="https://github.com/syhnserkan" /> for fun
            an experience.
          </CustomText>
          <CustomText>
            When I start university, I didn't know anything about programming. I wrote C/C++ for
            algorithm in the first year. After the first year, I started to write C# for desktop
            applications. But I realized, desktop applications are not written very much. When I
            passing to the third grade, I taught myself how to make websites first as a hobby and
            later as a professional programmer. Firstly, I started frontend technologies like HTML,
            CSS and Javascript. After that I took a brief look at Jquery but I didn't like it.
            {/* I taught myself how to make websites first as a hobby and later as a professional
            programmer. I've been documenting everything I learn since I began. */}
          </CustomText>
          <CustomText>
            What did I learn for backend ? I learned Asp.NET MVC, entity framework, and MSSQL.
          </CustomText>
          <CustomText>
            Nowadays, I have mostly worked React.js, Next.js, Typescript, and Css frameworks (Sass,
            Chackra UI, Styled-Component).
          </CustomText>
          <CustomText>
            I like building new stuff and make open source projects, all of which can be found on
            github.
          </CustomText>

          <Heading
            fontSize="1.6rem"
            color={
              colorMode === 'light' ? colorModeObj.titleColor.light : colorModeObj.titleColor.dark
            }
            mb="1rem"
          >
            Get in touch
          </Heading>
          <CustomText>
            I hope you love the site, and if there's anything you want to talk about with me feel
            free to drop me a line by email. I'm happy to hear your comments, feedback, suggestions,
            or just say hi!{' '}
            <em>(Emails regarding ads, sponsored posts, link-sharing, etc. will be ignored.)</em>
          </CustomText>
          <List
            styleType="disc"
            fontSize="1.05rem"
            mb="3rem"
            p={['0 0', '0 0', '0 1rem', '0 1rem']}
            color={
              colorMode === 'light'
                ? colorModeObj.aboutTextColor.light
                : colorModeObj.aboutTextColor.dark
            }
          >
            <ListItem>
              📫 &nbsp; <strong>Github:</strong> {''}
              <TextLink text="@sayhanserkan" url="https://github.com/syhnserkan" />
            </ListItem>
            <ListItem>
              📨 &nbsp; <strong>Email:</strong> {''}
              <TextLink text="@sayhanserkan" url="mailto:syhnserkan@gmail.com" />
            </ListItem>
            <ListItem>
              🌈 &nbsp; <strong>Instagram:</strong> {''}
              <TextLink text="@sayhanserkan" url="https://www.instagram.com/sayhanserkan" />
            </ListItem>
          </List>
          <Heading
            fontSize="1.6rem"
            color={
              colorMode === 'light' ? colorModeObj.titleColor.light : colorModeObj.titleColor.dark
            }
            mb="1.5rem"
            pb="1rem"
            borderBottom="1px solid #d6d9de"
            w="100%"
          >
            Timeline
          </Heading>
          <List
            styleType="disc"
            fontSize="1.05rem"
            mb="3rem"
            color={
              colorMode === 'light'
                ? colorModeObj.aboutTextColor.light
                : colorModeObj.aboutTextColor.dark
            }
          >
            <ListItem>
              <strong>1999:</strong> I was born in Istanbul, the last child of my family.
            </ListItem>
            <ListItem>
              <strong>2006 – 2013:</strong> I went to primary school. I loved the math. The family
              gets our first computer, a PC running Windows. I use the computer a lot, mostly silly
              stuff since I had no idea what was going on.
            </ListItem>
            <ListItem>
              <strong>2013 - 2017:</strong> I started my anatolian high school. When I start the
              high school, I was self-conscious. That's why I used to play computer games a lot.
              Computer games, started to learn lots of things about computers. After the university
              exams, I had to choose department that I could love and I chose Computer Engineering.
            </ListItem>
            <ListItem>
              <strong>2017 - 2020:</strong> I started to study Computer Engineering at Istanbul Arel
              University. I've taken core computer science lessons such as Algorithms and
              Programming, Data Structures, Object Oriented Programming and Database Management.
            </ListItem>
            <ListItem>
              <strong>2020 – Present:</strong> I am a final year of student. I develop my frontend
              skills such as React.js.
            </ListItem>
          </List>
        </Flex>
      </Layout>
    </>
  );
};

export default About;
