import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button, Input, Textarea, VStack } from '@chakra-ui/react';

const ApproveLeave = () => {
    return (
        <Box p={4} bg="white" borderRadius="md" boxShadow="md">
            <h1 align="center">Approve Leave</h1>
            <Box mb={4}>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>S.no</Th>
                            <Th>Name</Th>
                            <Th>ID</Th>
                            <Th>No of Days</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>DEF</Td>
                            <Td>001</Td>
                            <Td>03</Td>
                            <Td><Button colorScheme="green" size="sm">View</Button></Td>
                        </Tr>
                        <Tr>
                            <Td>2</Td>
                            <Td>ABC</Td>
                            <Td>002</Td>
                            <Td>05</Td>
                            <Td><Button colorScheme="green" size="sm">View</Button></Td>
                        </Tr>
                        <Tr>
                            <Td>3</Td>
                            <Td>XYZ</Td>
                            <Td>003</Td>
                            <Td>10</Td>
                            <Td><Button colorScheme="green" size="sm">View</Button></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>

            <VStack spacing={4} align="stretch" bg="blue.200" p={4} borderRadius="md" color="white">
                <Input placeholder="Employee name" bg="white" color="black" />
                <Input placeholder="Employee ID" bg="white" color="black" />
                <Input placeholder="Type" bg="white" color="black" />
                <Input placeholder="From" bg="white" color="black" />
                <Input placeholder="To" bg="white" color="black" />
                <Input placeholder="No of days" bg="white" color="black" />
                <Input placeholder="Leave type" bg="white" color="black" />
                <Textarea placeholder="Reason" bg="white" color="black" />

                <Box>
                    <Button colorScheme="green" mr={3}>Approve</Button>
                    <Button colorScheme="red">Decline</Button>
                </Box>
            </VStack>
        </Box>
    );
};

export default ApproveLeave;
