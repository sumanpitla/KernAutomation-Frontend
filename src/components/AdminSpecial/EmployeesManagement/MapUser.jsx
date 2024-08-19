import React, { useState } from 'react';
import { Box, Button, Input, Text, useToast } from '@chakra-ui/react';

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
        <Box as="form" onSubmit={handleSubmit}>
            <Text>Email</Text>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            <Text>State</Text>
            <Input value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter state" />
            <Text>District</Text>
            <Input value={district} onChange={(e) => setDistrict(e.target.value)} placeholder="Enter district" />
            <Text>Centre</Text>
            <Input value={centre} onChange={(e) => setCentre(e.target.value)} placeholder="Enter centre" />
            <Button type="submit" mt={4} colorScheme="blue">Map User</Button>
        </Box>
    );
};

export default MapUser;
