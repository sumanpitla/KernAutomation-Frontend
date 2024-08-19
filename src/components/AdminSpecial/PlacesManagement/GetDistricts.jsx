import React, { useState } from 'react';
import { Box, Button, Input, List, ListItem, Text, useToast } from '@chakra-ui/react';

const GetDistricts = () => {
    const [stateName, setStateName] = useState('');
    const [districts, setDistricts] = useState([]);
    const toast = useToast();

    const handleFetchDistricts = async () => {
        const response = await fetch('https://kernn.azurewebsites.net/api/get_districts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ state_name: stateName }),
        });

        const data = await response.json();
        if (response.ok) {
            setDistricts(data.districts);
        } else {
            toast({
                title: 'Failed to fetch districts',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box>
            <Text fontSize="xl" mb={4}>Fetch Districts</Text>
            <Input value={stateName} onChange={(e) => setStateName(e.target.value)} placeholder="Enter state name" />
            <Button onClick={handleFetchDistricts} mt={4} colorScheme="blue">Get Districts</Button>
            <List mt={4}>
                {districts.map((district, index) => (
                    <ListItem key={index}>{district}</ListItem>
                ))}
            </List>
        </Box>
    );
};

export default GetDistricts;
