import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'white'} minH={'40'} p={'16'}>
      <Stack direction={['column', 'row']}>
        <VStack align={'stretch'} w={'full'} px={'full'}>
          <Heading size={'md'} textAlign={['center', 'left']}>
            Subcribe to get update
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              borderRadius={'0 20px 20px 0'}
              variant={'ghost'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px ', 'solid white']}
          borderRight={['none', '1px ', 'solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>

          <Text>All Right Received</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="whiteAlpha">
            <a target={'_blank'} href="http://youtube.com">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme="whiteAlpha">
            <a target={'_blank'} href="http://Instagram.com">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme="whiteAlpha">
            <a target={'_blank'} href="http://GitHub.com">
              GitHub
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
