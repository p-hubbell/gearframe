'use client';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Container,
  Heading,
  Link,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Box,
  Skeleton,
} from '@chakra-ui/react';
import Image from 'next/image';
import { blueScreen } from '@/fonts';
import fontStyles from './styles/fonts/fonts.module.css';
import { combineClasses } from '@gearframe.dev/utils';
import { useEffect, useState } from 'react';

const imageLoader = ({ src }: { src: string }) => src;

const DesignDirectionSkeletons = () =>
  Array.from({ length: 4 }, (_, idx) => (
    <Skeleton key={`skeleton-${idx}`} height="200px" width="200px" />
  ));

const ImageWrap = (imgSrcs?: string[]) => {
  return (
    <Wrap spacing="16px" justify="center">
      {imgSrcs ? (
        imgSrcs.map((imgSrc, idx) => (
          <WrapItem key={`img-${idx}`}>
            <Image
              src={imgSrc}
              loader={imageLoader}
              width={200}
              height={200}
              alt={`img ${idx}`}
            />
          </WrapItem>
        ))
      ) : (
        <DesignDirectionSkeletons />
      )}
    </Wrap>
  );
};

export default function Index() {
  const [logoUrl, setLogoUrl] = useState<string>();
  const [designDirectionUrls, setDesignDirectionUrls] = useState<
    string[] | undefined
  >(undefined);

  useEffect(() => {
    const fetchValue = async () => {
      try {
        const res = await fetch('/api');
        const blobs = await res.json();
        setLogoUrl(blobs.data.logo);
        setDesignDirectionUrls(blobs.data.designDirection);
      } catch (error) {
        console.error('Error fetching blob store data:', error);
      }
    };

    fetchValue();
  }, []);

  return (
    <Box className={combineClasses(blueScreen.variable)} marginY="32px">
      <VStack spacing="32px">
        <VStack spacing="16px">
          <Heading
            className={fontStyles.blueScreen}
            color="green.500"
            as="h1"
            size="4xl"
          >
            GEARFRAME
          </Heading>
          {logoUrl ? (
            <Image
              src={logoUrl}
              loader={imageLoader}
              width={250}
              height={250}
              alt="gearframe logo"
            />
          ) : (
            <Skeleton height="250px" width="250px" />
          )}
          <Container>
            <Text
              className={fontStyles.blueScreen}
              color="green.500"
              fontSize="2xl"
            >
              an evolving playground for implementing project and design ideas
            </Text>
          </Container>
          <Link
            className={fontStyles.blueScreen}
            color="green.500"
            fontSize="xl"
            href="https://github.com/p-hubbell/gearframe.dev"
            isExternal
          >
            codebase on github <ExternalLinkIcon mx="2px" />
          </Link>
        </VStack>
        <VStack spacing="16px">
          <Heading
            className={fontStyles.blueScreen}
            color="green.500"
            as="h2"
            size="3xl"
          >
            DESIGN DIRECTION
          </Heading>
          {ImageWrap(designDirectionUrls)}
        </VStack>
      </VStack>
    </Box>
  );
}
