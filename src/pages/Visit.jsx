import React from 'react';
import { Box, Heading, Text, VStack, HStack, Icon, Button } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const VisitUs = () => {
  return (
    <Box p={8}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">Visit Us</Heading>
        <HStack spacing={3}>
          <Icon as={FaMapMarkerAlt} w={6} h={6} />
          <Text>123 Main Street, Anytown, USA</Text>
        </HStack>
        <HStack spacing={3}>
          <Icon as={FaPhone} w={6} h={6} />
          <Text>(123) 456-7890</Text>
        </HStack>
        <HStack spacing={3}>
          <Icon as={FaEnvelope} w={6} h={6} />
          <Text>contact@company.com</Text>
        </HStack>
        <Button colorScheme="teal" size="md">Get Directions</Button>
      </VStack>
    </Box>
  );
};

export default VisitUs;