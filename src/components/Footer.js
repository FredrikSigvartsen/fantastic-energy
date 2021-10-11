import React from "react"
import { Box, Center, Heading } from "@chakra-ui/react"
export const Footer = () => {
  return (
    <Box
      position="absolute"
      bottom="0"
      bg="white"
      w="100%"
      p="20px"
      borderTop="1px"
      borderColor="gray.300"
    >
      <Center>
        <Heading size="md">13. august 2022</Heading>
      </Center>
    </Box>
  )
}

export default Footer
