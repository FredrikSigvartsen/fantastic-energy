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

const responsivePadding = ["5px", "10px", "5rem"]
const Header = () => (
  <Box
    width="100vw"
    height="80vh"
    backgroundImage={RomanticImage}
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    backgroundPosition="bottom center"
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
    <SimpleGrid minChildWidth="320px" spacing="40px" px={responsivePadding}>
      <Box width="100%">
        <Box p={responsivePadding}>
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
            ikke var interessert i han 😂 Men han ga seg ikke. Han var
            forelsket, og kunne ikke gi slipp på jenta han forelsket seg i på
            fest. Han gjorde alt for å få hennes oppmerksomhet. Det gikk så
            langt at han påstod at det ikke er forskjell i smak på vafler og
            pannekaker 🧇🥞. Kamilla var selvfølgelig uenig i dette. Fredrik
            foreslo derfor at de måtte møtes og lage dette for å finne fasiten
            🤷‍♂️ (Kan du holde på en hemmelighet? Fredrik later fremdeles den dag
            i dag, 9 år senere, som at det er forskjell mellom pannekaker og
            vafler. Sannheten er selvfølgelig at det fint kan smake det samme.
            Men ikke fortell dette til Kamilla, da bryllupet kan stå i fare)
          </Text>
        </Box>
      </Box>
      <Box p={responsivePadding}>
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
  <Box p={responsivePadding} pt={["50px", "10rem"]}>
    <Center>
      <Box px={["5px", 0]} width={["100%", "50vw"]} mb={responsivePadding}>
        <Heading pb="10px" textAlign="center" size="sm">
          når Fredrik fridde til Kamilla
        </Heading>
        <Heading size="2xl" pb={["10px", "20px"]} textAlign="center" h2>
          Vil du gifte deg med meg?
        </Heading>
        <Text>
          8 år etter pannekake-daten, er de på topptur på Ranastongi, i nærheten
          av Hemsedal. Det var ikke en sky å se, og 25 grader. Det var med andre
          ord en perfekt dag. Fredrik var mutt på veien opp, og det tydelig at
          han var litt nervøs for spørsmålet han snart skulle stille. Når de kom
          til toppen var han veldig nøye med å finne et sted han kunne fri uten
          tilskuere. Kamilla derimot, som ikke visste noe, var lei av å lete
          etter den "perfekte plassen for lunsj". Til slutt fant de et sted, med
          utsikt over Jotunheimen. Etter å ha spist lunsjen, stod han plutselig
          der. På et kne. Hverken Fredrik eller Kamilla husker hva som ble sagt,
          men romantisk var det. Og mye kjærlighet. Svaret ble ja ❤️
        </Text>
      </Box>
    </Center>
    <Box>
      <Center>
        <Image
          height={["400px", "600px"]}
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
