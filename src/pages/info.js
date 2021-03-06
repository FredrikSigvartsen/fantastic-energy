import React from "react"
import moment from "moment"
import {
  Heading,
  Grid,
  Box,
  Text,
  Link,
  Center,
  VStack,
  Flex,
  Spacer,
} from "@chakra-ui/layout"
import { TimeIcon, ExternalLinkIcon } from "@chakra-ui/icons"
import Layout from "../components/Layout"
import { IconContext } from "react-icons"
import { BiChurch, BiDrink } from "react-icons/bi"

import { GiPartyPopper, GiKnifeFork } from "react-icons/gi"
import { ImLocation } from "react-icons/im"
import { FaParking } from "react-icons/fa"
import { TiWine } from "react-icons/ti"
import { ProfileCard } from "../components/ProfileCard"
import SimenProfile from "../img/toastmaster-simen.jpg"

const ChurchIcon = () => (
  <IconContext.Provider
    value={{ size: "30px", className: "global-class-name" }}
  >
    <BiChurch />
  </IconContext.Provider>
)

const PartyIcon = () => (
  <IconContext.Provider
    value={{ size: "30px", className: "global-class-name" }}
  >
    <GiPartyPopper />
  </IconContext.Provider>
)

const Highlights = () => {
  const weddingDate = moment(new Date(Date.UTC(2022, 8, 13, 14, 30)))
  weddingDate.locale("nb")
  return (
    <Box mt={["20px"]} p="20px">
      <Grid templateColumns="repeat(auto-fit, minmax(200px,1fr))" gap={10}>
        <IconBox title="Dato" Icon={<TimeIcon boxSize="30px" />}>
          <Text>13. August kl. 14.30</Text>
          <Text fontStyle="italic">
            {moment(weddingDate).endOf("day").fromNow()}
          </Text>
        </IconBox>
        <IconBox title="Vielse" Icon={<ChurchIcon />}>
          <Text mb="15px">Enebakk kirke</Text>
          <Link
            href="https://goo.gl/maps/Xh9VoC8J8JL9CcUx8"
            isExternal
            color="green.700"
          >
            Kart <ExternalLinkIcon mx="2px" />
          </Link>
        </IconBox>
        <IconBox title="Fest" Icon={<PartyIcon />}>
          <Text mb="15px">Kulturhuset Ignarbakke</Text>
          <Link
            href="https://g.page/Ignarbakke?share"
            isExternal
            color="green.700"
          >
            Kart <ExternalLinkIcon mx="2px" />
          </Link>
        </IconBox>
      </Grid>
    </Box>
  )
}

const churchInfo = [
  {
    title: "Adresse",
    info: "Ignarbakke 14, 1912 Enebakk",
    Icon: <ImLocation />,
  },
  {
    title: "Parkering",
    info: "Egne parkeringsplasser i tilknytning til kirken",
    Icon: <FaParking />,
  },
  {
    title: "Oppm??te",
    info: "Senest kl. 14.15",
    Icon: <TimeIcon />,
  },
  {
    title: "Vielsen starter",
    info: "Senest kl. 14.30",
    Icon: <TimeIcon />,
  },
]

const partyInfo = [
  {
    title: "Adresse",
    info: "Ignaveien 44, 1912 Enebakk",
    Icon: <ImLocation />,
  },
  {
    title: "Parkering",
    info: "Nedenfor lokalet",
    Icon: <FaParking />,
  },
  {
    title: "Bobler og fingermat",
    info: "Mellom vielse og middag",
    Icon: <TiWine />,
  },
  {
    title: "Middag",
    info: "Fra kl. 17.00",
    Icon: <GiKnifeFork />,
  },
  {
    title: "Lokalet stenger",
    info: "02.00",
    Icon: <BiDrink />,
  },
]

