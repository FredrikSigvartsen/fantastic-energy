import React, { useState } from "react"
import { Box, Heading, Center, Input } from "@chakra-ui/react"

export const InsertCode = ({ onValidated }) => {
  const password = "gUXvVuEw"
  const [value, setValue] = useState()

  const handleChange = event => {
    const newValue = event.target.value
    setValue(newValue)
    if (newValue === password) onValidated()
  }

  const isValid = value => {
    if (value && value.length > 0) {
      if (value === password) return true
      return false
    }
    return true
  }
  return (
    <Center>
      <Box w="100vw" p="20rem">
        <Heading pb="20px" textAlign="center">
          Sett inn kode
        </Heading>
        <Center>
          <Input
            w="30vw"
            size="lg"
            onChange={handleChange}
            isInvalid={!isValid(value)}
            placeholder="Bruk koden fra invitasjonen her"
          ></Input>
        </Center>
      </Box>
    </Center>
  )
}

export default InsertCode
