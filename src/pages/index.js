import React from "react"
import Layout from "../components/Layout"
import { Box, Heading, Center, SimpleGrid, Text, Image } from "@chakra-ui/react"
import RomanticImage from "../img/bryllup-stokmarknes-20-liggende-2.jpg"
import CouplePhoto from "../img/kroatia-2019.jpeg"
import theme from "../theme"
const Header = () => (
  <Box
    width="100vw"
    height="70vh"
    backgroundImage={RomanticImage}
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    backgroundPosition="center center"
  >
    <Center height="100%">
      <Box color="white">
        <Heading color="white.100" size="3xl" h1>
          Fredrik & Kamilla
        </Heading>
        <Heading
          color="white.100"
          p
          pt="40px"
          size="md"
          fontWeight="300"
          textAlign="center"
          textTransform="uppercase"
        >
          gifter seg
        </Heading>
        <Heading color="white.100" pt="40px" textAlign="center">
          13. August, 2022 | 14.30
        </Heading>
      </Box>
    </Center>
  </Box>
)

const OurHistory = () => (
  <Box width="100vw" height="60vh">
    <SimpleGrid
      minChildWidth="320px"
      spacing="40px"
      px={theme.sizes.pagePadding}
    >
      <Box width="100%">
        <Box p="5rem">
          <Text
            fontStyle="italic"
            textTransform="lowercase"
            p
            pb="10px"
            size="sm"
          >
            for de som ikke visste
          </Text>
          <Heading size="2xl" pb="20px" h2>
            Vår historie
          </Heading>
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Text>
        </Box>
      </Box>
      <Box p="5rem">
        <Image
          height="400px"
          alt="Fredrik og Kamilla i Kroatia"
          src={CouplePhoto}
        ></Image>
      </Box>
    </SimpleGrid>
  </Box>
)

export default function Home() {
  return (
    <Layout>
      <Header />
      <OurHistory />
    </Layout>
  )
}
