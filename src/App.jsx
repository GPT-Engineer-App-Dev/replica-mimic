import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Flex>
      <Navbar />
      <Box flex="1" p={4}>
        <Dashboard />
      </Box>
    </Flex>
  );
}

export default App;