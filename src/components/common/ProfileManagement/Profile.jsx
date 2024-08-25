import React, { useContext } from 'react';
import { Box, Text, Heading, Flex, Avatar, Divider } from '@chakra-ui/react';
import Layout from '../../Navbar/Layout';
import { UserContext } from '../../context/UserContext'; // Import UserContext

const Profile = () => {
  const { userData } = useContext(UserContext); // Access user data from context
  console.log(userData);
  // If user data is not available, return null or a loading state
  if (!userData) {
    return <Text>Loading...</Text>;
  }
  console.log(userData);
  const { username, role, userId } = userData; // Destructure the user data

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
            User ID: {userId}
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Profile;
