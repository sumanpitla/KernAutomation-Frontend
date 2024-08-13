import React from 'react';
import { Box, Input, Textarea, Button, VStack, Heading } from '@chakra-ui/react';

const ApplyExperienceLetter = () => {
    return (
        <Box p={6} bg="white" borderRadius="md" boxShadow="md" maxWidth="600px" mx="auto">
            <Heading as="h2" size="lg" textAlign="center" mb={6}>Apply for Experience Letter</Heading>
            <VStack spacing={4} align="stretch">
                <Input placeholder="Employee Name" bg="gray.100" />
                <Input placeholder="Employee ID" bg="gray.100" />
                <Input placeholder="Department" bg="gray.100" />
                <Input placeholder="Designation" bg="gray.100" />
                <Textarea placeholder="Reason for Request" bg="gray.100" />

                <Box textAlign="center">
                    <Button colorScheme="blue" mr={3}>Submit</Button>
                    <Button colorScheme="red">Cancel</Button>
                </Box>
            </VStack>
        </Box>
    );
};

export default ApplyExperienceLetter;
