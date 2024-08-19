import React from 'react';
import { Box, Text, Heading, Flex, Avatar, Divider } from '@chakra-ui/react';
import Layout from '../../Navbar/Layout';
const Profile = () => {
  // Example user data (replace this with actual context data when ready)
  const userData = {
    username: 'Jane Doe',
    role: 'Manager',
    id: '987654',
  };

  // Destructure the example user data
  const { username, role, id } = userData;

  return (
    <Layout>
      <Flex align="center" justify="center" minHeight="100vh" bg="gray.100">
        <Box
          w="400px"
          p="6"
          bg="white"
          boxShadow="lg"
          borderRadius="md"
          textAlign="center"
        >
          <Avatar size="xl" name={username} mb="4" />
          <Heading as="h2" size="lg" mb="2">
            {username}
          </Heading>
          <Text fontSize="lg" color="gray.500" mb="4">
            {role}
          </Text>
          <Divider />
          <Text fontSize="md" color="gray.600" mt="4">
            User ID: {id}
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Profile;
