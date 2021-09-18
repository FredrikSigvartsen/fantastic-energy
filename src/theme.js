import { extendTheme } from "@chakra-ui/react"
import "@fontsource/dancing-script"
import "@fontsource/open-sans"
import "@fontsource/cinzel"

const theme = extendTheme({
  fonts: {
    heading: "Dancing Script", //"Cinzel"
    body: "Open Sans",
  },
  sizes: {
    pagePadding: "20px",
  },
})

export default theme
