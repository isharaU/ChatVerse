import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => setShow(!show);

  const submitHandler = () => {};

  return (
    <Box 
      maxW="lg" 
      borderWidth={1} 
      borderRadius="lg" 
      p={6} 
      m="auto" 
      bg="gray.50"
      boxShadow="xl"
    >
      <Heading as="h2" size="lg" textAlign="center" mb={6} color="teal.500">
        Log in
      </Heading>

      <VStack spacing={4} align="stretch">
        <FormControl id="email" isRequired>
          <FormLabel color="teal.600">Email</FormLabel>
          <Input
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            focusBorderColor="teal.400"
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel color="teal.600">Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? 'text' : 'password'}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              focusBorderColor="teal.400"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick} colorScheme="teal">
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="teal"
          variant="solid"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
          _hover={{ bg: "teal.600" }}
        >
          Log in 
        </Button>

        <Button
          colorScheme="blue"
          variant="solid"
          width="100%"
          style={{ marginTop: 0 }}
          onClick={() => {
            setEmail("guest@example.com");
            setPassword("guest");
          }}
          bg="blue.600" // Default background color
          _hover={{ bg: "blue.300" }}
        >
          Log as a Guest
      </Button>


      </VStack>
    </Box>
  );
};

export default Login;
