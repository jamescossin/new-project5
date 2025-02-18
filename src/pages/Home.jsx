import React from 'react';
import { Box, Flex, Heading, Image, Text, Button, VStack, HStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box as="main" bg="gray.50" minH="100vh">
      <Flex
        as="header"
        bg="blue.800"
        color="white"
        py={4}
        px={8}
        justify="space-between"
        align="center"
      >
        <Heading as="h1" size="lg">
          Trojan Diner & Sports Bar
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white" _hover={{ color: 'blue.200' }}>
            Home
          </Link>
          <Link as={RouterLink} to="/menu" color="white" _hover={{ color: 'blue.200' }}>
            Menu
          </Link>
          <Link as={RouterLink} to="/about" color="white" _hover={{ color: 'blue.200' }}>
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" color="white" _hover={{ color: 'blue.200' }}>
            Contact
          </Link>
        </HStack>
      </Flex>

      <Flex
        as="section"
        direction={['column', 'column', 'row']}
        align="center"
        justify="center"
        py={12}
        px={6}
        bgImage="url('http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/family-dining')"
        bgSize="cover"
        bgPos="center"
        color="white"
        textAlign="center"
      >
        <VStack spacing={6} maxW="600px" bg="rgba(0, 0, 0, 0.7)" p={8} borderRadius="md">
          <Heading as="h2" size="xl">
            Welcome to Trojan Diner & Sports Bar
          </Heading>
          <Text fontSize="lg">
            Enjoy a wide variety of delicious meals at our family-friendly restaurant. Perfect for
            any occasion.
          </Text>
          <Button as={RouterLink} to="/menu" colorScheme="blue" size="lg">
            Explore Our Menu
          </Button>
        </VStack>
      </Flex>

      <Box as="section" py={12} px={6}>
        <Heading as="h3" size="lg" textAlign="center" mb={8}>
          Featured Dishes
        </Heading>
        <Flex wrap="wrap" justify="center" spacing={6}>
          <Box w="300px" p={4} bg="white" shadow="md" borderRadius="md" m={3}>
            <Image
              src="http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/burger"
              alt="Delicious Burger"
              borderRadius="md"
            />
            <Text mt={2} fontWeight="bold">
              Delicious Burger
            </Text>
            <Text>Juicy beef patty with all the fixings.</Text>
          </Box>
          <Box w="300px" p={4} bg="white" shadow="md" borderRadius="md" m={3}>
            <Image
              src="http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/pizza"
              alt="Cheesy Pizza"
              borderRadius="md"
            />
            <Text mt={2} fontWeight="bold">
              Cheesy Pizza
            </Text>
            <Text>Hot and cheesy with fresh toppings.</Text>
          </Box>
          <Box w="300px" p={4} bg="white" shadow="md" borderRadius="md" m={3}>
            <Image
              src="http://stock.calucid.com/fetch/calucid/trojan-diner-sports-bar/salad"
              alt="Healthy Salad"
              borderRadius="md"
            />
            <Text mt={2} fontWeight="bold">
              Healthy Salad
            </Text>
            <Text>Fresh greens and veggies for a healthy meal.</Text>
          </Box>
        </Flex>
      </Box>

      <Flex
        as="footer"
        bg="blue.800"
        color="white"
        py={4}
        px={8}
        justify="center"
        align="center"
      >
        <Text>&copy; {new Date().getFullYear()} Trojan Diner & Sports Bar. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Home;