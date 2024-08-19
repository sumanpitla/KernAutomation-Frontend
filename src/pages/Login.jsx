import React, { useState, useContext } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
} from '@chakra-ui/react';
import Layout from '../components/Navbar/Layout';
import { UserContext } from '../components/context/UserContext'; // Import UserContext

const Login = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1); // Step 1: Login, Step 2: Verify OTP
  const [successMessage, setSuccessMessage] = useState('');
  const { setUserData } = useContext(UserContext); // Use setUserData from UserContext

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null);
    if (email === '') {
      setError('Please enter your email');
      return;
    }

    try {
      const response = await fetch('https://kernn.azurewebsites.net/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('OTP sent successfully!');
        setStep(2);
      } else {
        setError(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    setError(null);
    if (otp === '') {
      setError('Please enter the OTP');
      return;
    }

    try {
      const response = await fetch('https://kernn.azurewebsites.net/api/verify_otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();

      if (response.ok) {
        setUserData({
          accessToken: data.accesstoken,
          refreshToken: data.refresh_token,
          username: data.username,
          role: data.role,
          userId: data.user_id,
        }); // Store user data in context
        setSuccessMessage('OTP Verified Successfully!');
      } else {
        setError(data.message || 'OTP verification failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Layout>
      <Flex align="center" justify="center" height="80vh" bg="gray.100">
        <Box
          p={6}
          maxWidth="500px"
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
          bg="white"
        >
          <Heading as="h2" size="lg" textAlign="center" mb={6} color="teal.500">
            {step === 1 ? 'Login' : 'Verify OTP'}
          </Heading>

          {successMessage && (
            <Text mb={4} color="green.500" textAlign="center">
              {successMessage}
            </Text>
          )}

          {step === 1 ? (
            <form onSubmit={handleLogin}>
              <FormControl isInvalid={!!error} mb={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  focusBorderColor="teal.400"
                />
                {error && <FormErrorMessage>{error}</FormErrorMessage>}
              </FormControl>

              <Button
                type="submit"
                colorScheme="teal"
                width="full"
                mt={4}
                isLoading={false}
              >
                Send OTP
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp}>
              <FormControl isInvalid={!!error} mb={4}>
                <FormLabel>OTP</FormLabel>
                <Input
                  type="text"
                  value={otp}
                  onChange={(event) => setOtp(event.target.value)}
                  placeholder="Enter the OTP sent to your email"
                  focusBorderColor="teal.400"
                />
                {error && <FormErrorMessage>{error}</FormErrorMessage>}
              </FormControl>

              <Button
                type="submit"
                colorScheme="teal"
                width="full"
                mt={4}
                isLoading={false}
              >
                Verify OTP
              </Button>
            </form>
          )}
        </Box>
      </Flex>
    </Layout>
  );
};

export default Login;
