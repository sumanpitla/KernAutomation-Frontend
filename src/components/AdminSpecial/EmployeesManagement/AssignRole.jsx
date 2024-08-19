import React, { useState } from 'react';
import { Box, Button, Input, Text, useToast } from '@chakra-ui/react';

const AssignRole = () => {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://kernn.azurewebsites.net/api/assign_role', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                role
            }),
        });

        const data = await response.json();
        toast({
            title: data.message || 'Role Assigned',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <Text>Email</Text>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            <Text>Role</Text>
            <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Enter role" />
            <Button type="submit" mt={4} colorScheme="blue">Assign Role</Button>
        </Box>
    );
};

export default AssignRole;
