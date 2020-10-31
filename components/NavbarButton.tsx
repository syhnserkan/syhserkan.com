import { Button } from '@chakra-ui/core';
import Link from 'next/link';

type NavbarProps = {
  text: string;
  href: string;
  LinkComponent: typeof Link;
};

const NavbarButton = ({ LinkComponent, text, href }: NavbarProps) => {
  return (
    <LinkComponent href={href} passHref>
      <Button
        fontWeight="500"
        fontSize={['xs', 'sm', 'lg', 'xl']}
        as="a"
        variant="ghost"
        _hover={{ bg: 'rgba(0,0,0,.2)' }}
        p={[1, 4]}
        color="white"
      >
        {text}
      </Button>
    </LinkComponent>
  );
};

export default NavbarButton;
