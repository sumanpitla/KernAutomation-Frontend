import React from 'react';
import { Box, Button, Heading, SimpleGrid, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../../Navbar/Layout';
import Sidebar from '../../../pages/roles/Admin/Sidebar';

const Leave = () => {
    return (
        <Layout>
            <Flex>
                <Sidebar />
                <Box p={8} width="full" borderWidth={2} align="center" >
                    <Heading align="center" mb={6}>Leave Management</Heading>

                        <Button colorScheme="green" as={RouterLink} to="/admin/leave-management/apply" width="150px" m="4">
                            Apply for Leave
                        </Button>
                        <Button  colorScheme="red" as={RouterLink} to="/admin/leave-management/approve" width="150px" m={2}>
                            Approve Leaves
                        </Button>

                </Box>
            </Flex>
        </Layout>
    );
};

export default Leave;
