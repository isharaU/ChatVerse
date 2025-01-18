import { Box, Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

function Homepage() {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        color={"teal.500"} // Matching teal color
      >
        <Text
          fontSize="5xl"
          fontFamily="Work sans"
          textAlign="center"
          fontWeight="bold"
          bgGradient="linear(to-r, teal.400, blue.500)" // Matching gradient
          bgClip="text"
          letterSpacing="widest"
          mb={4}
        >
          chatVerse
        </Text>
      </Box>
      <Box bg="white" p={8} w="100%" borderRadius="lg" borderWidth="1px">
        <Demo />
      </Box>
    </Container>
  );
}

// Define the Demo component outside of the Homepage component
const Demo = () => {
  return (
    <Tabs variant="soft-rounded" colorScheme="teal" isFitted>
      <TabList mb="1em" bg="gray.100" borderRadius="md" p="2">
        <Tab
          _selected={{ color: "white", bg: "teal.500" }} // Matching selected teal color
          _hover={{ bg: "teal.300" }} // Matching hover teal color
          fontWeight="bold"
        >
          Log in
        </Tab>
        <Tab
          _selected={{ color: "white", bg: "teal.500" }} // Matching selected blue color
          _hover={{ bg: "teal.300" }} // Matching hover blue color
          fontWeight="bold"
        >
          Sign up
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel bg="gray.50" p="5" borderRadius="md" boxShadow="md">
          <Login />
        </TabPanel>
        <TabPanel bg="gray.50" p="5" borderRadius="md" boxShadow="md">
          <Signup />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Homepage;
