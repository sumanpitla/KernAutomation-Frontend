import React, { useState } from 'react';
import { Box, Button, Input, useToast, SimpleGrid, FormControl, FormLabel, VStack, Heading, Flex } from '@chakra-ui/react';
import Layout from '../../Navbar/Layout';
import Sidebar from '../../../pages/roles/Admin/Sidebar';

const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [mobile, setMobile] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://kernn.azurewebsites.net/api/create_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                employee_name: employeeName,
                mobile,
            }),
        });

        const data = await response.json();
        toast({
            title: data.message,
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Layout>
            <Flex>
                <Sidebar />
                <Flex justify="center" align="center" height="80vh" width="100%" bg="white.50">
                <div>
                <Heading align="center" mb={8} >Employees Management</Heading>
                    <Box p={8} maxWidth="600px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white" align="center">
                        <VStack spacing={4}>
                            <Heading as="h3" size="lg" textAlign="center">Create User</Heading>
                            <SimpleGrid columns={1} spacing={3} width="full">
                                <FormControl id="email">
                                    <FormLabel>Email</FormLabel>
                                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                                </FormControl>

                                <FormControl id="employeeName">
                                    <FormLabel>Name</FormLabel>
                                    <Input value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder="Enter name" />
                                </FormControl>

                                <FormControl id="mobile">
                                    <FormLabel>Mobile</FormLabel>
                                    <Input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter mobile" />
                                </FormControl>
                            </SimpleGrid>
                            <Button type="submit" mt={4} colorScheme="teal" width="half" onClick={handleSubmit}>
                                Create User
                            </Button>
                        </VStack>
                    </Box>
                </div>
                </Flex>
            </Flex>
        </Layout>
    );
};

export default CreateUser;