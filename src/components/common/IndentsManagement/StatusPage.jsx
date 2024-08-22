import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Heading, Flex } from '@chakra-ui/react';
import axios from 'axios';
import Layout from '../../Navbar/Layout';

const StatusPage = () => {
    // Sample data
  const sampleData = [
    { id: 1, Date: '13-01-2024',BmcCc:"Bmc", Status: 'Pending' },
    
  ];
  // State to hold the fetched data
  const [indents, setIndents] = useState(sampleData);

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchIndents = async () => {
      try {
        const response = await axios.get('https://kernn.azurewebsites.net/api/indents/status');
        setIndents(response.data);
      } catch (error) {
        console.error('Error fetching indent status:', error);
      }
    };

    fetchIndents();
  }, []);

  return (
    <Layout>
      <Flex justify="center" align="top" height="100vh" bg="white.50" >
        <Box p={8} maxWidth="1400px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
          <Heading as="h3" size="lg" textAlign="center" mb={4}>
            Indent Status
          </Heading>
          
          {/* Table displaying fetched data */}
          <Table variant="solid" size="lg">
            <Thead>
              <Tr>
                <Box bg="red.500">
                <Th>Date</Th>
                <Th>Bmc/Cc</Th>
                <Th>By</Th>
                <Th>Store To</Th>
                <Th>Material Code</Th>
                <Th>Material Name</Th>
                <Th>Stock Hand</Th>
                <Th>Require Quantity</Th>
                <Th>Required Days</Th>
                <Th>Reason</Th>
                <Th>Status</Th> {/* Added Status Column */}
                </Box>
              </Tr>
            </Thead>
            <Tbody>
              {indents.map((indent) => (
                <Tr key={indent.id}>
                  <Td>{indent.Date}</Td>
                  <Td>{indent.BmcCc}</Td>
                  <Td>{indent.By}</Td>
                  <Td>{indent.StoreTo}</Td>
                  <Td>{indent.MaterialCode}</Td>
                  <Td>{indent.MaterialName}</Td>
                  <Td>{indent.StockHand}</Td>
                  <Td>{indent.RequireQuantity}</Td>
                  <Td>{indent.RequiredDays}</Td>
                  <Td>{indent.Reason}</Td>
                  <Td>{indent.Status}</Td> {/* Display the Status */}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Layout>
  );
};

export default StatusPage;
