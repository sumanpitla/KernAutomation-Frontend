// src/components/common/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, Flex } from '@chakra-ui/react';

const Layout = ({ children }) => (
  <Flex direction="column" minH="100vh">
    <Header />
    <Box flex="1" p={4}>
      {children}
    </Box>
    <Footer />
  </Flex>
);

export default Layout;
