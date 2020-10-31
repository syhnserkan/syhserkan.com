import Layout from './Layout';
import { Flex, Image, Box, Heading, Text, Button } from '@chakra-ui/core';
import Router from 'next/router';
import error404 from 'images/404.png';

const Error404 = () => {
  const redirectToHome = () => {
    Router.push('/');
  };
  return (
    <Layout>
      <Flex
        flexDirection={['column', 'column', 'row', 'row']}
        justifyContent="center"
        alignItems="center"
        maxW="100%"
        height={['62vh', '65vh', '55vh', '55vh']}
        textAlign={['center', 'center', 'initial', 'initial']}
      >
        <Image w={['300px', '400px', '400px', '500px']} src={error404}></Image>
        <Box>
          <Heading textTransform="uppercase" mb="10px">
            404 - Page Not Found
          </Heading>
          <Text mb="20px">
            The page you are looking for might have been removed had its name changed or is
            temporarily unavailable.
          </Text>
          <Button onClick={redirectToHome}>Go to Home</Button>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Error404;
