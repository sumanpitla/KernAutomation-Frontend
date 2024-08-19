import React, { useState } from 'react';
import { Box, Button, Input, Text, useToast } from '@chakra-ui/react';

const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [mobile, setMobile] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://kernn.azurewebsites.net/api/create_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                employee_name: employeeName,
                mobile
            }),
        });

        const data = await response.json();
        toast({
            title: data.message,
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <Text>Email</Text>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            <Text>Name</Text>
            <Input value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder="Enter name" />
            <Text>Mobile</Text>
            <Input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter mobile" />
            <Button type="submit" mt={4} colorScheme="blue">Create User</Button>
        </Box>
    );
};

export default CreateUser;
