import React from 'react';
import { Box, Input, Select, Textarea, Button, VStack } from '@chakra-ui/react';

const ApplyLeave = () => {
    return (

        <Box p={4} bg="white" borderRadius="md" boxShadow="md">
            <h1 align="center">Apply Leave</h1>
            <VStack spacing={4} align="stretch">
                <Box display="flex" justifyContent="space-between">
                    <Input placeholder="Date" bg="white" />
                    <Input placeholder="Time" bg="white" />
                </Box>
                <Input placeholder="Employee Name" bg="white" />
                <Input placeholder="Employee ID" bg="white" />
                <Select placeholder="Type" bg="white">
                    <option value="sick">Sick Leave</option>
                    <option value="casual">Casual Leave</option>
                    <option value="earned">Earned Leave</option>
                </Select>
                <Box display="flex" justifyContent="space-between">
                    <Input placeholder="From" bg="white" />
                    <Input placeholder="To" bg="white" />
                </Box>
                <Input placeholder="No of Days" bg="white" />
                <Select placeholder="Leave Type" bg="white">
                    <option value="sick">Sick Leave</option>
                    <option value="casual">Casual Leave</option>
                    <option value="earned">Earned Leave</option>
                </Select>
                <Textarea placeholder="Reason" bg="white" />

                <Box>
                    <Button colorScheme="green" mr={3}>Submit</Button>
                    <Button colorScheme="red">Cancel</Button>
                </Box>
            </VStack>
        </Box>
    );
};

export default ApplyLeave;