const AdditionalInfo = () => (
  <Box p={["5px", "2rem"]}>
    <Center>
      <Box mb="30px" px={["15px"]}>
        <Heading mb="10px" textAlign="center">
          Praktisk informasjon
        </Heading>
        <Box maxW="700px">
          <Text>
            Her finner du praktisk informasjon om dagen. Ettersom bryllupet er
            en stor dag for oss har vi invitert de personene som betyr mest for
            oss, og vi h??per derfor p?? forst??else for at ikke alle kj??rester er
            invitert. N??r det gjelder barn er de hjertelig velkomne under
            seremonien i kirken, men ikke under middagen og festen, da vi tror
            de vil ha det bedre hjemme med en barnevakt (ogs?? tenker
            barnevernspedagogen at barn, alkohol og fest ikke er helt forenlig)
          </Text>
          <Text>
            P?? kartene nedenfor kan du klikke inn og se veibeskrivelse direkte i
            Google Maps.
          </Text>
        </Box>
      </Box>
    </Center>
    <Grid
      templateColumns={["1fr", "repeat(auto-fit, minmax(450px,1fr))"]}
      gap={[2, 10]}
    >
      <HighLightedInfo higlightedList={churchInfo} title="Vielsen">
        <Text>
          Vielsen finner sted i Enebakk kirke kl. 14.30. Dere b??r v??re p?? plass
          senest 15 minutter f??r seremonien starter{" "}
        </Text>
      </HighLightedInfo>
      <HighLightedInfo higlightedList={partyInfo} title="Selskapet">
        <Text>
          Selskapet er lagt til Ignarbakke Kulturhus. Fra kirken er det 6
          minutters gange. Lokalet ??pnes for gjester etter vielsen, slik at de
          som ??nsker kan oppholde seg der mens brudeparet fotograferes. Dere vil
          bli tatt imot av toastmaster, og det vil etterhvert bli servert bobler
          og fingermat.
        </Text>
        <Text>
          Det vil bli servert drikke under b??de middagen og festen, p?? v??r
          regning. Det vil likevel v??re anledning til ?? ta med medbrakt dersom
          det er ??nskelig.
        </Text>
      </HighLightedInfo>
    </Grid>
  </Box>
)

const IconBox = ({ children, title, Icon }) => (
  <Box
    w="100%"
    p="20px"
    borderRadius={["4px"]}
    bg={["pink.400", "pink.100", "pink.400", "pink.100", "whiteAlpha.100"]}
    boxShadow={[
      "0px 12px 24px -2px rgba(197, 144, 109, 1)",
      "20px 20px 60px #b5b5b5, -20px -20px 60px #ffffff",
    ]}
  >
    <Center>
      <Box textAlign="center">
        <Center>{Icon}</Center>
        <Heading size="lg" mt="10px" mb="10px" as="h3">
          {title}
        </Heading>
        {children}
      </Box>
    </Center>
  </Box>
)

const HighLightedInfo = ({ title, higlightedList, children }) => (
  <Box
    mb={["10px", "15px"]}
    bg="pink.100"
    width="100%"
    boxShadow={["none", "0px 12px 24px -2px rgba(197, 144, 109, 1)"]}
    borderWidth="1px"
    p={5}
  >
    <Heading size="lg" as="h3" pb="10px" mb="1rem">
      {title}
    </Heading>
    <VStack spacing={5} align="stretch">
      {higlightedList.map(({ Icon, title, info }) => (
        <HighlightedListItem
          key={title}
          icon={Icon}
          title={title}
          info={info}
        />
      ))}
    </VStack>
    <Box mt={["1rem", "2rem"]}>{children}</Box>
  </Box>
)

const HighlightedListItem = ({ icon, title, info }) => (
  <Box borderBottom="0.5px solid" py="2px">
    <Flex>
      <Box className="highlighted_item__icon">{icon}</Box>
      <Box>
        <Text fontWeight="bold">{title}</Text>
      </Box>
      <Spacer />

      <Box>
        <Text textAlign="right" maxW="200px">
          {info}
        </Text>
      </Box>
    </Flex>
  </Box>
)

const Info = () => {
  return (
    <Layout title="Praktisk info">
      <Box>
        <Highlights />
        <AdditionalInfo />
        <Toastmaster />
      </Box>
    </Layout>
  )
}

const Toastmaster = () => (
  <Box bg="green.900" py="2rem">
    <Grid templateColumns={["1fr", "1fr 1fr"]}>
      <Box p={["15px", "4rem"]} color="whiteAlpha.900">
        <Center>
          <Box>
            <Heading mb={["1rem", "2rem"]} fontSize={["3xl", "4xl"]}>
              Toastmaster
            </Heading>
            <Text fontSize="lg">
              ??nsker du ?? settes opp p?? talelisten? Eller lurer du p?? noe? Da
              kan du ta kontakt med Simen Stubsj??en som er toastmaster for
              kvelden.
            </Text>
          </Box>
        </Center>
      </Box>
      <ProfileCard
        imageUrl={SimenProfile}
        imageAlt="Simen Stubsj??en"
        name="Simen Stubsj??en"
        title="God venn av brudeparet"
        facebookUrl="https://www.facebook.com/Simen.K.Stubsjoen"
        linkedInUrl="https://www.linkedin.com/in/simen-stubsjoen/"
        mail="skstubsjoen@gmail.com"
        badges={["varm", "morsom", "kompis"]}
      >
        Telefon: 976 62 058
      </ProfileCard>
    </Grid>
  </Box>
)

export default Info
