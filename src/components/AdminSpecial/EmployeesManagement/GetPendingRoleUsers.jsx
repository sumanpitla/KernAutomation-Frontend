import React, { useState, useEffect } from 'react';
import { Box, Text, List, ListItem, useToast } from '@chakra-ui/react';

const GetPendingRoleUsers = () => {
    const [users, setUsers] = useState([]);
    const toast = useToast();

    useEffect(() => {
        const fetchPendingUsers = async () => {
            const response = await fetch('https://kernn.azurewebsites.net/api/get_pending_role_users');
            const data = await response.json();
            if (response.ok) {
                setUsers(data.users);
            } else {
                toast({
                    title: data.message,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        };

        fetchPendingUsers();
    }, [toast]);

    return (
        <Box>
            <Text fontSize="xl" mb={4}>Pending Role Users</Text>
            <List>
                {users.map((user, index) => (
                    <ListItem key={index}>{user.email}</ListItem>
                ))}
            </List>
        </Box>
    );
};

export default GetPendingRoleUsers;
