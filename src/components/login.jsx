import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['ful', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcom Back</Heading>
          <Input
            placeholder={'Email'}
            type={'type'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />

          <Button variant={'Link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>forget Password</Link>
          </Button>

          <Button colorScheme={'purple'} type={'submit'}>
            Log In
          </Button>

          <Text textAlign={'right'}>
            New User?{' '}
            <Button
              variant={'link'}
              colorScheme="purple"
              alignSelf={'flex-end'}
            >
              <Link to={'/singup'}> Sing Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
