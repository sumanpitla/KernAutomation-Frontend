import React, { useState } from 'react';
import { Box, Button, Input, List, ListItem, Text, useToast } from '@chakra-ui/react';

const GetCenters = () => {
    const [stateName, setStateName] = useState('');
    const [districtName, setDistrictName] = useState('');
    const [centres, setCentres] = useState([]);
    const toast = useToast();

    const handleFetchCenters = async () => {
        const response = await fetch('https://kernn.azurewebsites.net/api/get_centres', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ state_name: stateName, district_name: districtName }),
        });

        const data = await response.json();
        if (response.ok) {
            setCentres(data.centres);
        } else {
            toast({
                title: 'Failed to fetch centers',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box>
            <Text fontSize="xl" mb={4}>Fetch Centers</Text>
            <Input value={stateName} onChange={(e) => setStateName(e.target.value)} placeholder="Enter state name" />
            <Input value={districtName} onChange={(e) => setDistrictName(e.target.value)} placeholder="Enter district name" mt={4} />
            <Button onClick={handleFetchCenters} mt={4} colorScheme="blue">Get Centers</Button>
            <List mt={4}>
                {centres.map((centre, index) => (
                    <ListItem key={index}>{centre}</ListItem>
                ))}
            </List>
        </Box>
    );
};

export default GetCenters;
