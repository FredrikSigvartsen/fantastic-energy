import React from "react"
import { Heading, Grid, Box, Text, Icon } from "@chakra-ui/layout"
import { TimeIcon } from "@chakra-ui/icons"
import Layout from "../components/Layout"
// import { BiChurch } from "react-icons/bi"

const Info = () => {
  return (
    <Layout>
      <Box p="20px">
        <Heading>Arrangement info</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(320px,1fr))" gap={10}>
          <IconBox title="Dato" Icon={<TimeIcon />}>
            <Text>13. August</Text>
          </IconBox>
          {/* <IconBox title="Kirke" Icon={<Icon as={BiChurch} />}>
            <Text>Enebakk kirke</Text>
          </IconBox> */}
          <Box w="100%" h="10" bg="blue.500">
            Fest
          </Box>
        </Grid>
      </Box>
    </Layout>
  )
}

const IconBox = ({ children, title, Icon }) => (
  <Box w="100%" h="10" bg="blue.500">
    {Icon}
    <Heading size="sm" as="h3">
      Dato
    </Heading>
    {children}
  </Box>
)

export default Info
