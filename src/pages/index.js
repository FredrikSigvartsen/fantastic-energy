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

const responsivePadding = ["5px", "10px", "5rem"]
const Header = () => (
  <Box
    width="100vw"
    height={["70vh", "80vh"]}
    backgroundImage={RomanticImage}
    backgroundSize={["cover"]}
    backgroundRepeat="no-repeat"
    backgroundPosition={["25% center", "bottom center"]}
  >
    <Center height="100%">
      <Box color="white">
        <Heading
          textAlign="center"
          color="white.100"
          fontSize={["3xl", "5xl"]}
          h1
        >
          Fredrik & Kamilla
        </Heading>
        <Heading
          color="white.100"
          pt="30px"
          size="md"
          textAlign="center"
          textTransform="uppercase"
        >
          gifter seg
        </Heading>
        <Heading
          fontSize={["3xl", "5xl"]}
          color="white.100"
          pt="30px"
          textAlign="center"
        >
          13. August, 2022
        </Heading>
        <Center>
          <Link to="/rsvp">
            <Button
              textTransform="uppercase"
              mt="30px"
              colorScheme="pink"
              variant="solid"
            >
              Svar
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
            mt={["10px"]}
            pb="10px"
            size="sm"
          >
            For de som ikke visste
          </Heading>
          <Heading size="2xl" pb="20px" h2>
            V??r historie
          </Heading>
          <Text>
            Sommeren 2012 m??ttes Fredrik og Kamilla p?? fest. Fredrik ble veldig
            interessert i denne vakre jenta, ikke visste han at hun overhodet
            ikke var interessert i han ???? Men han ga seg ikke. Han var betatt,
            og kunne ikke gi slipp p?? jenta han forelsket seg i p?? en fest. Han
            gjorde alt for ?? f?? hennes oppmerksomhet, det gikk s?? langt at han
            p??stod at det ikke var forskjell p?? smak mellom vafler og pannekaker
            ????????. Kamilla var selvf??lgelig uenig i dette. Fredrik foreslo derfor
            at de m??tte m??tes for ?? finne fasiten????????????? (Kan du holde p?? en
            hemmelighet? Fredrik later fremdeles den dag i dag, 9 ??r senere, som
            at det er forskjell p?? smak mellom pannekaker og vafler. Sannheten
            er selvf??lgelig at Fredrik smaker forskjell, men ikke fortell dette
            til Kamilla, da kan bryllupet st?? i fare)
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
          n??r Fredrik fridde til Kamilla
        </Heading>
        <Heading size="2xl" pb={["10px", "20px"]} textAlign="center" h2>
          Vil du gifte deg med meg?
        </Heading>
        <Text>
          8 ??r etter pannekake-daten, er de p?? topptur p?? Ranastongi, i n??rheten
          av Hemsedal. Det var ikke en sky ?? se og 25 grader, det var med andre
          ord en perfekt dag. Fredrik var stille p?? veien opp og det var tydelig
          at han var litt nerv??s for sp??rsm??let han snart skulle stille. N??r de
          kom til toppen var han veldig n??ye med ?? finne et sted han kunne fri
          uten tilskuere. Kamilla derimot, som ikke visste noe, var lei av ??
          lete etter den "perfekte plassen for lunsj". Etter mye om og men fant
          de til slutt et sted, med utsikt over Jotunheimen. Etter ?? ha spist
          lunsjen, stod han plutselig der, p?? et kne. Hverken Fredrik eller
          Kamilla husker hva som ble sagt, men romantisk var det og mye
          kj??rlighet. Svaret ble ja ??????
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
    <Layout title="Hjem">
      <Header />
      <OurHistory />
      <Engagement />
    </Layout>
  )
}
