import React from 'react';
import { Box, Button, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../components/Navbar/Layout';

const Home = () => {
  const bgColor = useColorModeValue("white.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Layout>
      <Box
        bg={bgColor}
        color={textColor}
        minH="80vh"
        d="flex"
        alignItems="center"
        justifyContent="center"
        px={6}
      >
        <VStack spacing={6} textAlign="center">
          <Heading size="2xl">Welcome to KERNN Automations</Heading>
          <Text fontSize="lg">
            Streamline your milk procurement process with our efficient tools.
          </Text>
          <Box>
            <Button
              as={RouterLink}
              to="/login"
              colorScheme="teal"
              size="lg"
              mr={4}
            >
              Login
            </Button>
            <Button as={RouterLink} to="/admin" colorScheme="teal" size="lg">
              Admin
            </Button>
          </Box>
        </VStack>
      </Box>
    </Layout>
  );
};

export default Home;
