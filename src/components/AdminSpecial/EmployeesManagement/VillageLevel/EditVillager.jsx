import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import axios from 'axios';

const EditVillager = () => {
  const [villagerData, setVillagerData] = useState({
    id: '',
    villager_name: '',
    village_id: '',
    centre_id: '',
    district_id: '',
    state_id: '',
  });
  const toast = useToast();

  const handleChange = (e) => {
    setVillagerData({ ...villagerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://kernn.azurewebsites.net/api/edit_villager', villagerData);
      toast({
        title: "Villager edited successfully.",
        description: response.data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error editing villager.",
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
        <FormLabel>Villager ID</FormLabel>
        <Input name="id" value={villagerData.id} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Villager Name</FormLabel>
        <Input name="villager_name" value={villagerData.villager_name} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Village ID</FormLabel>
        <Input name="village_id" value={villagerData.village_id} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Centre ID</FormLabel>
        <Input name="centre_id" value={villagerData.centre_id} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>District ID</FormLabel>
        <Input name="district_id" value={villagerData.district_id} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>State ID</FormLabel>
        <Input name="state_id" value={villagerData.state_id} onChange={handleChange} />
      </FormControl>
      <Button colorScheme="teal" onClick={handleSubmit}>Edit Villager</Button>
    </Box>
  );
};

export default EditVillager;
