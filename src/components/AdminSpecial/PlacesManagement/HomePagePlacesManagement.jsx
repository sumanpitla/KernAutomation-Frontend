import React from 'react';
import { Box, Button, Heading, VStack,HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const HomePagePlacesManagement = () => {
    return (
        <Box>
            <Heading align="center" mb={4}>Places Management</Heading>
            <HStack spacing={4}>
                <Button colorScheme="blue" as={RouterLink} to="/admin/places/create-state">
                    Create State
                </Button>
                <Button colorScheme="blue" as={RouterLink} to="/admin/places/get-states">
                    Get States
                </Button>
                <Button colorScheme="blue" as={RouterLink} to="/admin/places/create-district">
                    Create District
                </Button>
                <Button colorScheme="blue" as={RouterLink} to="/admin/places/get-districts">
                    Get Districts
                </Button>
                <Button colorScheme="blue" as={RouterLink} to="/admin/places/create-centre">
                    Create Centre
                </Button>
                <Button colorScheme="blue" as={RouterLink} to="/admin/places/get-centers">
                    Get Centers
                </Button>
                <Button colorScheme="blue" as={RouterLink} to="/admin/places/create-village">
                    Create Village
                </Button>
            </HStack>
        </Box>
    );
};

export default HomePagePlacesManagement;
