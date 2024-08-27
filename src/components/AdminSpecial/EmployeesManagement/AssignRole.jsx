import React, { useState } from 'react';
import { Box, Button, Input, useToast, FormControl, FormLabel, VStack, Heading, Flex } from '@chakra-ui/react';
import Layout from '../../Navbar/Layout';
import Sidebar from '../../../pages/roles/Admin/Sidebar'

const AssignRole = () => {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://kernn.azurewebsites.net/api/assign_role', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                role
            }),
        });

        const data = await response.json();
        toast({
            title: data.message || 'Role Assigned',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Layout>
        <Flex>
        <Sidebar />
        <Flex justify="center" align="center" height="70vh" width="100%" bg="white.50">
            <div>
            <Heading align="center" mb={8} >Employees Management</Heading>
            <Box p={8} maxWidth="600px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white" align="center">
            
                <VStack spacing={4}>
                    <Heading as="h3" size="lg" textAlign="center">Assign Role</Heading>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    </FormControl>

                    <FormControl id="role">
                        <FormLabel>Role</FormLabel>
                        <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Enter role" />
                    </FormControl>

                    <Button type="submit" mt={4} colorScheme="teal" width="half" onClick={handleSubmit}>
                        Assign Role
                    </Button>
                </VStack>
            </Box>
            </div>
        </Flex>
        </Flex>
        </Layout>
    );
};

export default AssignRole;