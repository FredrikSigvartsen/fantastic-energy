import React, { useState } from "react"
import { IconButton } from "@chakra-ui/react"
import { MinusIcon } from "@chakra-ui/icons"
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

const allergies = ["Laktose", "Gluten", "Nøtter", "Fisk", "Egg", "Skalldyr"]

const RSVP = () => {
  const [someoneHasAllergies, setHasAllergies] = useState(false)
  const [check, setCheck] = useState({})

  const onSelectedCheckbox = index => {
    setHasAllergies(true)
    setCheck(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }))
  }

  return (
    <Layout>
      <Box pb="60rem" h="xl" width="100%">
        <Heading mt="30px" textAlign="center">
          Kommer du?
        </Heading>
        <Center>
          <Box w="xl" mt="40px" p="20px">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/takk/"
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </div>
              <AddParticipants />

              <Heading mt="30px" mb="10px">
                Allergier
              </Heading>
              <CheckboxGroup>
                <SimpleGrid mb="20px" minChildWidth="30px" spacing="20px">
                  {allergies.map((allergy, index) => {
                    console.log(check[index])
                    return (
                      <Checkbox
                        key={index}
                        value={allergy.toLowerCase}
                        onChange={() => onSelectedCheckbox(index)}
                        isChecked={check[index] || false}
                      >
                        {allergy}
                      </Checkbox>
                    )
                  })}
                </SimpleGrid>
              </CheckboxGroup>
              {someoneHasAllergies ? (
                <Input
                  type="messsage"
                  name="allergies_name"
                  placeholder="Hvem av dere har allergier?"
                  size="sm"
                />
              ) : null}

              <Button mt="20px" colorScheme="green" type="submit">
                Send inn
              </Button>
            </form>
          </Box>
        </Center>
      </Box>
    </Layout>
  )
}

const AddParticipants = () => {
  const [participants, setParticipants] = useState([""])

  const handleClick = () => {
    setParticipants([...participants, ""])
  }

  const handleParticipantDeletion = index => {
    let newParticipants = participants
    newParticipants.splice(index, 1)
    setParticipants([...newParticipants])
  }

  const handleChangeParticipantName = (event, index) => {
    if (!event || !event.target || !event.target.value) return
    let newParticipants = participants
    newParticipants[index] = event.target.value
    setParticipants([...newParticipants])
  }

  return (
    <Box>
      {participants.map((participant, index) => {
        return (
          <InputGroup key={index} mb="20px">
            <Input
              onChange={event => handleChangeParticipantName(event, index)}
              value={participant}
              placeholder="Navn"
              type="text"
              name={`name-${index}`}
            ></Input>
            <InputRightElement
              children={
                <IconButton
                  onClick={() => handleParticipantDeletion(index)}
                  size="xs"
                  isRound
                  bg="transparent"
                  aria-label="Slett person"
                  icon={<MinusIcon color="blackAlpha.300" />}
                />
              }
            ></InputRightElement>
          </InputGroup>
        )
      })}
      <Button variant="link" onClick={handleClick}>
        + Legg til nytt navn
      </Button>
    </Box>
  )
}

export default RSVP
