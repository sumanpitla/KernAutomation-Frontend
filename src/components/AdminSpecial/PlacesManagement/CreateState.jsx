import React, { useState } from 'react';
import { useToast, FormControl, FormLabel, Input, Button,Box,Flex } from '@chakra-ui/react';
import Layout from '../../Navbar/Layout';

const CreateState = () => {
    const [stateName, setStateName] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://kernn.azurewebsites.net/api/create_state', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    state_name: stateName
                }),
            });

            const data = await response.json();
            console.log('API Response:', data); // Print the response from the API
            toast({
                title: 'State created.',
                description: `State ${stateName} has been created successfully.`,
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            console.error('Error creating state:', error);
            toast({
                title: 'Error',
                description: 'There was an error creating the state.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Layout>
            <Flex justify="center" align="center" height="40vh" bg="white.50">
                <Box p={8} maxWidth="800px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white" align="center">
                    <form onSubmit={handleSubmit}>
                        <FormControl id="state-name" isRequired align="center">
                            <FormLabel>State Name</FormLabel>
                            <Input
                                type="text"
                                value={stateName}
                                onChange={(e) => setStateName(e.target.value)}
                                placeholder="Enter state name"
                            />
                        </FormControl>
                        <Button type="submit" colorScheme="blue" mt={4}>Create State</Button>
                    </form>
                </Box>
            </Flex>
        
        </Layout>
    );
};

export default CreateState;