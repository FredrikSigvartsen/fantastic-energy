import * as React from "react"

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"
import { Navbar } from "./Navbar"

const Layout = ({ children }) => {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Navbar />
      {children}
    </ChakraProvider>
  )
}

export default Layout
