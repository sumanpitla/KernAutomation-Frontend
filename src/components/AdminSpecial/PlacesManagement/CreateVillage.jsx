import React, { useState } from 'react';
import { Box, Button, Input, useToast, Flex, VStack, Heading, FormControl, FormLabel } from '@chakra-ui/react';
import Layout from '../../Navbar/Layout';


const CreateDistrict = () => {
  const [Vilagename, setVilagename] = useState('');
  const [emp_id, setEmp_id] = useState('');
  const [centre_id, setCentre_id] = useState('');
  const [district_id, setDistrict_id] = useState('');
  const [state_id, setState_id] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://kernn.azurewebsites.net/api/create_district', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Vilagename,
        emp_id,
        centre_id,
        district_id,
        state_id,
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
      <Flex justify="center" align="center" height="110vh" bg="white.50">
        <Box p={8} maxWidth="800px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
          <VStack spacing={4}>
            <Heading as="h3" size="lg" textAlign="center">Create New Village</Heading>
            <FormControl id="villageName">
              <FormLabel>Village Name</FormLabel>
              <Input value={Vilagename} onChange={(e) => setVilagename(e.target.value)} placeholder="Enter village name" fontWeight="bold" />
            </FormControl>
            <FormControl id="empId">
              <FormLabel>Employee Id</FormLabel>
              <Input value={emp_id} onChange={(e) => setEmp_id(e.target.value)} placeholder="Enter employee id" fontWeight="bold" />
            </FormControl>
            <FormControl id="stateName">
              <FormLabel>State Name</FormLabel>
              <Input value={state_id} onChange={(e) => setState_id(e.target.value)} placeholder="Enter state name" fontWeight="bold" />
            </FormControl>
            <FormControl id="centreName">
              <FormLabel>Centre Id</FormLabel>
              <Input value={centre_id} onChange={(e) => setCentre_id(e.target.value)} placeholder="Enter centre id" fontWeight="bold" />
            </FormControl>
            <FormControl id="districtName">
              <FormLabel>District Id</FormLabel>
              <Input value={district_id} onChange={(e) => setDistrict_id(e.target.value)} placeholder="Enter district id" fontWeight="bold" />
            </FormControl>

            <Button type="submit" colorScheme="teal" variant="solid" width="full" mt={4} onClick={handleSubmit}>
              Create Village
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Layout>
  );
};

export default CreateDistrict;
