import React, { useState } from 'react';
import { Box, Input, Button,FormControl,FormLabel,Heading,Flex,VStack} from '@chakra-ui/react';
import Layout from '../../Navbar/Layout';
import Sidebar from '../../../pages/roles/Admin/Sidebar';

const NewTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddTask = async () => {
    try {
      const response = await fetch('/api/add_task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
        body: JSON.stringify({
          task_title: taskTitle,
          task_description: taskDescription,
          assigned_to: assignedTo,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Task added successfully!');
      } else {
        console.error('Failed to add task:', data.message);
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <Layout>
        <Flex>
        <Sidebar />
        <Flex justify="center" align="center" height="70vh" width="100%" bg="white.50">
            <div>
            <Heading align="center" mb={8} >Tasks Management</Heading>
            <Box p={8} maxWidth="600px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white" align="center">
            <VStack spacing={4}>
                <Heading as="h3" size="lg" textAlign="center">ADD TASK</Heading>
                
                <FormControl id="taskTitle">
                    <FormLabel>Task Title</FormLabel>
                    <Input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="Enter task title" />
                </FormControl>

                <FormControl id="taskDescription">
                    <FormLabel>Task Description</FormLabel>
                    <Input value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder="Enter task description" />
                </FormControl>

                <FormControl id="assignedTo">
                    <FormLabel>Assigned To</FormLabel>
                    <Input value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} placeholder="Enter assignee" />
                </FormControl>
                <Button type="submit" mt={4} colorScheme="teal" width="half" onClick={handleAddTask}>
                    Add Task
                </Button>
            </VStack>
            </Box>
            </div>
        </Flex>
        </Flex>
      </Layout>
    );
  };

 export default NewTask;