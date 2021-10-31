import React from "react"
import { Box, Heading } from "@chakra-ui/react"
import { Link } from "gatsby"

export const Logo = props => {
  return (
    <Box {...props}>
      <Link to="/">
        <Heading size="md">Fredrik & Kamilla</Heading>
      </Link>
    </Box>
  )
}
