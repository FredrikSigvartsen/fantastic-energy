import React from "react"
import moment from "moment"
import { Heading, Grid, Box, Text, Link, Center } from "@chakra-ui/layout"
import { TimeIcon, ExternalLinkIcon } from "@chakra-ui/icons"
import Layout from "../components/Layout"
import { IconContext } from "react-icons"
import { BiChurch } from "react-icons/bi"

import { GiPartyPopper } from "react-icons/gi"
import { Button } from "@chakra-ui/button"

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

const AdditionalInfo = () => (
  <Box p="2rem">
    <Center>
      <Box>
        <Heading mb="10px" textAlign="center">
          Viktig informasjon
        </Heading>
        <Box w={["100%", "80vh", "80vh"]}>
          <Text>
            Vi ønsker ingen barn i bryllupet. Dette er en festens dag, og håper
            du respekterer vårt ønske. Bryllup er dyrt, og vi ønsker å
            prioritere å invitere personer som er viktige i vårt liv. Derfor får
            ikke alle mulighet til å ta med seg sin kjæreste.
          </Text>
        </Box>
      </Box>
    </Center>
  </Box>
)

const Info = () => {
  return (
    <Layout>
      <Box h="100vh">
        <Highlights />
        <AdditionalInfo />
      </Box>
    </Layout>
  )
}

const IconBox = ({ children, title, Icon }) => (
  <Box w="100%" p="20px" bg="pink.100">
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

export default Info
