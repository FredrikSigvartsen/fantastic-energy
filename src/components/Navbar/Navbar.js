import React, { useState } from "react"
import { Box, Flex, Link as ChakraLink, Stack, Text } from "@chakra-ui/react"
import { MenuToggle } from "./MenuToggle"
import { Logo } from "./Logo"
import { Link } from "gatsby"

export const Navbar = ({ props }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <NavBarContainer {...props}>
      <Logo w="170px" color={["green.700"]} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg={["pink.100"]}
      color={["green.700"]}
      {...props}
    >
      {children}
    </Flex>
  )
}

const MenuLinks = ({ isOpen }) => (
  <Box
    display={{ base: isOpen ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}
  >
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem>Hjem</MenuItem>
      <MenuItem to="/info/">Praktisk info</MenuItem>
      <MenuItem to="/rsvp/">Svar på invitasjon</MenuItem>
      <ChakraLink
        as={Link}
        href="https://www.onskelister.no/liste?id=KxE7BcCPd4g1DPt3kfRf&fbclid=IwAR3rNM6w3t-AGDAmWM2pAqfOa2xfd-0skFs_pJ8YcHwOpx0RaBpKbhXrRmY"
        target="_blank"
      >
        <Text
          colorScheme="green"
          textTransform="uppercase"
          display="block"
          fontWeight="bold"
          letterSpacing="1.5px"
        >
          Ønskeliste
        </Text>
      </ChakraLink>
    </Stack>
  </Box>
)

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <ChakraLink as={Link} to={to}>
      <Text
        colorScheme="green"
        textTransform="uppercase"
        display="block"
        fontWeight="bold"
        letterSpacing="1.5px"
        {...rest}
      >
        {children}
      </Text>
    </ChakraLink>
  )
}

export default Navbar
