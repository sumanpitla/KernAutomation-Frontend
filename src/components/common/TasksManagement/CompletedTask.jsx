import React, { useState, useEffect } from 'react';
import { Box, Text } from "@chakra-ui/react";

const CompletedTask = () => {
  const [completedTasks, setCompletedTasks] = useState([{"task_id":1,"task_title":"Task 1","task_description":"Task 1 Description","assigned_to":"User 1","status":"completed"}]);

  useEffect(() => {
    // Fetch completed tasks from the API
    fetch('/api/get_tasks', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
      .then(response => response.json())
      .then(data => setCompletedTasks(data.filter(task => task.status === 'completed')))
      .catch(error => console.error('Error fetching completed tasks:', error));
  }, []);

  return (
    <Box>
      <h2>Completed Tasks</h2>
      {completedTasks.length === 0 ? (
        <Text>No completed tasks found</Text>
      ) : (
        completedTasks.map(task => (
          <Box key={task.task_id} p={4} borderWidth={1} mb={2}>
            <Text>Title: {task.task_title}</Text>
            <Text>Description: {task.task_description}</Text>
            <Text>Assigned To: {task.assigned_to}</Text>
          </Box>
        ))
      )}
    </Box>
  );
};

export default CompletedTask;
