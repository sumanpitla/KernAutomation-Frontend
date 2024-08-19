import React from 'react';
import { Box, Button, Heading, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const HomePageEmployeesManagement = () => {
    return (
        <Box>
            <Heading align="center" mb={4}>Employees Management</Heading>
            <HStack spacing={4}>
                <Button colorScheme="blue" as={RouterLink} to="/admin/employees/create">
                    Create User
                </Button>
                <Button colorScheme="blue" as={RouterLink} to="/admin/employees/assign-role">
                    Assign Role
                </Button>
                <Button colorScheme="blue" as={RouterLink} to="/admin/employees/pending-role">
                    Get Pending Role Users
                </Button>
                <Button colorScheme="blue" as={RouterLink} to="/admin/employees/get-users">
                    Get Users
                </Button>
                <Button colorScheme="blue" as={RouterLink} to="/admin/employees/map-user">
                    Map User
                </Button>
                <Button colorScheme="blue" as={RouterLink} to="/admin/employees/create-villager">
                    Create Villager
                </Button>
                <Button colorScheme="blue" as={RouterLink} to="/admin/employees/edit-villager">
                    Edit Villagers
                </Button>
                
            </HStack>
        </Box>
    );
};

export default HomePageEmployeesManagement;
