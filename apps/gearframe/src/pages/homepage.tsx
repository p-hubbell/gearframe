import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Container,
  Heading,
  Link,
  Text,
  VStack,
  Image,
  Wrap,
  WrapItem,
  Box,
} from '@chakra-ui/react';
import gearframeAnimatedLogo from '../assets/videos/animated-logo-transparent-background-square.webm';
import directionImg1 from '../assets/images/jzYn95NKwoUbbc1ti249LC1000x1008.png';
import directionImg2 from '../assets/images/j7pX6uOEArjcDaYF5psmXk1200x1202.png';
import directionImg3 from '../assets/images/kmKUci9ZACocXV71nY8RuF1184x1200.png';
import directionImg4 from '../assets/images/f5IjSrkFoWYd88oAxZEx3R1198x1204.png';

const ImageWrap = (...images: string[]) => {
  return (
    <Wrap spacing="16px" justify="center">
      {images.map((img) => (
        <WrapItem>
          <Image boxSize="200px" src={img} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export function Homepage() {
  return (
    <Box marginY="32px">
      <VStack spacing="32px">
        <VStack spacing="16px">
          <Heading as="h1">gearframe - stay tuned...</Heading>
          <video
            width="250px"
            height="250px"
            src={gearframeAnimatedLogo}
            autoPlay
            loop
            muted
          >
            <source src={gearframeAnimatedLogo} type="video/quicktime" />
          </video>
          <Container>
            <Text fontSize="lg">
              an evolving playground for implementing project and design ideas
            </Text>
          </Container>
          <Link href="https://github.com/p-hubbell/gearframe" isExternal>
            codebase on github <ExternalLinkIcon mx="2px" />
          </Link>
        </VStack>
        <VStack spacing="16px">
          <Heading as="h2">design direction</Heading>
          {ImageWrap(
            directionImg1,
            directionImg2,
            directionImg3,
            directionImg4
          )}
        </VStack>
      </VStack>
    </Box>
  );
}

export default Homepage;
