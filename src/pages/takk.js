import React from "react"
import Layout from "../components/Layout"

import { Box, Heading } from "@chakra-ui/react"
const Takk = () => {
  return (
    <Layout title="Takk">
      <Box h="xl" width="100%">
        <Heading mt={("30px", "3rem")} textAlign="center">
          Vi gleder oss veldig til å se deg!
        </Heading>
      </Box>
    </Layout>
  )
}

export default Takk
