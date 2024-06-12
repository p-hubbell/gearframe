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
    <Box>
      <VStack spacing="32px">
        <VStack spacing="16px">
          <Heading as="h1">gearframe - stay tuned...</Heading>
          <Image
            boxSize="xs"
            src="https://media.mymind.host/0N61cTSvAoj51RnyO8ENwf/0NYSeLK0IsR/hWhR46V7wQgb7K2kO3GBm2;2048x2048.webp?Expires=1718174640&Signature=OjND1ippZPviTJ67AG3436bmBYXgdyQCJwXQic4jzTMXNoe3bdQhg1IryKVV~mgSN5AxWMBS-HVHsby0bWz3wK5o2OaZkjeOznC6POmwElym3Z0T14OWNdwaTMXRXlXnTu~fDyelrNMSaAQP~Xn19-czvm5NqAIwYAobqi9TfB72hvko4zbjMybaUqhBlg3jQ4zWo4G8DdwKoaXBsHsc5Lp75Owf-4T~PylUQQbf4t352vgkAAtKvz~94OvgltsDc4Ax1Z38TK2tRM~jrMU29y7U71OesXS-zx7AxTg5hgAhnK7VqIrfdHFGzGoJtWDC~7Wt1RrzvDtKrQWoJ~BCnA__&Key-Pair-Id=APKAIU3XU66SGFMW2CUA"
          />
          <Container>
            <Text fontSize="lg">
              a playground for implementing project ideas and design inspiration
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
                src="https://media.mymind.host/0N61cTSvAoj51RnyO8ENwf/0NYVrKOwJOw/jzYn95NKwoUbbc1ti249LC;1000x1008.webp?Expires=1718173020&Signature=47T9gPdPqnv60fgoUOb8yrpbiiVgjLXzUhQdNeMMZW0yPHnjXHyvPXjhS5PQcSNu5sKesXcB5pbpUJ3pzSM3yrEDHw7wDpMvn4kfqfTAPWflqlK0WISdp1amaMOZ~dBr5PCgpVVd4-MhOjOW4cu696DRmy878jPXnLOkE6A8V02Y9SjBU15JEyXzGR9864c9ZojSZceslYQD94mKeyyFHo~QLK4m1lcvGOb3cHN0X-~Z1SFBNQD5nu-P-y2tKa-dxaMBHdIbcWmuo~9mzxyogPVBC~qXhlPlXY40WkW8oaUZCYd1FbB0~yrgaHgpOLuE9KII6WHAufurlQi-pXf~0w__&Key-Pair-Id=APKAIU3XU66SGFMW2CUA"
              />
            </WrapItem>
            <WrapItem>
              <Image
                boxSize="200px"
                src="https://media.mymind.host/0N61cTSvAoj51RnyO8ENwf/0NYSptFPQE8/j7pX6uOEArjcDaYF5psmXk;1200x1202.webp?Expires=1718173260&Signature=Ow4xHO8M0r~Rh~-11X00V-hmuDYJNB-Tn60-cdB3w1PoNZE6cwNCFleSoA57KazCgeAMh3YSec2j6x5uuQKUj4AGfnj5yZDuWo01ky9FzAgbCdhEJW1NALtaI7PWxubK22uYVNmFX3f9Wg0qo~bNcstOiXRgzao~9PkQxeNbxNSPOAdFinItbw0S4xPEBE-vRlrnFqTnS85P-y6ZYr842n133Xqx4clDNa5F4wkVF8~Dz6HxJnH8QrlXSQ7s6xJvPKavxrdNLzHWJ~DiSJReaRO5M8Rih-KCa8LYKYqYKs9hgHruhtszFvEmshyXYDRrXWXz2adDmuz97QwuW1W0Mw__&Key-Pair-Id=APKAIU3XU66SGFMW2CUA"
              />
            </WrapItem>
            <WrapItem>
              <Image
                boxSize="200px"
                src="https://media.mymind.host/0N61cTSvAoj51RnyO8ENwf/0NYSprlGQHE/kmKUci9ZACocXV71nY8RuF;1184x1200.webp?Expires=1718173380&Signature=PAcE~GTSfUC5mLrxAIrdSHPS4mlMRntopj2ZOr3AzFXRiJVsIkg7orpXaHLewTLiE1mD01pWdqlkvB-aoPGF6FuOPOaUlUxk1Okkzzy57cawu1oRDUDfwHpcvjrx-o8qssoGCPn~RbD1nR1BglPqKQBp89-WUxHN4FGChD0FZCMTPofF8~a1hx0Le4AlpoXBhkT6NV1SpppsiQGwzyvDFGTGCe3KEyyMxP-FjS6JEpoU2RwuGh6SDNpKajgfJsyjnluCJ2~fhoHboq~l-Y4OyWBZ~IgeYG2UqMCg3uYbOMmcCf4RPOKHVA31a4ko0WshOFCZuNN8SjObxaf-g4wEug__&Key-Pair-Id=APKAIU3XU66SGFMW2CUA"
              />
            </WrapItem>
            <WrapItem>
              <Image
                boxSize="200px"
                src="https://media.mymind.host/0N61cTSvAoj51RnyO8ENwf/0NYSpwKFb0i/f5IjSrkFoWYd88oAxZEx3R;1198x1204.webp?Expires=1718173440&Signature=jn~Cl-IKQp0QTq1QsIwIV~FTXcDvePFUo9nxPFdg2ihBBqtHVzssJmCA8i739lPlibYS3h6hjIrITDKxMwsu~U6omEUI7-RU4AcWcFvri-T4pG61VGRysshS8SaogOUweHMtAvWA05NqORAlQcPEMd8fFWdVhDB-yLbVMiMihOzw9s-IP0aU2CmP8OCmZm5hNZD13vD~p0h~CooWilruVqGTrtoVtJd9WgRjsZ9K5Nzbmv7oSqGTf37qIAMWVc1QerJUBi6p5Scrozq5Xb97I0pVo~dbrMRZ4EPtuFWK2DBC5bJd8FGY8mOjeSeI2r9BM1-yPLVvGr3PHZEOurphcg__&Key-Pair-Id=APKAIU3XU66SGFMW2CUA"
              />
            </WrapItem>
          </Wrap>
        </VStack>
      </VStack>
    </Box>
  );
}

export default Homepage;
