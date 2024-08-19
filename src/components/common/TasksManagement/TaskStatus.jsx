import React, { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const TaskStatus = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch tasks from the API (replace with actual API endpoint)
    fetch("/api/get_tasks", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  // Filter tasks based on search query
  const filteredTasks = tasks.filter((task) =>
    task.task_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Flex
      w="full"
      h="full"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgColor={useColorModeValue("gray.100", "gray.800")}
      p={8}
    >
      <Heading as="h1" size="xl" mb={8}>
        Task Status
      </Heading>
      <Flex mb={8}>
        <Button colorScheme="red" mr={4}>
          + New
        </Button>
        <Button variant="outline" mr={4}>
          Pending
        </Button>
        <Button variant="outline" mr={4}>
          Completed
        </Button>
        <Button variant="outline">Status</Button>
      </Flex>
      <InputGroup mb={8} w="full" maxW="md">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          focusBorderColor={useColorModeValue("red.500", "red.300")}
        />
      </InputGroup>

      {/* Task List */}
      {filteredTasks.length === 0 ? (
        <Text>No tasks found</Text>
      ) : (
        filteredTasks.map((task) => (
          <Box
            key={task.task_id}
            p={4}
            w="full"
            maxW="md"
            mb={4}
            borderRadius="md"
            bgColor={task.status === "completed" ? "red.300" : "green.300"}
          >
            <Text fontWeight="bold">{task.task_title}</Text>
            <Text>{task.task_description}</Text>
          </Box>
        ))
      )}
    </Flex>
  );
};

export default TaskStatus;
