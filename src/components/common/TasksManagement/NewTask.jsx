import React, { useState } from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';

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
    <Box>
      <h2>Add New Task</h2>
      <Input
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        mb={2}
      />
      <Input
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        mb={2}
      />
      <Input
        placeholder="Assign To"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        mb={2}
      />
      <Button colorScheme="blue" onClick={handleAddTask}>
        Add Task
      </Button>
      {successMessage && <Text mt={2} color="green.500">{successMessage}</Text>}
    </Box>
  );
};

export default NewTask;
