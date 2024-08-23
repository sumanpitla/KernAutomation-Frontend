import React, { useState } from 'react';
import { Button, Flex, Box, FormControl, FormLabel, Input, VStack, Heading, SimpleGrid, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import axios from 'axios';
import Layout from '../../Navbar/Layout';

const GetMilk = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [centreId, setCentreId] = useState('');
  const [milkEntries, setMilkEntries] = useState([]);

  const handleFetch = async () => {
    try {
      const response = await axios.post('https://kernn.azurewebsites.net/api/get_milk_entries', {
        from_date: fromDate,
        to_date: toDate,
        centre_id: centreId,
      });
      setMilkEntries(response.data);
      console.log('Data fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Layout>
      <Flex justify="center" align="center" height="40vh" bg="white.50">
        <Box p={8} maxWidth="800px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
          <VStack spacing={4}>
            <Heading as="h3" size="lg" textAlign="center">Get Milk Entries</Heading>

            <SimpleGrid columns={3} spacing={4} width="full">
              <FormControl id="fromDate">
                <FormLabel>From Date</FormLabel>
                <Input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="toDate">
                <FormLabel>To Date</FormLabel>
                <Input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="centreId">
                <FormLabel>Centre ID</FormLabel>
                <Input type="number" placeholder="Enter Centre ID" value={centreId} onChange={(e) => setCentreId(e.target.value)} fontWeight="bold" />
              </FormControl>
            </SimpleGrid>

            <Button colorScheme="teal" variant="solid" onClick={handleFetch} width="full" mt={4}>
              Fetch Milk Entries
            </Button>

            {milkEntries.length > 0 && (
              <Box mt={8} width="full">
                <Heading as="h4" size="md" textAlign="center" mb={4}>Milk Entries</Heading>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Village Name</Th>
                      <Th>Agent Name</Th>
                      <Th>SNF</Th>
                      <Th>Fat</Th>
                      <Th>CLR</Th>
                      <Th>Quantity</Th>
                      <Th>Date</Th>
                      <Th>Milk Type</Th>
                      <Th>Shift Type</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {milkEntries.map((entry, index) => (
                      <Tr key={index}>
                        <Td>{entry.village_name}</Td>
                        <Td>{entry.agent_name}</Td>
                        <Td>{entry.snf}</Td>
                        <Td>{entry.fat}</Td>
                        <Td>{entry.clr}</Td>
                        <Td>{entry.quantity}</Td>
                        <Td>{entry.date}</Td>
                        <Td>{entry.milk_type}</Td>
                        <Td>{entry.shift_type}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Box>
            )}
          </VStack>
        </Box>
      </Flex>
    </Layout>
  );
};

export default GetMilk;
