import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Tasks = () => {
  return (
    <div>
      <h1>Task Management</h1>
      <Box>
        <Button colorScheme="orange" mr={3} as={RouterLink} to="/admin/tasks/new">ADD NEW</Button>
        <Button colorScheme="blue" mr={3} as={RouterLink} to="/admin/tasks/completed">COMPLETED</Button>
        <Button colorScheme="red" mr={3} as={RouterLink} to="/admin/tasks/pending">PENDING</Button>
        <Button colorScheme="green" mr={3} as={RouterLink} to="/admin/tasks/status">STATUS</Button>
      </Box>
    </div>
  );
};

export default Tasks;
