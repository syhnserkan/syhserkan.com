import Link from 'next/link';
import { Box, Text, Flex, Heading, Link as StyledLink, Tag, useColorMode } from '@chakra-ui/core';
import { useContext } from 'react';
import { ColorModeContext } from '@contexts/CustomColorContext';
import { StaticBlog } from 'global';
import colorMap from 'styles/colorMap';
import { addTwoMonthToPublishedDate, compareDateWithTodaysDate } from 'utils/dateOperations';
import React from 'react';
import { Article, ArticleTitle } from '.';

type Props = {
  blogs: StaticBlog[];
  isPopular?: boolean;
};

const ArticleLists = ({ blogs, isPopular = false }: Props) => {
  const colorModeObj = useContext(ColorModeContext);
  const { colorMode } = useColorMode();

  return (
    <Flex flexDirection="column" m="3rem 0">
      <Flex
        w="100%"
        borderBottom={['none', 'none', '1px solid #d6d9de', '1px solid #d6d9de']}
        alignItems="center"
        paddingBottom=".5rem"
      >
        <Heading
          fontSize={['1.7rem', '1.7rem', '2rem', '2rem']}
          color={colorModeObj.titleColor[colorMode]}
        >
          {isPopular ? 'Popular Articles' : 'Latest Articles'}
        </Heading>
        <Link href="/blog">
          <StyledLink
            ml="3rem"
            mt=".5rem"
            fontWeight="500"
            padding=".3rem .5rem"
            backgroundColor={
              colorMode === 'light' ? colorModeObj.articleTagColor : colorModeObj.buttonColor.dark
            }
            borderRadius="3rem"
            _hover={{
              textDecoration: 'none',
              backgroundColor:
                colorMode === 'light' ? '#868E96' : colorModeObj.buttonHoverColor.dark,
              color: colorMode === 'light' ? colorModeObj.white : colorModeObj.white,
            }}
            fontSize={['.7rem', '.7rem', '.8rem', '.8rem']}
            textAlign="center"
          >
            View All
          </StyledLink>
        </Link>
      </Flex>
      <Flex mt="1.5rem" alignItems="flex-start" justifyContent="center" flexDirection="column">
        {blogs
          .filter((blog) => (isPopular ? blog.isPopular : !blog.isPopular))
          .slice(0, 10)
          .map((blog) => (
            <Article key={blog.id} color={colorMode === 'light' ? 'light' : 'dark'}>
              <Link href={`/blog/${blog.id}`}>
                <StyledLink _hover={{ textDecoration: 'none' }}>
                  <ArticleTitle>
                    {compareDateWithTodaysDate(addTwoMonthToPublishedDate(blog.publishedAt)) ? (
                      <Tag
                        fontSize={['.7rem', '.7rem', '.8rem', '.7 rem']}
                        p=".5rem"
                        borderRadius=".3rem"
                        m={[
                          'auto .4rem auto 0',
                          'auto .4rem auto 0',
                          'auto .4rem auto 0',
                          '1rem 1rem 10px 0',
                        ]} //for responsive
                        height="15px"
                        backgroundColor="#d3f9d8"
                        fontWeight="700"
                        width={['2.7rem', '2.7rem', '', '']}
                        minW=""
                        color={colorModeObj.articleNewTagTextColor[colorMode]}
                        background={colorModeObj.articleNewTagBackgroundColor[colorMode]}
                      >
                        New!
                      </Tag>
                    ) : null}
                    <Box w={['300px', '300px', '400px', '600px']}>
                      <Text w="100%" color="#787f87" fontSize=".8rem" fontWeight="600">
                        {blog.publishedAt}
                      </Text>
                      <Heading fontSize={['1rem', '1.1rem', '1.15rem', '1.15rem']}>
                        {blog.title}
                      </Heading>
                    </Box>
                  </ArticleTitle>
                </StyledLink>
              </Link>
              <Box
                d="flex"
                flexDirection={['row', 'row', 'row', 'row']}
                justifyContent={['flex-start', 'flex-start', 'flex-end', 'flex-end']}
                alignItems={['flex-start', 'center', 'center', 'center']}
                w="100%"
                flexWrap="wrap"
              >
                {blog?.languageTags?.map((tag, index) => {
                  const color = colorMap[tag];
                  return (
                    <Tag
                      key={index}
                      width="max-content"
                      height="20px"
                      p=".3rem .5rem"
                      fontSize=".8rem"
                      borderRadius="16px"
                      marginBottom="7px"
                      marginRight=".5rem"
                      color="#fff"
                      backgroundColor={color?.color}
                      _hover={{ cursor: 'pointer', backgroundColor: color?.hover }}
                    >
                      {tag}
                    </Tag>
                  );
                })}
              </Box>
            </Article>
          ))}
      </Flex>
    </Flex>
  );
};

export default ArticleLists;
