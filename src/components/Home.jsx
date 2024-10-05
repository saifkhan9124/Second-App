import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: 4,
  fontSize: { base: 'xl', md: '4xl' },
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container minH={'100vh'} maxW={'container.xl'} p="16">
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid '}
          m={'auto'} // Changed to 'auto' for centering
        >
          Service
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']} // Responsive stacking for column on small screens, row on larger
        >
          <Image
            src={img5}
            filter={'hue-rotate(-130deg)'}
            h={['40', '400']} // Responsive height for the image
            w={['80%', '400px']} // Responsive width adjustment for better mobile view
            objectFit="contain"
          />

          <Text
            letterSpacing={'widest'}
            lineHeight={['130%', '190%']}
            p={['4', '16']}
            textAlign={'center'} // Center aligned text for better readability
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus tenetur aspernatur tempora, cupiditate illum dolor
            sapiente, officia eum eveniet mollitia ipsam magnam inventore fugit
            quisquam distinctio blanditiis et vitae aliquid, rem exercitationem
            doloremque. Dolorem eaque vero porro, facilis neque architecto rem
            iure cupiditate fugiat, ut autem molestiae minus non saepe illo
            temporibus hic sed. Nihil tenetur praesentium eum ea deleniti
            mollitia dicta, fugiat doloribus obcaecati beatae, ut voluptatibus
            reiciendis nemo porro delectus maiores ipsum architecto temporibus
            cumque unde molestiae! Reiciendis incidunt aliquam eum cumque
            adipisci beatae porro, modi officiis quidem quos aperiam eveniet
            repudiandae nihil necessitatibus sint? Odit, optio animi!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box w="full" h={{ base: '60vh', md: '100vh' }}>
          <Image src={img1} w="full" h="full" objectFit="cover" />
          <Heading
            bg="blackAlpha.600"
            color="white"
            {...headingOption}
            w="full"
            textAlign="center"
          >
            Watch The Future
          </Heading>
        </Box>
        <Box w="full" h={{ base: '60vh', md: '100vh' }}>
          <Image src={img2} w={'full'} h={'full'} objectFit={'cover'} />
          <Heading
            bg="whiteAlpha.600"
            color="black"
            {...headingOption}
            w="full"
            textAlign="center"
          >
            Watch The Future
          </Heading>
        </Box>
        <Box w="full" h={{ base: '60vh', md: '100vh' }}>
          <Image src={img3} w="full" h="full" objectFit="cover" />
          <Heading
            bg="blackAlpha.600"
            color="white"
            {...headingOption}
            w="full"
            textAlign="center"
          >
            Watch The Future
          </Heading>
        </Box>
        <Box w="full" h={{ base: '60vh', md: '100vh' }}>
          <Image src={img4} w="full" h="full" objectFit="cover" />
          <Heading
            bg="blackAlpha.600"
            color="white"
            {...headingOption}
            w="full"
            textAlign="center"
          >
            Watch The Future
          </Heading>
        </Box>
      </Carousel>
    </>
  );
};

export default Home;
