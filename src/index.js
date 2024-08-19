import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { UserProvider } from './components/context/UserContext'; // Import UserProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
     <UserProvider> {/* Wrap the application */}
      <App />
    </UserProvider>

  </ChakraProvider>
);
