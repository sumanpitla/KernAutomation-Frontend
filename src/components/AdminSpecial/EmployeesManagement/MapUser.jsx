import React, { useState } from 'react';
import { Box, Button, Input, useToast, SimpleGrid, FormControl, FormLabel, VStack, Heading, Flex } from '@chakra-ui/react';
import Layout from '../../Navbar/Layout';
import Sidebar from '../../../pages/roles/Admin/Sidebar';

const MapUser = () => {
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [centre, setCentre] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://kernn.azurewebsites.net/api/map_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                state,
                district,
                centre
            }),
        });

        const data = await response.json();
        toast({
            title: data.message || 'User Mapped Successfully',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Layout>
            <Flex>
                <Sidebar />
                <Flex justify="center" align="center" height="90vh" width="100%" bg="white.50">
                <div>
                <Heading align="center" mb={8} >Employees Management</Heading>
                    <Box p={8} width="500px"  borderWidth={1} borderRadius={8} boxShadow="lg" bg="white" align="center">
                        <VStack spacing={4}>
                            <Heading as="h3" size="lg" textAlign="center">Map User</Heading>
                            <SimpleGrid columns={1} spacing={3} width="full">
                                <FormControl id="email">
                                    <FormLabel>Email</FormLabel>
                                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                                </FormControl>

                                <FormControl id="state">
                                    <FormLabel>State</FormLabel>
                                    <Input value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter state" />
                                </FormControl>

                                <FormControl id="district">
                                    <FormLabel>District</FormLabel>
                                    <Input value={district} onChange={(e) => setDistrict(e.target.value)} placeholder="Enter district" />
                                </FormControl>

                                <FormControl id="centre">
                                    <FormLabel>Centre</FormLabel>
                                    <Input value={centre} onChange={(e) => setCentre(e.target.value)} placeholder="Enter centre" />
                                </FormControl>
                            </SimpleGrid>
                            <Button type="submit" mt={4} colorScheme="teal" width="half" onClick={handleSubmit}>
                                Map User
                            </Button>
                        </VStack>
                    </Box>
                </div>
                </Flex>
            </Flex>
        </Layout>
    );
};

export default MapUser;