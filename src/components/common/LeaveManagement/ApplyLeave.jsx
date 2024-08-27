import React, { useState } from 'react';
import { Box, Button, Input, useToast, FormControl, FormLabel, VStack, Heading, Flex, SimpleGrid } from '@chakra-ui/react';
import Layout from '../../Navbar/Layout';
import Sidebar from '../../../pages/roles/Admin/Sidebar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ApplyLeave = () => {
    const [employeeName, setEmployeeName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [leaveType, setLeaveType] = useState('');
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [noOfDays, setNoOfDays] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = () => {
        const data = {
            employeeName,
            employeeId,
            leaveType,
            from,
            to,
            noOfDays,
            reason
        };
        console.log(data);
        try{
        const response = fetch('https://kernn.azurewebsites.net/api/apply_leave', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    } catch (error) {
        console.log(error);
    }
        // Handle form submission
    };

    return (
        <Layout>
            <Flex>
                <Sidebar />
                <Flex justify="center" align="center" height="110vh" width="100%" bg="white.50" p={4}>
                    <div>
                        <Heading align="center" mb={8}>Leave Management</Heading>
                        <Box p={8} width="600px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white" align="center">
                            <VStack spacing={4}>
                                <Heading as="h3" size="lg" textAlign="center">Apply Leave Here</Heading>
                                <SimpleGrid columns={1} spacing={3} width="full">

                                    <FormControl id="employeeName">
                                        <FormLabel>Employee Name</FormLabel>
                                        <Input value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder="Enter employee name" />
                                    </FormControl>

                                    <FormControl id="employeeId">
                                        <FormLabel>Employee ID</FormLabel>
                                        <Input value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} placeholder="Enter employee ID" />
                                    </FormControl>

                                    <FormControl id="leaveType">
                                        <FormLabel>Leave Type</FormLabel>
                                        <Input value={leaveType} onChange={(e) => setLeaveType(e.target.value)} placeholder="Enter leave type" />
                                    </FormControl>

                                    <FormControl id="from">
                                        <FormLabel>From</FormLabel>
                                        <DatePicker
                                            selected={from}
                                            onChange={(date) => setFrom(date)}
                                            placeholderText="Select start date"
                                            dateFormat="yyyy/MM/dd"
                                            className="chakra-input css-1c6b5o6"
                                        />
                                    </FormControl>

                                    <FormControl id="to">
                                        <FormLabel>To</FormLabel>
                                        <DatePicker
                                            selected={to}
                                            onChange={(date) => setTo(date)}
                                            placeholderText="Select end date"
                                            dateFormat="yyyy/MM/dd"
                                            className="chakra-input css-1c6b5o6"
                                        />
                                    </FormControl>

                                    <FormControl id="noOfDays">
                                        <FormLabel>Number of Days</FormLabel>
                                        <Input value={noOfDays} onChange={(e) => setNoOfDays(e.target.value)} placeholder="Enter number of days" />
                                    </FormControl>

                                    <FormControl id="reason">
                                        <FormLabel>Reason</FormLabel>
                                        <Input value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Enter reason" />
                                    </FormControl>

                                    <Button type="submit" mt={4} colorScheme="teal" width="half" onClick={handleSubmit}>
                                        Apply Leave
                                    </Button>
                                </SimpleGrid>
                            </VStack>
                        </Box>
                    </div>
                </Flex>
            </Flex>
        </Layout>
    );
};

export default ApplyLeave;
