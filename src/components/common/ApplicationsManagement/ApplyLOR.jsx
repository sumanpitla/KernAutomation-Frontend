import React from 'react';
import { Box, Input, Textarea, Button, VStack, Heading, Select } from '@chakra-ui/react';

const ApplyLOR = () => {
    return (
        <Box p={6} bg="white" borderRadius="md" boxShadow="md" maxWidth="600px" mx="auto">
            <Heading as="h2" size="lg" textAlign="center" mb={6}>Apply for LOR</Heading>
            <VStack spacing={4} align="stretch">
                <Input placeholder="Student Name" bg="gray.100" />
                <Input placeholder="Student ID" bg="gray.100" />
                <Input placeholder="Course/Program" bg="gray.100" />
                <Select placeholder="Select Reason" bg="gray.100">
                    <option value="higher-education">Higher Education</option>
                    <option value="job-application">Job Application</option>
                    <option value="scholarship">Scholarship</option>
                    <option value="others">Others</option>
                </Select>
                <Textarea placeholder="Brief Description of Request" bg="gray.100" />

                <Box textAlign="center">
                    <Button colorScheme="blue" mr={3}>Submit</Button>
                    <Button colorScheme="red">Cancel</Button>
                </Box>
            </VStack>
        </Box>
    );
};

export default ApplyLOR;
