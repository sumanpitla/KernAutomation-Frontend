import React, { useState } from 'react';
import { Button, Flex, Box, FormControl, FormLabel, Input, VStack, Heading, SimpleGrid, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import axios from 'axios';
import Layout from '../../Navbar/Layout';

const GetDistricts = () => {
  const [stateName, setStateName] = useState('');
  const [districts, setDistricts] = useState([]);

  const handleFetch = async () => {
    try {
      const response = await axios.post('https://kernn.azurewebsites.net/api/get_districts', {
        state_name: stateName,
      });
      setDistricts(response.data.districts);
      console.log('Data fetched successfully:', response.data.districts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Layout>
      <Flex justify="center" align="center" height="40vh" bg="white.50">
        <Box p={8} maxWidth="800px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
          <VStack spacing={4}>
            <Heading as="h3" size="lg" textAlign="center">Fetch Districts</Heading>

            <SimpleGrid columns={1} spacing={4} width="full">
              <FormControl id="stateName">
                <FormLabel>State Name</FormLabel>
                <Input type="text" placeholder="Enter State Name" value={stateName} onChange={(e) => setStateName(e.target.value)} fontWeight="bold" />
              </FormControl>
            </SimpleGrid>

            <Button colorScheme="teal" variant="solid" onClick={handleFetch} width="full" mt={4}>
              Get Districts
            </Button>

            {districts.length > 0 && (
              <Box mt={8} width="full">
                <Heading as="h4" size="md" textAlign="center" mb={4}>Districts</Heading>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>District Name</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {districts.map((district, index) => (
                      <Tr key={index}>
                        <Td>{district}</Td>
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

export default GetDistricts;
