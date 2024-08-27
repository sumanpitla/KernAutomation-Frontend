import React from 'react';
import { Box, Button, Heading, SimpleGrid, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../../Navbar/Layout';
import Sidebar from '../../../pages/roles/Admin/Sidebar';

const HomePageEmployeesManagement = () => {
    return (
        <Layout>
            <Flex>
                <Sidebar />
                <Box p={8} width="full" borderWidth={2}>
                    <Heading align="center" mb={6}>Employees Management</Heading>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                        <Button colorScheme="gray" as={RouterLink} to="/admin/employees/create" >
                            Create User
                        </Button>
                        <Button colorScheme="gray" as={RouterLink} to="/admin/employees/assign-role">
                            Assign Role
                        </Button>
                        <Button colorScheme="gray" as={RouterLink} to="/admin/employees/pending-role">
                            Get Pending Role Users
                        </Button>
                        <Button colorScheme="gray" as={RouterLink} to="/admin/employees/get-users">
                            Get Users
                        </Button>
                        <Button colorScheme="gray" as={RouterLink} to="/admin/employees/map-user">
                            Map User
                        </Button>
                        <Button colorScheme="gray" as={RouterLink} to="/admin/employees/create-villager">
                            Create Villager
                        </Button>
                        <Button colorScheme="gray" as={RouterLink} to="/admin/employees/edit-villager">
                            Edit Villagers
                        </Button>
                    </SimpleGrid>
                </Box>
            </Flex>
        </Layout>
    );
};

export default HomePageEmployeesManagement;
