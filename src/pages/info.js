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
import { Button } from "@chakra-ui/button"
import { ImLocation } from "react-icons/im"
import { FaParking } from "react-icons/fa"
import { TiWine } from "react-icons/ti"

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
    <Box p="20px">
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
    title: "Oppmøte",
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
    info: "Fra kl. 16.30",
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
      <Box>
        <Heading mb="10px" textAlign="center">
          Praktisk informasjon
        </Heading>
        <Box w={["100%", "80vh", "80vh"]}>
          <Text>
            Her finner du praktisk informasjon om dagen. Ettersom bryllupet er
            en stor dag for oss har vi invitert de personene som betyr mest for
            oss, og vi håper derfor på forståelse for at ikke alle kjærester er
            invitert. Når det gjelder barn er de hjertelig velkomne under
            seremonien i kirken, men ikke under middagen og festen, da vi tror
            de vil ha det bedre hjemme med en barnevakt (også tenker
            barnevernspedagogen at barn, alkohol og fest ikke er helt forenlig)
          </Text>
          <Text>
            På kartene nedenfor kan du klikke inn og se veibeskrivelse direkte i
            Google Maps.
          </Text>
        </Box>
      </Box>
    </Center>
    <Grid
      templateColumns="repeat(auto-fit, minmax(320px,1fr))"
      spacing={[2, 10]}
    >
      <HighLightedInfo higlightedList={churchInfo} title="Vielsen">
        <Text>
          Vielsen finner sted i Enebakk kirke kl. 14.30. Dere bør være på plass
          senest 15 minutter før seremonien starter{" "}
        </Text>
      </HighLightedInfo>
      <HighLightedInfo higlightedList={partyInfo} title="Selskapet">
        <Text>
          Selskapet er lagt til Ignarbakke Kulturhus. Fra kirken er det ca. 4
          minutters gange. Lokalet åpnes for gjester etter vielsen, slik at de
          som ønsker kan oppholde seg der mens brudeparet fotograferes. Dere vil
          bli tatt imot av toastmaster, og det vil etterhvert bli servert bobler
          og fingermat.
        </Text>
        <Text>
          Det vil bli servert drikke under både middagen og festen, på vår
          regning. Det vil likevel være anledning til å ta med medbrakt dersom
          det er ønskelig.
        </Text>
      </HighLightedInfo>
    </Grid>
  </Box>
)

const IconBox = ({ children, title, Icon }) => (
  <Box
    w="100%"
    p="20px"
    bg="pink.100"
    boxShadow="0px 12px 24px -2px rgba(197, 144, 109, 1)"
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
    my={["10px", "30px"]}
    bg="pink.100"
    width="100%"
    boxShadow="0px 12px 24px -2px rgba(197, 144, 109, 1)"
    borderWidth="1px"
    p={5}
  >
    <Heading size="lg" as="h3" pb="10px" mb="1rem">
      {title}
    </Heading>
    <VStack spacing={5} align="stretch">
      {higlightedList.map(({ Icon, title, info }) => (
        <HighlightedListItem icon={Icon} title={title} info={info} />
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

      <Box>{info}</Box>
    </Flex>
  </Box>
)

const Info = () => {
  return (
    <Layout>
      <Box>
        <Highlights />
        <AdditionalInfo />
      </Box>
    </Layout>
  )
}

export default Info
