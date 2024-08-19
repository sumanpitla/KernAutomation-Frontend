import React, { useState, useEffect } from 'react';
import { Box, Text, List, ListItem, useToast } from '@chakra-ui/react';

const GetStates = () => {
    const [states, setStates] = useState([]);
    const toast = useToast();

    useEffect(() => {
        const fetchStates = async () => {
            const response = await fetch('https://kernn.azurewebsites.net/api/get_state');
            const data = await response.json();
            if (response.ok) {
                setStates(data.states);
            } else {
                toast({
                    title: 'Failed to fetch states',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        };

        fetchStates();
    }, [toast]);

    return (
        <Box>
            <Text fontSize="xl" mb={4}>States List</Text>
            <List>
                {states.map((state, index) => (
                    <ListItem key={index}>{state}</ListItem>
                ))}
            </List>
        </Box>
    );
};

export default GetStates;
