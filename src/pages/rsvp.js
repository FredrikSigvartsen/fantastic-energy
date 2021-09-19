import React, { useState } from "react"
import Layout from "../components/Layout"
import {
  Box,
  CheckboxGroup,
  Checkbox,
  SimpleGrid,
  Input,
  InputGroup,
  Heading,
  Button,
  Center,
  InputRightElement,
} from "@chakra-ui/react"

import { CheckIcon } from "@chakra-ui/icons"

const allergies = ["Laktose", "Gluten", "Nøtter", "Fisk", "Skalldyr", "Egg"]

const RSVP = () => {
  return (
    <Layout>
      <Box h="xl" width="100%">
        <Heading mt="30px" textAlign="center">
          Kommer du?
        </Heading>
        <Center>
          <Box backgroundColor="pink.100" w="xl" mt="40px" p="20px">
            <AddParticipants />

            <Heading>Allergier</Heading>
            <CheckboxGroup colorScheme="green">
              <SimpleGrid minChildWidth="50px" spacing="50px">
                {allergies.map(allergy => (
                  <Checkbox value={allergy.toLowerCase}>{allergy}</Checkbox>
                ))}
              </SimpleGrid>
            </CheckboxGroup>
          </Box>
        </Center>
      </Box>
    </Layout>
  )
}

const AddParticipants = () => {
  const [participants, setParticipants] = useState([""])
  const handleChange = (event, index) => {
    participants[index] = event.target.value
  }

  const handleClick = () => {
    const neweParticipants = participants
    neweParticipants.push("")
    setParticipants(neweParticipants)
  }

  const isParticipantOnInvitationList = participant => {
    return true
  }
  return (
    <Box>
      {participants.map((participant, index) => {
        return (
          <InputGroup>
            <Input
              onChange={event => handleChange(event, index)}
              value={participant}
              placeholder="Navn"
            ></Input>
            {isParticipantOnInvitationList(participant) ? (
              <InputRightElement
                children={<CheckIcon color="green" />}
              ></InputRightElement>
            ) : null}
          </InputGroup>
        )
      })}
      <Button onClick={handleClick}>+ Legg til nytt navn</Button>
    </Box>
  )
}

export default RSVP
