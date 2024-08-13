// src/pages/Home.jsx
import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../components/Navbar/Layout';

const Home = () => (
  <Layout>
  <Box>
    <Box p={5} flexGrow={1}> {/* Add flexGrow to make the content area take up remaining space */}
      <Heading>Home Page</Heading>
      <Button as={RouterLink} to="/login">Login</Button>
      <Button as={RouterLink} to="/admin">Admin</Button>
    </Box>
  </Box>
  </Layout>
);

export default Home;