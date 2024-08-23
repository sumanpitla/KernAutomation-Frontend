import React, { useState } from 'react';
import { Button, Flex, Box, FormControl, FormLabel, Input, Textarea, VStack, Heading, SimpleGrid, Select } from '@chakra-ui/react';
import axios from 'axios';
import Layout from '../../Navbar/Layout';

const Consumption = () => {
  // State variables with proper camelCase naming
  const [date, setDate] = useState('');
  const [bmcCc, setBmcCc] = useState('');  // New state for Bmc/Cc
  const [materialCode, setMaterialCode] = useState('');
  const [materialName, setMaterialName] = useState('');
  const [stockHand, setStockHand] = useState('');
  const [consumptionQuantity, setconsumptionQuantity] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async () => {
    console.log(date, bmcCc, materialCode, materialName, stockHand,consumptionQuantity, reason);
    try {
      const response = await axios.post('http://localhost:5000/api/consumption', {
        Date: date,
        BmcCc: bmcCc,  // Changed from Time to Bmc/Cc
        MaterialCode: materialCode,
        MaterialName: materialName,
        StockHand: stockHand,
        ConsumptionQuantity: consumptionQuantity,
        Reason: reason,
      });
      console.log('Request successfully processed:', response.data);
    } catch (error) {
      console.error('Error processing request:', error);
    }
  };

  return (
    <Layout>
      <Flex justify="center" align="center" height="80vh" bg="white.50">
        <Box p={8} maxWidth="800px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
          <VStack spacing={4}>
            <Heading as="h3" size="lg" textAlign="center">Consumption</Heading>
            
            {/* Form Fields with Chakra UI components arranged in a 3-column layout */}
            <SimpleGrid columns={3} spacing={4} width="full">
              <FormControl id="date">
                <FormLabel>Date</FormLabel>
                <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="bmcCc">
                <FormLabel>Bmc/Cc</FormLabel>
                <Select placeholder="Select option" value={bmcCc} onChange={(e) => setBmcCc(e.target.value)} fontWeight="bold">
                  <option value="Bmc">Bmc</option>
                  <option value="Cc">Cc</option>
                </Select>
              </FormControl>

              <FormControl id="materialCode">
                <FormLabel>Material Code</FormLabel>
                <Input type="text" placeholder="" value={materialCode} onChange={(e) => setMaterialCode(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="materialName">
                <FormLabel>Material Name</FormLabel>
                <Input type="text" placeholder="" value={materialName} onChange={(e) => setMaterialName(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="stockHand">
                <FormLabel>Stock Hand</FormLabel>
                <Input type="number" placeholder="" value={stockHand} onChange={(e) => setStockHand(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="requireQuantity">
                <FormLabel>Consumption Quantity</FormLabel>
                <Input type="number" placeholder="" value={consumptionQuantity} onChange={(e) => setconsumptionQuantity(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="reason">
                <FormLabel>Reason</FormLabel>
                <Textarea type="text" placeholder="" value={reason} onChange={(e) => setReason(e.target.value)} rows={9} w="500px" h="150px" fontWeight="bold" />
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

export default Consumption;
