// src/pages/roles/Admin/AdminPage.jsx
import React from 'react';
import Layout from '../../../components/Navbar/Layout';
import { Box, Heading, Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const AdminPage = () => (
  <Layout>
    <Heading align="center" mb={1}>Admin Dashboard</Heading>
    <Flex>
      {/* Sidebar for navigation */}
      <Sidebar />
      
      {/* Content area for displaying selected component */}
      <Box flex="1" p="4">
        <Outlet />
      </Box>
    </Flex>
  </Layout>
);

export default AdminPage;
