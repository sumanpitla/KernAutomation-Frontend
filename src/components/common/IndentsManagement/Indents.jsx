import React from 'react';
import { Box, Button, Heading, SimpleGrid, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../../../components/Navbar/Layout';
import Sidebar from '../../../pages/roles/Admin/Sidebar';

const Indents = () => {
    return (
        <Layout>
            <Flex>
                <Sidebar />
                <Box p={8} width="full" borderWidth={2}>
                    <Heading align="center" mb={6}>Indents Management</Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
                        <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/indents/new" width="150px">
                            New Indent
                        </Button>
                        <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/indents/approve-decline" width="150px">
                            Approve/Decline
                        </Button>
                        <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/indents/status" width="150px">
                            Status
                        </Button>
                        <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/indents/consumption" width="150px">
                            Consumption
                        </Button>
                        <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/indents/return" width="150px">
                            Return
                        </Button>
                        <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/indents/reports" width="150px">
                            Report
                        </Button>
                    </SimpleGrid>
                </Box>
            </Flex>
        </Layout>
    );
};

export default Indents;
