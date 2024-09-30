import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import React from 'react';

const Upload = () => {
  return (
    <Container h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'100vmax'} />

        <form>
          <HStack>
            <Input requried type={'file'} />
            <Button colorScheme="purple" type={'submit'}>
              upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
