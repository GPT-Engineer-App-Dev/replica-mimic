import { Box, Flex, Text, VStack, HStack, Divider, Button, SimpleGrid } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "19-Mar-2024", uv: 400 },
  { name: "26-Mar-2024", uv: 300 },
  { name: "2-Apr-2024", uv: 200 },
  { name: "9-Apr-2024", uv: 278 },
  { name: "16-Apr-2024", uv: 189 },
  { name: "23-Apr-2024", uv: 239 },
  { name: "30-Apr-2024", uv: 349 },
  { name: "7-May-2024", uv: 200 },
  { name: "14-May-2024", uv: 278 },
  { name: "21-May-2024", uv: 189 },
  { name: "28-May-2024", uv: 239 },
  { name: "4-Jun-2024", uv: 349 },
  { name: "11-Jun-2024", uv: 400 },
];

const Dashboard = () => {
  return (
    <Box p={4} w="full">
      <Flex justify="space-between" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">Homepage</Text>
        <HStack spacing={4}>
          <Button colorScheme="teal">Customize homepage</Button>
          <Button colorScheme="teal">Invite members</Button>
        </HStack>
      </Flex>
      <SimpleGrid columns={3} spacing={4} mb={4}>
        <Box bg="white" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>Your recently viewed insights</Text>
          <VStack align="start" spacing={2}>
            <Text>supabase_integrated_started count by pe...</Text>
            <Text>% of attempts completed</Text>
            <Text>supabase_integrated_started count & su...</Text>
            <Text>Projects with most errors</Text>
            <Text>Attempts created</Text>
          </VStack>
        </Box>
        <Box bg="white" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>Newly seen people</Text>
          <VStack align="start" spacing={2}>
            <Text>patrickbusamante61@gmail.com</Text>
            <Text>tretz@gmail.com</Text>
            <Text>sX7JT6jXW9yRGC5VgRYMGAJRWg2</Text>
            <Text>ercan32000@gmail.com</Text>
            <Text>289883491@qq.com</Text>
          </VStack>
        </Box>
        <Box bg="white" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>Recent recordings</Text>
          <VStack align="start" spacing={2}>
            <Text>admin@tmapp.live - 5m 33s</Text>
            <Text>kristian@lovable.dev - 6m 3s</Text>
            <Text>kristian@lovable.dev - 10m 36s</Text>
            <Text>kristian@lovable.dev - 13m 25s</Text>
            <Text>kristian@lovable.dev - 6m 38s</Text>
          </VStack>
        </Box>
      </SimpleGrid>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Main</Text>
      <HStack spacing={4} mb={4}>
        <Button colorScheme="teal">Last 90 days</Button>
        <Button colorScheme="teal">Add filter</Button>
      </HStack>
      <SimpleGrid columns={3} spacing={4}>
        <Box bg="white" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>Pageview count</Text>
          <LineChart width={300} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </Box>
        <Box bg="white" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}># of project created</Text>
          <BarChart width={300} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </Box>
        <Box bg="white" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>Signups (cummulative)</Text>
          <LineChart width={300} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;