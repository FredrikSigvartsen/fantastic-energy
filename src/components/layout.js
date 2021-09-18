import React from "react"

// 1. import `ChakraProvider` component
import { ChakraProvider, useDisclosure, ScaleFade } from "@chakra-ui/react"
import { Navbar } from "./Navbar"
import Footer from "./Footer"
import InsertCode from "./InsertCode"
import theme from "../theme"

const Layout = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure(false)

  if (!isOpen)
    return (
      <ChakraProvider theme={theme}>
        <Navbar />
        <InsertCode onValidated={() => onToggle()} />
      </ChakraProvider>
    )

  return (
    <ChakraProvider theme={theme}>
      <ScaleFade initialScale={0.6} in={isOpen}>
        <Navbar />
        {children}
        <Footer />
      </ScaleFade>
    </ChakraProvider>
  )
}

export default Layout
