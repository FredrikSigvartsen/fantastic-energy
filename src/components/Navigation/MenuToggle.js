import React from "react"
import { Box } from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"
import { AiOutlineMenu } from "react-icons/ai"

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <AiOutlineMenu />}
    </Box>
  )
}
