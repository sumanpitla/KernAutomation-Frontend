import React from 'react';
import { Button,Flex,Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../../../components/Navbar/Layout';
const Indents = () => {
    return (
        <Layout>
        <div>
            <h1 align="center">Welcome to the Indents component!</h1>
            <Flex>
                <Box m="2">
                    <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/indents/new" >
                        New Indent
                    </Button>
                </Box>
                <Box m="2">
                    <Button colorScheme="teal" variant="outline"  as={RouterLink} to="/admin/indents/approve-decline">
                        Approve/Decline
                    </Button>
                </Box>
                <Box m="2">
                    <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/indents/status">
                        Status
                    </Button>
                </Box>
                <Box m="2">
                    <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/indents/consumption">
                        Consumption
                    </Button>
                </Box>
                <Box m="2">
                    <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/indents/return">
                        Return
                    </Button>
                </Box>
                <Box m="2">
                    <Button colorScheme="teal" variant="outline" fontColour="black" as={RouterLink} to="/admin/indents/reports">
                        Report
                    </Button>
                </Box>
            </Flex> 
               
        </div>
        </Layout>
    );
};

export default Indents;