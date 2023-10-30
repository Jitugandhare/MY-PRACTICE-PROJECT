import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, Link as ChakraLink, Button, HStack } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex bg="blue.500" p={4} alignItems="center">
      <Box>
        <Link to="/signup">
          <ChakraLink color="white" mr={4}>
            Sign Up
          </ChakraLink>
        </Link>
        <Link to="/signin">
          <ChakraLink color="white" mr={4}>
            Login
          </ChakraLink>
        </Link>
        <Link to="/blog">
          <ChakraLink color="white">Blog</ChakraLink>
        </Link>
      </Box>
      <Spacer />
      {/* <HStack spacing={4}>
        <Button colorScheme="whiteAlpha" variant="outline">
          Profile
        </Button>
        <Button colorScheme="whiteAlpha" variant="outline">
          Logout
        </Button>
      </HStack> */}
    </Flex>
  );
};

export default Navbar;