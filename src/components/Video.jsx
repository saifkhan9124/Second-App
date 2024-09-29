import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const Video = () => {
  const videosArr = [
    {
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Sample Video 1',
    },
    {
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Sample Video 2',
    },
    {
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Sample Video 3',
    },
    {
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Sample Video 4',
    },
    {
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Sample Video 5',
    },
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{ width: '100%' }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>{videoSrc.title}</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            autem natus, qui voluptatum, eos ratione officia dolores deleniti
            dolorum in esse vitae consequuntur perspiciatis harum vel tenetur
            distinctio totam optio! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Architecto autem natus.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            colorScheme="purple"
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Video;
