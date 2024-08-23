import React, { useState } from 'react';
import { Button, Flex, Box, FormControl, FormLabel, Input, Select, VStack, Heading, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import Layout from '../../Navbar/Layout';

const MilkEntry = () => {
  const [villageName, setVillageName] = useState('');
  const [villageId, setVillageId] = useState('');
  const [villagerId, setVillagerId] = useState('');
  const [agentName, setAgentName] = useState('');
  const [snf, setSnf] = useState('');
  const [fat, setFat] = useState('');
  const [clr, setClr] = useState('');
  const [quantity, setQuantity] = useState('');
  const [date, setDate] = useState('');
  const [canId, setCanId] = useState('');
  const [centreId, setCentreId] = useState('');
  const [milkType, setMilkType] = useState('');
  const [shiftType, setShiftType] = useState('');

  const handleSubmit = async () => {
    const milkEntryData = {
      village_name: villageName,
      village_id: villageId,
      villager_id: villagerId,
      agent_name: agentName,
      snf,
      fat,
      clr,
      quantity,
      date,
      can_id: canId,
      centre_id: centreId,
      milk_type: milkType,
      shift_type: shiftType,
    };

    try {
      const response = await axios.post('https://kernn.azurewebsites.net/api/create_milk_entry', milkEntryData);
      console.log('Milk entry created successfully:', response.data);
    } catch (error) {
      console.error('Error creating milk entry:', error);
    }
  };

  return (
    <Layout>
      <Flex justify="center" align="center" height="110vh" bg="white.50">
        <Box p={8} maxWidth="700px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
          <VStack spacing={4}>
            <Heading as="h3" size="lg" textAlign="center">Milk Entry</Heading>

            <SimpleGrid columns={2} spacing={4} width="full">
              <FormControl id="villageName">
                <FormLabel>Village Name</FormLabel>
                <Input type="text" value={villageName} onChange={(e) => setVillageName(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="villageId">
                <FormLabel>Village ID</FormLabel>
                <Input type="number" value={villageId} onChange={(e) => setVillageId(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="villagerId">
                <FormLabel>Villager ID</FormLabel>
                <Input type="number" value={villagerId} onChange={(e) => setVillagerId(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="agentName">
                <FormLabel>Agent Name</FormLabel>
                <Input type="text" value={agentName} onChange={(e) => setAgentName(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="snf">
                <FormLabel>SNF</FormLabel>
                <Input type="number" step="0.1" value={snf} onChange={(e) => setSnf(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="fat">
                <FormLabel>Fat</FormLabel>
                <Input type="number" step="0.1" value={fat} onChange={(e) => setFat(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="clr">
                <FormLabel>CLR</FormLabel>
                <Input type="number" step="0.01" value={clr} onChange={(e) => setClr(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="quantity">
                <FormLabel>Quantity</FormLabel>
                <Input type="number" step="0.1" value={quantity} onChange={(e) => setQuantity(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="date">
                <FormLabel>Date</FormLabel>
                <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="canId">
                <FormLabel>Can ID</FormLabel>
                <Input type="number" value={canId} onChange={(e) => setCanId(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="centreId">
                <FormLabel>Centre ID</FormLabel>
                <Input type="number" value={centreId} onChange={(e) => setCentreId(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="milkType">
                <FormLabel>Milk Type</FormLabel>
                <Select value={milkType} onChange={(e) => setMilkType(e.target.value)} fontWeight="bold">
                  <option value="cow">Cow</option>
                  <option value="buffalo">Buffalo</option>
                </Select>
              </FormControl>

              <FormControl id="shiftType">
                <FormLabel>Shift Type</FormLabel>
                <Select value={shiftType} onChange={(e) => setShiftType(e.target.value)} fontWeight="bold">
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </Select>
              </FormControl>
            </SimpleGrid>
            
            <div>
              <Button colorScheme="teal" variant="solid" onClick={handleSubmit} width="half" m="2">
                Submit
              </Button>
              <Button colorScheme="red" variant="solid" width="half">
                Cancel
              </Button>
            </div>
          </VStack>
        </Box>
      </Flex>
    </Layout>
  );
};

export default MilkEntry;
