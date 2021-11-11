import React from "react"
import "./all.css"
import { Helmet } from "react-helmet"

// 1. import `ChakraProvider` component
import { ChakraProvider, ScaleFade } from "@chakra-ui/react"
import { Navbar } from "./Navbar"
import Footer from "./Footer"
import InsertCode from "./InsertCode"
import theme from "../theme"
import useStore from "../store/store"
import shallow from "zustand/shallow"

const Layout = ({ children, title }) => {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang="nb" amp />
        <meta charset="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>

        <meta name="viewport" content="width=device-width" />
        <meta property="og:title" content={title} />

        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <ScaleFade initialScale={0.6} in={isValidated}>
        <Navbar />
        {children}
        <Footer />
      </ScaleFade>
    </ChakraProvider>
  )
}

export default Layout
