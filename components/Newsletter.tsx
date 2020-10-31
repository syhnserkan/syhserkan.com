import { Box, Heading, Text, useColorMode, Link as StyledLink } from '@chakra-ui/core';
import { ColorModeContext } from '@contexts/CustomColorContext';
import React, { useContext } from 'react';

const Newsletter = React.forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
  const colorModeObj = useContext(ColorModeContext);
  const { colorMode } = useColorMode();
  return (
    <Box my={4} w="100%" ref={ref} {...props}>
      <Heading
        fontSize={['1.7rem', '1.7rem', '2rem', '2rem']}
        color={colorModeObj.titleColor[colorMode]}
        mb={4}
        borderBottom={['none', 'none', '1px solid #d6d9de', '1px solid #d6d9de']}
        paddingBottom=".5rem"
      >
        Newsletter
      </Heading>
      <Text color="#787f87" fontSize="1.1rem" fontWeight="400">
        I send out an email when I create something new.
      </Text>
      <StyledLink
        href="https://serkansayhan.substack.com/p/coming-soon"
        isExternal
        backgroundColor={colorModeObj.buttonColor[colorMode]}
        d="inline-block"
        color="white"
        padding="20px 25px"
        _hover={{
          backgroundColor:
            colorMode === 'light'
              ? colorModeObj.buttonHoverColor.light
              : colorModeObj.buttonHoverColor.dark,
        }}
        fontWeight="600"
        fontSize={['15px', '16px', '16px', '18px']}
        mt="25px"
        mb={['10px', '10px', '0px', '0px']}
        mr={['0px', '0', '10px', '10px']}
        borderRadius=".25rem"
      >
        <Text d="inline-block" mr="8px">
          💌
        </Text>
        Join the Newsletter
      </StyledLink>
    </Box>
  );
});

export default Newsletter;
