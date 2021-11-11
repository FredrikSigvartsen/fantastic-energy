import React, { useState, useEffect } from "react"
import { IconButton } from "@chakra-ui/react"
import { MinusIcon } from "@chakra-ui/icons"
import Layout from "../components/Layout"
import { navigate } from "gatsby-link"

import {
  Box,
  CheckboxGroup,
  Checkbox,
  Grid,
  Input,
  InputGroup,
  Heading,
  Button,
  Center,
  InputRightElement,
} from "@chakra-ui/react"

const allergies = [
  { name: "laktose", display: "Laktose" },
  { name: "gluten", display: "Gluten" },
  { name: "nuts", display: "Nøtter" },
  { name: "fisk", display: "Fisk" },
  { name: "egg", display: "Egg" },
  { name: "skalldyr", display: "Skalldyr" },
]

const RSVP = () => {
  const [someoneHasAllergies, setHasAllergies] = useState(false)
  const [participants, setParticipants] = useState([])
  const [formValues, setFormValues] = useState({})

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...formValues,
        ...participants,
      }),
    })
      .then(() => navigate("/takk/"))
      .catch(error => alert(error))
  }

  const onParticipantChange = participants => {
    setParticipants(participants)
  }

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const onCheckChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value })
    setHasAllergies(true)
  }

  return (
    <Layout title="Kontakt">
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
              onSubmit={handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </div>
              <AddParticipants onChangeParticipants={onParticipantChange} />

              <Heading mt="30px" mb="10px">
                Allergier
              </Heading>
              <CheckboxGroup>
                <Grid
                  templateColumns={["repeat(auto-fit, minmax(70px,1fr))"]}
                  gap={3}
                  mb="20px"
                >
                  {allergies.map((allergy, index) => {
                    return (
                      <Checkbox
                        key={index}
                        name={allergy.name.toLowerCase()}
                        value={allergy.name.toLowerCase()}
                        onChange={e =>
                          onCheckChange(allergy.name, !formValues[allergy.name])
                        }
                        isChecked={formValues[allergy.name] || false}
                        checked={formValues[allergy.name] || false}
                      >
                        {allergy.display}
                      </Checkbox>
                    )
                  })}
                </Grid>
              </CheckboxGroup>
              {someoneHasAllergies ? (
                <Input
                  type="messsage"
                  name="allergies_name"
                  placeholder="Hvem av dere har allergier?"
                  onChange={handleChange}
                  size="sm"
                />
              ) : null}

              <Button mt="20px" colorScheme="pink" type="submit">
                Send inn
              </Button>
            </form>
          </Box>
        </Center>
      </Box>
    </Layout>
  )
}

const AddParticipants = ({ onChangeParticipants }) => {
  const [participants, setParticipants] = useState([""])

  useEffect(() => {
    onChangeParticipants(participants) // eslint-disable-next-line
  }, [participants])

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
