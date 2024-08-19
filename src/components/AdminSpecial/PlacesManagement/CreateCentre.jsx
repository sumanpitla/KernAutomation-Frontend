import React, { useState } from 'react';
import { Box, Button, Input, Text, useToast, Select } from '@chakra-ui/react';

const CreateCentre = () => {
    const [stateName, setStateName] = useState('');
    const [districtName, setDistrictName] = useState('');
    const [centreType, setCentreType] = useState('');
    const [centreName, setCentreName] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://kernn.azurewebsites.net/api/create_centre', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                state_name: stateName,
                district_name: districtName,
                centre_type: centreType,
                centre_name: centreName
            }),
        });

        const data = await response.json();
        toast({
            title: data.message || 'Centre Created Successfully',
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
            <Text>Centre Type</Text>
            <Select value={centreType} onChange={(e) => setCentreType(e.target.value)} placeholder="Select centre type">
                <option value="BMC">BMC</option>
                <option value="CC">CC</option>
            </Select>
            <Text>Centre Name</Text>
            <Input value={centreName} onChange={(e) => setCentreName(e.target.value)} placeholder="Enter centre name" />
            <Button type="submit" mt={4} colorScheme="blue">Create Centre</Button>
        </Box>
    );
};

export default CreateCentre;
