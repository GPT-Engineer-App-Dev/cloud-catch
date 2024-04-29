import { Box, Flex, Text, Button, VStack, Heading, SimpleGrid, Icon } from '@chakra-ui/react';
import { FaRocket, FaGem, FaChartBar, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" minH="100vh" bg="brand.800" color="white">
        <Heading as="h1" size="2xl" mb="2">Welcome to GPT Engineer</Heading>
        <Text fontSize="xl" mb="4">Revolutionizing web development with AI</Text>
        <Button colorScheme="blue" size="lg">Get Started</Button>
      </Flex>
      <VStack spacing={10} p={10}>
        <Heading as="h2" size="xl">About Us</Heading>
        <Text>We leverage artificial intelligence to build and optimize web applications, making development faster and more efficient.</Text>
        <Heading as="h2" size="xl">Features</Heading>
        <SimpleGrid columns={3} spacing={5}>
          <Feature icon={FaRocket} title="Rapid Development" description="Speed up your development process with our AI-powered tools." />
          <Feature icon={FaGem} title="Premium Quality" description="Ensure high-quality outputs with advanced AI algorithms." />
          <Feature icon={FaChartBar} title="Analytics" description="Gain insights and analytics to improve your application performance." />
        </SimpleGrid>
        <Heading as="h2" size="xl">Pricing</Heading>
        <Text>Choose a plan that fits your needs with competitive pricing options.</Text>
        <Heading as="h2" size="xl">Contact Us</Heading>
        <Flex>
          <Icon as={FaPhone} w={5} h={5} mr={2} />
          <Text>+123 456 7890</Text>
        </Flex>
        <Flex>
          <Icon as={FaEnvelope} w={5} h={5} mr={2} />
          <Text>info@gptengineer.com</Text>
        </Flex>
        <Flex>
          <Icon as={FaMapMarkerAlt} w={5} h={5} mr={2} />
          <Text>123 AI Street, Tech City</Text>
        </Flex>
      </VStack>
    </Box>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <VStack>
      <Icon as={icon} w={10} h={10} />
      <Text fontWeight="bold">{title}</Text>
      <Text>{description}</Text>
    </VStack>
  );
};

export default Index;