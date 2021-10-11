import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import {
  Box,
  Heading,
  Center,
  SimpleGrid,
  Text,
  Image,
  Button,
} from "@chakra-ui/react"
import RomanticImage from "../img/bryllup-stokmarknes-20-liggende-2.jpg"
import CouplePhoto from "../img/kroatia-2019.jpg"
import EngagedPhoto from "../img/forlovelsen-hemsedal-20.jpg"
import theme from "../theme"
const Header = () => (
  <Box
    width="100vw"
    height="80vh"
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
        <Center>
          <Link to="/rsvp">
            <Button mt="40px" colorScheme="pink" variant="solid">
              RSVP
            </Button>
          </Link>
        </Center>
      </Box>
    </Center>
  </Box>
)

const OurHistory = () => (
  <Box width="100vw" height="100%">
    <SimpleGrid
      minChildWidth="320px"
      spacing="40px"
      px={theme.sizes.pagePadding}
    >
      <Box width="100%">
        <Box p="5rem">
          <Heading
            fontStyle="italic"
            textTransform="lowercase"
            p
            pb="10px"
            size="sm"
          >
            For de som ikke visste
          </Heading>
          <Heading size="2xl" pb="20px" h2>
            Vår historie
          </Heading>
          <Text>
            Sommeren 2012 møttes Fredrik og Kamilla på fest. Fredrik ble veldig
            interessert i denne vakre jenta. Ikke visste han at hun overhodet
            ikke var interessert i han 😂 Men Fredrik ga seg ikke. Han var
            forelsket, og kunne ikke gi slipp på jenta han forelsket seg i på
            fest. Det gikk så langt at han påstår at det ikke er forskjell i
            smak på vafler og pannekaker 🧇🥞- slik at de måtte lage dette
            sammen. hos han.
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

const Engagement = () => (
  <Box p="5rem" pt="10rem">
    <Center>
      <Box width="50vw" mb="5rem">
        <Heading pb="10px" textAlign="center" size="sm">
          når Fredrik fridde til Kamilla
        </Heading>
        <Heading size="2xl" pb="20px" textAlign="center" h2>
          Vil du gifte deg med meg?
        </Heading>
        <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
      </Box>
    </Center>
    <Box>
      <Center>
        <Image
          height="600px"
          src={EngagedPhoto}
          alt="Kamilla med forlovelsesring"
        />
      </Center>
    </Box>
  </Box>
)

export default function Home() {
  return (
    <Layout>
      <Header />
      <OurHistory />
      <Engagement />
    </Layout>
  )
}
