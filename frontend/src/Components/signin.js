import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Box,
    Heading,
    VStack,
    Text,
    Link,
  } from '@chakra-ui/react'

  
  export const Signin = () => {
    
    return (
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#f0f4f8" // Light background color
        color="black.800" // Dark text color for contrast
        px={6}
      >
        <Box
          bg="white" // White background for the form
          p={12}
          borderRadius="md"
          boxShadow="md"
          maxWidth="500px"
          width="full"
        >
          <VStack spacing={6}>
            <Heading as="h2" size="xl" color="pink.600">
              Sign In
            </Heading>
  
            <FormControl id="email">
              <FormLabel fontSize="lg" color="black.700">
                Email address
              </FormLabel>
              <Input
                type="email"
                size="lg"
                bg="black.50" // Light gray input background
                borderColor="pink.400"
                focusBorderColor="pink.500" onClick={''}
                _hover={{ borderColor: 'pink.500' }}
                placeholder="Enter your email"
              />
              <FormHelperText fontSize="md" color="black.600">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
  
            <FormControl id="password">
              <FormLabel fontSize="lg" color="black.700">
                Password
              </FormLabel>
              <Input
                type="password"
                size="lg"
                bg="black.50" // Light gray input background
                borderColor="pink.400"
                focusBorderColor="pink.500"
                _hover={{ borderColor: 'pink.500' }}
                placeholder="Enter your password"
              />
              <FormHelperText fontSize="md" color="black.600">
                Enter your password.
              </FormHelperText>
            </FormControl>
  
            <Box width="full" textAlign="right">
              <Link color="pink.600" _hover={{ color: 'pink.700' }}>
                Forgot Password?
              </Link>
            </Box>
  
            <Button
              colorScheme="pink"
              bg="pink.500"
              _hover={{ bg: 'pink.600' }}
              size="lg"
              width="full"
            >
              Sign In
            </Button>
  
            <Text color="black.700">
              Don't have an account?{' '}
              <Link color="pink.600" _hover={{ color: 'pink.700' }}>
                Sign Up
              </Link>
            </Text>
          </VStack>
        </Box>
      </Box>
    )
  }