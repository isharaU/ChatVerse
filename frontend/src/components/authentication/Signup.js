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

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();

  const handleClick = () => setShow(!show);

  const postDetails = (pics) => {};

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
        Sign Up
      </Heading>

      <VStack spacing={4} align="stretch">
        <FormControl id="first-name" isRequired>
          <FormLabel color="teal.600">Username</FormLabel>
          <Input
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            focusBorderColor="teal.400"
          />
        </FormControl>

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

        <FormControl id="Confirm password" isRequired>
          <FormLabel color="teal.600">Confirm Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? 'text' : 'password'}
              placeholder="Confirm Your Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              focusBorderColor="teal.400"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick} colorScheme="teal">
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="pic">
          <FormLabel color="teal.600">Upload Your Picture</FormLabel>
          <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
            focusBorderColor="teal.400"
          />
        </FormControl>

        <Button
          colorScheme="teal"
          variant="solid"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
          _hover={{ bg: "teal.600" }}
        >
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
};

export default Signup;
