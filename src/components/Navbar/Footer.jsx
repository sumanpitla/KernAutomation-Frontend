// Footer.jsx
import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const Footer = () => (
  <Box bg="teal.500" py={4} color="white">
    <Flex justify="center" align="center">
      <Text fontSize="sm">© 2024 Milk Procurement System</Text>
    </Flex>
  </Box>
);

export default Footer;
