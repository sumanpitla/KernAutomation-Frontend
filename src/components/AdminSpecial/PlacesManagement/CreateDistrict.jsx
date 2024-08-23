import React, { useState } from 'react';
import { Box, Button, Input, useToast, Flex, VStack, Heading, FormControl, FormLabel } from '@chakra-ui/react';
import Layout from '../../Navbar/Layout';

const CreateDistrict = () => {
  const [stateName, setStateName] = useState('');
  const [districtName, setDistrictName] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://kernn.azurewebsites.net/api/create_district', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        state_name: stateName,
        district_name: districtName,
      }),
    });

    const data = await response.json();
    toast({
      title: data.message || 'District Created Successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Layout>
      <Flex justify="center" align="center" height="50vh" bg="white.50">
        <Box p={8} maxWidth="800px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
          <VStack spacing={4}>
            <Heading as="h3" size="lg" textAlign="center">Create New District</Heading>

            <FormControl id="stateName">
              <FormLabel>State Name</FormLabel>
              <Input value={stateName} onChange={(e) => setStateName(e.target.value)} placeholder="Enter state name" fontWeight="bold" />
            </FormControl>

            <FormControl id="districtName">
              <FormLabel>District Name</FormLabel>
              <Input value={districtName} onChange={(e) => setDistrictName(e.target.value)} placeholder="Enter district name" fontWeight="bold" />
            </FormControl>

            <Button type="submit" colorScheme="teal" variant="solid" width="full" mt={4} onClick={handleSubmit}>
              Create District
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Layout>
  );
};

export default CreateDistrict;
