import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import axios from 'axios';

const CreateVillage = () => {
  const [villageData, setVillageData] = useState({
    village_name: '',
    emp_id: '',
    centre_id: '',
    district_id: '',
    state_id: '',
  });
  const toast = useToast();

  const handleChange = (e) => {
    setVillageData({ ...villageData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://kernn.azurewebsites.net/api/create_village', villageData);
      toast({
        title: "Village created successfully.",
        description: response.data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error creating village.",
        description: error.response?.data?.message || error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <FormControl mb={4}>
        <FormLabel>Village Name</FormLabel>
        <Input name="village_name" value={villageData.village_name} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Employee ID</FormLabel>
        <Input name="emp_id" value={villageData.emp_id} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Centre ID</FormLabel>
        <Input name="centre_id" value={villageData.centre_id} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>District ID</FormLabel>
        <Input name="district_id" value={villageData.district_id} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>State ID</FormLabel>
        <Input name="state_id" value={villageData.state_id} onChange={handleChange} />
      </FormControl>
      <Button colorScheme="teal" onClick={handleSubmit}>Create Village</Button>
    </Box>
  );
};

export default CreateVillage;
