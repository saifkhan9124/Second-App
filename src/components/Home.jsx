import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import { transform } from 'framer-motion';

const headingOption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransfrom: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container minH={'100vh'} maxW={'Container.xl'} p="16">
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={' fit-content'}
          borderBottom={'2px solid '}
          m={'Auto'}
        >
          Service
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40', '400']} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
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
        <Box w={'full'} h={'100vh'}>
          <Image src={img1} />
          <Heading bg={'blackAlpha.600'} color={'white'} {...headingOption}>
            Watch The Fature
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={img2} />
          <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOption}>
            Watch The Fature
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={img3} />
          <Heading bg={'blackAlpha.600'} color={'white'} {...headingOption}>
            Watch The Fature
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={img4} />
          <Heading bg={'blackAlpha.600'} color={'white'} {...headingOption}>
            Watch The Fature
          </Heading>
        </Box>
      </Carousel>
      ;
    </>
  );
};

export default Home;
