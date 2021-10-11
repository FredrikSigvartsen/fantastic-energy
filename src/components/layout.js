import React from "react"

// 1. import `ChakraProvider` component
import { ChakraProvider, ScaleFade } from "@chakra-ui/react"
import { Navbar } from "./Navbar"
import Footer from "./Footer"
import InsertCode from "./InsertCode"
import theme from "../theme"
import useStore from "../store/store"
import shallow from "zustand/shallow"

const Layout = ({ children }) => {
  const [isValidated, setIsValidated] = useStore(
    state => [state.isValidated, state.setIsValidated],
    shallow
  )

  if (!isValidated)
    return (
      <ChakraProvider theme={theme}>
        <Navbar />
        <InsertCode onValidated={() => setIsValidated(true)} />
      </ChakraProvider>
    )

  return (
    <ChakraProvider theme={theme}>
      <ScaleFade initialScale={0.6} in={isValidated}>
        <Navbar />
        {children}
        <Footer />
      </ScaleFade>
    </ChakraProvider>
  )
}

export default Layout
