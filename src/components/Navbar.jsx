import { Box, Flex, Text, IconButton, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaHome, FaChartBar, FaBook, FaUsers, FaCog, FaSearch, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box bg="gray.100" w="250px" p={4} h="100vh" borderRight="1px solid #e2e8f0">
      <VStack align="start" spacing={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Lovable Labs Incorporated</Text>
        <Divider />
        <VStack align="start" spacing={2}>
          <HStack>
            <FaHome />
            <Text>Home</Text>
          </HStack>
          <HStack>
            <FaChartBar />
            <Text>Dashboards</Text>
          </HStack>
          <HStack>
            <FaBook />
            <Text>Notebooks</Text>
          </HStack>
          <HStack>
            <FaUsers />
            <Text>People</Text>
          </HStack>
          <HStack>
            <FaCog />
            <Text>Settings</Text>
          </HStack>
        </VStack>
        <Divider />
        <HStack mt="auto">
          <FaSearch />
          <Text>Search</Text>
        </HStack>
        <HStack>
          <FaUserCircle />
          <Text>Kristian</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Navbar;