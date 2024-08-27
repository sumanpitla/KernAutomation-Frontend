import React, { useState } from 'react';
import { Button, Flex, Box, FormControl, FormLabel, Input, Textarea, VStack, Heading, SimpleGrid, Select } from '@chakra-ui/react';
import axios from 'axios';
import Layout from '../../Navbar/Layout';

const ApproveDecline = () => {
  // State variables with proper camelCase naming
  const [date, setDate] = useState('');
  const [bmcCc, setBmcCc] = useState('');  // New state for Bmc/Cc
  const [by, setBy] = useState('');
  const [storeTo, setStoreTo] = useState('');
  const [materialCode, setMaterialCode] = useState('');
  const [materialName, setMaterialName] = useState('');
  const [stockHand, setStockHand] = useState('');
  const [requireQuantity, setRequireQuantity] = useState('');
  const [requiredDays, setRequiredDays] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async () => {
    console.log(date, bmcCc, by, storeTo, materialCode, materialName, stockHand, requireQuantity, requiredDays, reason);
    try {
      const response = await axios.post('http://localhost:5000/api/approve-decline', {
        Date: date,
        BmcCc: bmcCc,  // Changed from Time to Bmc/Cc
        By: by,
        StoreTo: storeTo,
        MaterialCode: materialCode,
        MaterialName: materialName,
        StockHand: stockHand,
        RequireQuantity: requireQuantity,
        RequiredDays: requiredDays,
        Reason: reason,
      });
      console.log('Request successfully processed:', response.data);
    } catch (error) {
      console.error('Error processing request:', error);
    }
  };

  return (
    <Layout>
      <Flex justify="center" align="center" height="115vh" bg="white.50">
        <Box p={8} maxWidth="800px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
          <VStack spacing={4}>
            <Heading as="h3" size="lg" textAlign="center">Approve/Decline</Heading>
            
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

              <FormControl id="by">
                <FormLabel>By</FormLabel>
                <Input type="text" placeholder="" value={by} onChange={(e) => setBy(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="storeTo">
                <FormLabel>Store To</FormLabel>
                <Input type="text" placeholder="" value={storeTo} onChange={(e) => setStoreTo(e.target.value)} fontWeight="bold" />
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
                <FormLabel>Require Quantity</FormLabel>
                <Input type="number" placeholder="" value={requireQuantity} onChange={(e) => setRequireQuantity(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="requiredDays">
                <FormLabel>Required Days</FormLabel>
                <Input type="number" placeholder="" value={requiredDays} onChange={(e) => setRequiredDays(e.target.value)} fontWeight="bold" />
              </FormControl>

              <FormControl id="reason">
                <FormLabel>Reason</FormLabel>
                <Textarea type="text" placeholder="" value={reason} onChange={(e) => setReason(e.target.value)} rows={9} w="500px" h="150px" fontWeight="bold" />
              </FormControl>
            </SimpleGrid>
            <div>
              <Button colorScheme="teal" variant="solid" onClick={handleSubmit} width="half" m="2">
                Approve
              </Button>
              <Button colorScheme="red" variant="solid" width="half">
                Decline
              </Button>
            </div>
          </VStack>
        </Box>
      </Flex>
    </Layout>
  );
};

export default ApproveDecline;
