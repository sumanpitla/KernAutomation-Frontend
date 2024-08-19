import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PaySlips = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <Box p={6} bg="white" borderRadius="md" boxShadow="md" maxWidth="600px" mx="auto">
            <Heading as="h2" size="lg" mb={6}>Applications &gt; Pay Slips</Heading>
            <FormControl id="date" display="flex" alignItems="center">
                <FormLabel mb={0}>Date :</FormLabel>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="DD/MM/yyyy"
                    showMonthYearPicker
                    customInput={
                        <Input
                            placeholder="Select Date"
                            bg="gray.100"
                            width="200px"
                            marginRight={4}
                            readOnly
                        />
                    }
                />
                <Button colorScheme="green">Submit</Button>
            </FormControl>
        </Box>
    );
};

export default PaySlips;
