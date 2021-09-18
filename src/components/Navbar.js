import React from "react"
import { Box, Heading } from "@chakra-ui/react"
import { Link } from "gatsby"

export const Navbar = () => {
  return (
    <Box w="100%" p="20px" borderBottom="1px" borderColor="gray.300">
      <Link to="/">
        <Heading size="md">Fredrik & Kamilla</Heading>
      </Link>
    </Box>
  )
}
export default Navbar
