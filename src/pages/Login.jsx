// src/pages/Login.jsx
import React, { useState } from 'react';
import { Box, Heading, Input, Button, Flex, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import Layout from '../components/Navbar/Layout';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here, e.g. API call or authentication
    if (username === '' || password === '') {
      setError('Please fill in both username and password');
    } else {
      // Login successful, redirect to dashboard or other page
      console.log('Login successful!');
    }
  };

  return (
    <Layout>
    <Box>
      <Flex p={4} direction="column" align="center">
        <Heading>Login Page</Heading>
        <FormControl isInvalid={error}>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
          />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
          {error && <FormErrorMessage>{error}</FormErrorMessage>}
          <Button mt={4} onClick={handleSubmit}>Login</Button>
        </FormControl>
      </Flex>
    </Box>
    </Layout>
  );
};

export default Login;