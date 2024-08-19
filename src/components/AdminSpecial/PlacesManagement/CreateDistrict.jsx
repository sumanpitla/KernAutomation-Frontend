import React, { useState } from 'react';
import { Box, Button, Input, Text, useToast } from '@chakra-ui/react';

const CreateDistrict = () => {
    const [stateName, setStateName] = useState('');
    const [districtName, setDistrictName] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://kernn.azurewebsites.net/api/create_district', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                state_name: stateName,
                district_name: districtName
            }),
        });

        const data = await response.json();
        toast({
            title: data.message || 'District Created Successfully',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <Text>State Name</Text>
            <Input value={stateName} onChange={(e) => setStateName(e.target.value)} placeholder="Enter state name" />
            <Text>District Name</Text>
            <Input value={districtName} onChange={(e) => setDistrictName(e.target.value)} placeholder="Enter district name" />
            <Button type="submit" mt={4} colorScheme="blue">Create District</Button>
        </Box>
    );
};

export default CreateDistrict;
