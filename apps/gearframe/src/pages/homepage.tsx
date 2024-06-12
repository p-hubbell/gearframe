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

export function Homepage() {
  return (
    <Box marginY="32px">
      <VStack spacing="32px">
        <VStack spacing="16px">
          <Heading as="h1">gearframe - stay tuned...</Heading>
          <Image
            boxSize="250px"
            src="https://media.discordapp.net/attachments/1229838518822506546/1250446384516042893/5999eb6c-5a9b-46a9-98ce-dc923c3d2c65.jpg?ex=666af872&is=6669a6f2&hm=671a2ee5cba47de7485a361499124dc379c3858eed8ae2f3f839bb629bcd08b9&=&format=webp&width=1144&height=1144"
          />
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
          <Wrap spacing="16px" justify="center">
            <WrapItem>
              <Image
                boxSize="200px"
                src="https://media.discordapp.net/attachments/1229838518822506546/1250445239299215463/jzYn95NKwoUbbc1ti249LC1000x1008.png?ex=666af761&is=6669a5e1&hm=2a22ad1c1c17e363e623ce7fcfa5bf8c12b103a2d364a231ca7f9227df1632f3&=&format=webp&quality=lossless&width=1134&height=1144"
              />
            </WrapItem>
            <WrapItem>
              <Image
                boxSize="200px"
                src="https://media.discordapp.net/attachments/1229838518822506546/1250445428546076754/j7pX6uOEArjcDaYF5psmXk1200x1202.png?ex=666af78e&is=6669a60e&hm=3e2d546f3a16bd48a0a692ffb97d0fda74eb6e4aefee6113f0c0bfffb538dbbe&=&format=webp&quality=lossless&width=698&height=700"
              />
            </WrapItem>
            <WrapItem>
              <Image
                boxSize="200px"
                src="https://media.discordapp.net/attachments/1229838518822506546/1250445505843171341/kmKUci9ZACocXV71nY8RuF1184x1200.png?ex=666af7a0&is=6669a620&hm=ae9dee108e257b9f3dcb76ec11c387940a7b8953c6c4d76c3403cd9ede9be2b3&=&format=webp&quality=lossless&width=1128&height=1144"
              />
            </WrapItem>
            <WrapItem>
              <Image
                boxSize="200px"
                src="https://media.discordapp.net/attachments/1229838518822506546/1250445679311192256/f5IjSrkFoWYd88oAxZEx3R1198x1204.png?ex=666af7ca&is=6669a64a&hm=5cdf791a12e8e28ad609a49e0258deba0819d3276874111b79ff7cfada7bc2f6&=&format=webp&quality=lossless&width=696&height=700"
              />
            </WrapItem>
          </Wrap>
        </VStack>
      </VStack>
    </Box>
  );
}

export default Homepage;
