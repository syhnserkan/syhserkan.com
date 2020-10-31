import React from 'react';
import { Link as StyledLink, useColorMode } from '@chakra-ui/core';

type Props = {
  text: string;
  url: string;
};
const TextLink = ({ text, url }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <StyledLink
      _hover={{ textDecoration: 'none' }}
      href={url}
      border="none"
      borderBottom={colorMode === 'light' ? '4px solid #8d44d1' : null}
      color={colorMode === 'light' ? '#000' : '#6dd667'}
      isExternal
    >
      <strong>{text}</strong>
    </StyledLink>
  );
};

export default TextLink;
