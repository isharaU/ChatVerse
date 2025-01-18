import { Box, Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

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
      >
        <Text fontSize="4xl" fontFamily="Work sans" align="center">
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
          _selected={{ color: "white", bg: "teal.500" }}
          _hover={{ bg: "teal.300" }}
          fontWeight="bold"
        >
          Log in
        </Tab>
        <Tab
          _selected={{ color: "white", bg: "blue.500" }}
          _hover={{ bg: "blue.300" }}
          fontWeight="bold"
        >
          Sign up
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel bg="gray.50" p="5" borderRadius="md" boxShadow="md">
          <p style={{ color: "teal.600", fontSize: "1.2em" }}>Welcome back! Please log in.</p>
        </TabPanel>
        <TabPanel bg="gray.50" p="5" borderRadius="md" boxShadow="md">
          <p style={{ color: "blue.600", fontSize: "1.2em" }}>Create your account here!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Homepage;
