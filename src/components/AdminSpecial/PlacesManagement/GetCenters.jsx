import React, { useState } from 'react';
import { Button, Flex, Box, FormControl, FormLabel, Input, VStack, Heading, SimpleGrid, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import axios from 'axios';
import Layout from '../../Navbar/Layout';

const GetCenters = () => {
  const [stateName, setStateName] = useState('');
  const [districtName, setDistrictName] = useState('');
  const [centres, setCentres] = useState([]);

  const handleFetch = async () => {
    try {
      const response = await axios.post('https://kernn.azurewebsites.net/api/get_centres', {
        state_name: stateName,
        district_name: districtName,
      });
      setCentres(response.data.centres);
      console.log('Data fetched successfully:', response.data.centres);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Layout>
      <Flex justify="center" align="center" height="40vh" bg="white.50">
        <Box p={8} maxWidth="800px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
          <VStack spacing={4}>
            <Heading as="h3" size="lg" textAlign="center">Fetch Centers</Heading>

            <SimpleGrid columns={2} spacing={4} width="full">
              <FormControl id="stateName">
                <FormLabel>State Name</FormLabel>
                <Input type="text" placeholder="Enter State Name" value={stateName} onChange={(e) => setStateName(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="districtName">
                <FormLabel>District Name</FormLabel>
                <Input type="text" placeholder="Enter District Name" value={districtName} onChange={(e) => setDistrictName(e.target.value)} fontWeight="bold" />
              </FormControl>
            </SimpleGrid>

            <Button colorScheme="teal" variant="solid" onClick={handleFetch} width="full" mt={4}>
              Get Centers
            </Button>

            {centres.length > 0 && (
              <Box mt={8} width="full">
                <Heading as="h4" size="md" textAlign="center" mb={4}>Centers</Heading>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Center Name</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {centres.map((centre, index) => (
                      <Tr key={index}>
                        <Td>{centre}</Td>
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

export default GetCenters;
