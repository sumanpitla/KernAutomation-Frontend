import React, { useState } from 'react';
import { Box, Button, Input, useToast, FormControl, FormLabel, VStack, Heading, Flex } from '@chakra-ui/react';
import Layout from '../../../Navbar/Layout';
import Sidebar from '../../../../pages/roles/Admin/Sidebar';

const CreateVillager = () => {
  const [villagerData, setVillagerData] = useState({
    villager_name: '',
    village_id: '',
    centre_id: '',
    district_id: ''
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVillagerData({
      ...villagerData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Your API call logic here
      toast({
        title: "Villager created.",
        description: "Villager has been created successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error creating villager.",
        description: error.response?.data?.message || error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Layout>
    <Flex>
        <Sidebar />
      <Flex justify="center" align="center" height="100vh" width="100%" bg="white.50">
        <div>
        <Heading align="center" mb={8} >Employees Management</Heading>
        <Box p={8} width="450px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white" align="center">
          <VStack spacing={4}>
            <Heading as="h3" size="lg" textAlign="center">Create Villager</Heading>
            <FormControl mb={4}>
              <FormLabel>Villager Name</FormLabel>
              <Input name="villager_name" value={villagerData.villager_name} onChange={handleChange} placeholder="Enter village name" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Village ID</FormLabel>
              <Input name="village_id" value={villagerData.village_id} onChange={handleChange}placeholder="Enter village id" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Centre ID</FormLabel>
              <Input name="centre_id" value={villagerData.centre_id} onChange={handleChange} placeholder="Enter centre ID"/>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>District ID</FormLabel>
              <Input name="district_id" value={villagerData.district_id} onChange={handleChange} placeholder="Enter District ID"/>
            </FormControl>
            <Button type="submit" mt={4} colorScheme="teal" width="half" onClick={handleSubmit}>
              Create Villager
            </Button>
          </VStack>
        </Box>
        </div>
      </Flex>
    </Flex>
    </Layout>
  );
};

export default CreateVillager;