// Header.js
import {
  Flex,
  Heading,
  HStack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      p={4}
      align="center"
      justify="space-between"
    >
      <Heading size="lg" color={useColorModeValue("gray.800", "white")} >
        KERNN Automations
      </Heading>
      <HStack spacing={4}>
        <Button colorScheme="teal" variant="outline" mr={4} as={RouterLink} to="/">
          Home</Button>
        <InputGroup size="sm">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input placeholder="Search..." />
        </InputGroup>
      </HStack>
    </Flex>
  );
};

export default Header;
