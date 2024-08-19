import React, { useState, useEffect } from 'react';
import { Box, Text, List, ListItem, useToast } from '@chakra-ui/react';

const GetUsers = () => {
    const [users, setUsers] = useState([]);
    const toast = useToast();

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://kernn.azurewebsites.net/api/get_users');
            const data = await response.json();
            if (response.ok) {
                setUsers(data);
            } else {
                toast({
                    title: 'Failed to fetch users',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        };

        fetchUsers();
    }, [toast]);

    return (
        <Box>
            <Text fontSize="xl" mb={4}>Users List</Text>
            <List>
                {users.map((user, index) => (
                    <ListItem key={index}>{user.email}</ListItem>
                ))}
            </List>
        </Box>
    );
};

export default GetUsers;
