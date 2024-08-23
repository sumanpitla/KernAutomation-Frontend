import React, { useState } from 'react';
import { Box, Button, Input, useToast, Select, Flex, VStack, Heading, FormControl, FormLabel } from '@chakra-ui/react';
import Layout from '../../Navbar/Layout';

const CreateCentre = () => {
  const [stateName, setStateName] = useState('');
  const [districtName, setDistrictName] = useState('');
  const [centreType, setCentreType] = useState('');
  const [centreName, setCentreName] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://kernn.azurewebsites.net/api/create_centre', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        state_name: stateName,
        district_name: districtName,
        centre_type: centreType,
        centre_name: centreName,
      }),
    });

    const data = await response.json();
    toast({
      title: data.message || 'Centre Created Successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Layout>
      <Flex justify="center" align="center" height="80vh" bg="white.50">
        <Box p={8} maxWidth="800px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
          <VStack spacing={4}>
            <Heading as="h3" size="lg" textAlign="center">Create New Centre</Heading>

            <FormControl id="stateName">
              <FormLabel>State Name</FormLabel>
              <Input value={stateName} onChange={(e) => setStateName(e.target.value)} placeholder="Enter state name" fontWeight="bold" />
            </FormControl>

            <FormControl id="districtName">
              <FormLabel>District Name</FormLabel>
              <Input value={districtName} onChange={(e) => setDistrictName(e.target.value)} placeholder="Enter district name" fontWeight="bold" />
            </FormControl>

            <FormControl id="centreType">
              <FormLabel>Centre Type</FormLabel>
              <Select value={centreType} onChange={(e) => setCentreType(e.target.value)} placeholder="Select centre type" fontWeight="bold">
                <option value="BMC">BMC</option>
                <option value="CC">CC</option>
              </Select>
            </FormControl>

            <FormControl id="centreName">
              <FormLabel>Centre Name</FormLabel>
              <Input value={centreName} onChange={(e) => setCentreName(e.target.value)} placeholder="Enter centre name" fontWeight="bold" />
            </FormControl>

            <Button type="submit" colorScheme="teal" variant="solid" width="full" mt={4} onClick={handleSubmit}>
              Create Centre
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Layout>
  );
};

export default CreateCentre;
