// AdminPage.jsx
import React from 'react';
import Layout from '../../../components/Navbar/Layout';
import { Box, Heading, Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const AdminPage = () => (
  <Layout>
      <Flex borderWidth={3}>
        <Sidebar />
        <Box flex="1" p="4" bg="" borderRadius="md" boxShadow="md" m="1" borderWidth={3}>
            <Heading as="h1" size="xl" mb={6} textAlign="center" color="teal.500">
                Admin Dashboard
            </Heading>
          <Outlet />
        </Box>
      </Flex>

  </Layout>
);

export default AdminPage;
