import React from 'react';
import {Flex, Box, Button, Heading, Text, VStack, useColorModeValue ,Image} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../components/Navbar/Layout';
import milk from '../Assets/Homepage/milk.jpeg';
import milk1 from '../Assets/Homepage/milk1.jpeg';

const Home = () => {
  const bgColor = useColorModeValue("white.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Layout>
      <Box
        bg={bgColor}
        color={textColor}
        minH="40vh"
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
      <div>

      <div justify="center" mt={4} align="center">
  <Heading size="2xl">Milk products</Heading>
  </div>   
<Flex justify="center" mt={4}>
  
  <Image src={milk} alt="milk" boxSize="200px" border="2px" borderColor="gray.200" borderRadius="md" m={2} />
  <Image src={milk1} alt="milk1" boxSize="200px" border="2px" borderColor="gray.200" borderRadius="md" m={2} />
</Flex>

      </div>
    </Layout>
  );
};

export default Home;
