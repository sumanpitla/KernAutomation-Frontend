import React from 'react';
import { Box, Button, Heading,HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../../Navbar/Layout';
const HomePagePlacesManagement = () => {
    return (
        <Layout>
        <Box>
            <Heading align="center" mb={4}>Places Management</Heading>
            <HStack spacing={4}>
                <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/places/create-state">
                    Create State
                </Button>
                <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/places/get-states">
                    Get States
                </Button>
                <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/places/create-district">
                    Create District
                </Button>
                <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/places/get-districts">
                    Get Districts
                </Button>
                <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/places/create-centre">
                    Create Centre
                </Button>
                <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/places/get-centers">
                    Get Centers
                </Button>
                <Button colorScheme="teal" variant="outline" as={RouterLink} to="/admin/places/create-village">
                    Create Village
                </Button>
                <Box m="2">
                    <Button colorScheme="teal" variant="outline" as={RouterLink} to="/milk/milk-entry">
                        MilkEntry
                    </Button>
                </Box>
                <Box m="2">
                    <Button colorScheme="teal" variant="outline" fontColour="black" as={RouterLink} to="/milk/get-milk">
                        Get Milk
                    </Button>
                </Box>
            </HStack>
        </Box>
        </Layout>
    );
};

export default HomePagePlacesManagement;
