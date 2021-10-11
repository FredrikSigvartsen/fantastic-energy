import React from "react"
import { Box, Heading, Flex, Spacer, Button } from "@chakra-ui/react"
import { Link } from "gatsby"

export const Navbar = () => {
  return (
    <Flex w="100%" p="20px" borderBottom="1px" borderColor="gray.300">
      <Box p="2">
        <Link to="/">
          <Heading size="md">Fredrik & Kamilla</Heading>
        </Link>
      </Box>
      <Spacer />
      <Flex spaceBetween="20px">
        <Link to="/info/">
          <Button
            mr="3vw"
            textTransform="uppercase"
            variant="ghost"
            colorScheme="green"
          >
            Arrangement
          </Button>
        </Link>
        <Link m to="/rsvp/">
          <Button textTransform="uppercase" colorScheme="green">
            RSVP
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}
export default Navbar
