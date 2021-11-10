import { extendTheme } from "@chakra-ui/react"
import "@fontsource/dancing-script"

import "@fontsource/open-sans"
import "@fontsource/cinzel"

const theme = extendTheme({
  fonts: {
    heading: "Cinzel", //
    body: "Open Sans",
  },
  sizes: {
    pagePadding: "20px",
  },
  colors: {
    pink: {
      100: "#ffe8d6",
      400: "#DDBEA9",
      500: "#DCBAA7",
      600: "#D6AE99",
      700: "#D6AE99",
      800: "#CB997E",
      900: "#C5906D",
    },
    green: {
      100: "#b7b7a4",
      400: "#a5a58d",
      500: "#9C9C81",
      600: "#81876E",
      700: "#767B65",
      900: "#6b705c",
    },
  },
})
export default theme
