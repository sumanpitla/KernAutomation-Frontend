import React from 'react';
import { Box, Button,Flex,Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../../Navbar/Layout';
import Sidebar from '../../../pages/roles/Admin/Sidebar';
const Tasks = () => {
  return (
    <Layout>
            <Flex>
                <Sidebar />
                <Box p={8} width="full" borderWidth={2} align="center" >
                    <Heading align="center" mb={6}>Tasks Management</Heading>
                    <Button colorScheme="orange" mr={3} as={RouterLink} to="/admin/tasks/new">ADD NEW</Button>
                    <Button colorScheme="blue" mr={3} as={RouterLink} to="/admin/tasks/completed">COMPLETED</Button>
                    <Button colorScheme="red" mr={3} as={RouterLink} to="/admin/tasks/pending">PENDING</Button>
                    <Button colorScheme="green" mr={3} as={RouterLink} to="/admin/tasks/status">STATUS</Button>

                </Box>
            </Flex>
        </Layout>
   
  );
};

export default Tasks;
