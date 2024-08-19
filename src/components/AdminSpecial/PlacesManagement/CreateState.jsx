import React, { useState } from 'react';
import { Box, Button, Input, Text, useToast } from '@chakra-ui/react';

const CreateState = () => {
    const [stateName, setStateName] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
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
        toast({
            title: data.message || 'State Created Successfully',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <Text>State Name</Text>
            <Input value={stateName} onChange={(e) => setStateName(e.target.value)} placeholder="Enter state name" />
            <Button type="submit" mt={4} colorScheme="blue">Create State</Button>
        </Box>
    );
};

export default CreateState;
