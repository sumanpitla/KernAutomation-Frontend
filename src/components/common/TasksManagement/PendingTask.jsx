import React, { useState, useEffect } from 'react';
import { Box, Text, Button } from "@chakra-ui/react";

const PendingTask = () => {
  const [pendingTasks, setPendingTasks] = useState([]);

  useEffect(() => {
    // Fetch pending tasks from the API
    fetch('/api/get_pending_tasks', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
      .then(response => response.json())
      .then(data => setPendingTasks(data))
      .catch(error => console.error('Error fetching pending tasks:', error));
  }, []);

  return (
    <Box>
      <h2>Pending Tasks</h2>
      {pendingTasks.length === 0 ? (
        <Text>No pending tasks found</Text>
      ) : (
        pendingTasks.map(task => (
          <Box key={task.task_id} p={4} borderWidth={1} mb={2}>
            <Text>Title: {task.task_title}</Text>
            <Text>Description: {task.task_description}</Text>
            <Text>Assigned To: {task.assigned_to}</Text>
            <Button colorScheme="blue">Update Task</Button>
          </Box>
        ))
      )}
    </Box>
  );
};

export default PendingTask;
