// Header.jsx
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
      bg={useColorModeValue("teal.400", "gray.800")}
      p={4}
      align="center"
      justify="space-between"
      boxShadow="md"
    >
      <Heading size="lg" color={useColorModeValue("white", "teal.200")}>
        KERNN Automations
      </Heading>
      <HStack spacing={4}>
        <Button colorScheme="teal" variant="solid" as={RouterLink} to="/">
          Home
        </Button>
        <InputGroup size="md" maxW="300px">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            placeholder="Search..."
            focusBorderColor="teal.400"
            _placeholder={{ color: "gray.500" }}
          />
        </InputGroup>
      </HStack>
    </Flex>
  );
};

export default Header;
