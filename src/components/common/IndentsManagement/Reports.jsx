import React, { useEffect, useState } from 'react';
import {
  Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading, Button,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
  useDisclosure
} from '@chakra-ui/react';
import axios from 'axios';
import Layout from '../../Navbar/Layout';


const Reports = () => {
  const [reportData, setReportData] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Fetch data from API
  useEffect(() => {
    axios.get('http://localhost:5000/api/reports')
      .then((response) => {
        setReportData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Handle View button click
  const handleViewClick = (report) => {
    setSelectedReport(report);
    onOpen();
  };

  return (
    <Layout>
    <Box p={8} maxWidth="1200px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white" mx="auto">
      <Heading as="h3" size="lg" textAlign="center" mb={6}>Report Data</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead bg="red.400">
            <Tr>
              <Th>Date</Th>
              <Th>Bmc/Cc</Th>
              <Th>By</Th>
              <Th>Code</Th>
              <Th>Name</Th>
              <Th>In Hand</Th>
              <Th>Consumption/Return</Th>
              <Th>Consumption/Return Qty</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reportData.map((report, index) => (
              <Tr key={index}>
                <Td>{report.date}</Td>
                <Td>{report.bmcCc}</Td>
                <Td>{report.consumptionDate}</Td>
                <Td>{report.materialCode}</Td>
                <Td>{report.materialName}</Td>
                <Td>{report.stockHand}</Td>
                <Td>{report.consumptionQuantity}</Td>
                <Td>
                  <Button colorScheme="teal" onClick={() => handleViewClick(report)}>View</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Modal for viewing details */}
      {selectedReport && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Report Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p><strong>Date:</strong> {selectedReport.date}</p>
              <p><strong>Bmc/Cc:</strong> {selectedReport.bmcCc}</p>
              <p><strong>By:</strong> {selectedReport.consumptionDate}</p>
              <p><strong>Material Code:</strong> {selectedReport.materialCode}</p>
              <p><strong>Material Name:</strong> {selectedReport.materialName}</p>
              <p><strong>Stock In Hand:</strong> {selectedReport.stockHand}</p>
              <p><strong>Consumption Quantity:</strong> {selectedReport.consumptionQuantity}</p>
              <p><strong>Reason:</strong> {selectedReport.reason}</p>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
    </Layout>
  );
};

export default Reports;
