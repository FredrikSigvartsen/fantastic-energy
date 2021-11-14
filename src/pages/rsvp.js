import React from "react"
import Layout from "../components/Layout"

import {
  Box,
  Input,
  Text,
  Textarea,
  Heading,
  Center,
  Button,
  Container,
} from "@chakra-ui/react"

const RSVP = () => {
  return (
    <Layout title="Kontakt">
      <Container
        pb="60rem"
        pt={["20px", "40px"]}
        bg="pink.100"
        centerContent
        maxW="full"
        overflow="hidden"
      >
        <Box bg="whiteAlpha.700" color="" borderRadius="lg">
          <Heading mt="30px" mb="10px" textAlign="center">
            Kommer du?
          </Heading>
          <Center>
            <Text color="blackAlpha.700" textAlign="center" maxW="400px">
              Vi gleder oss veldig til å se deg! Prøv gjerne å gi oss beskjed om
              du/dere kan (eller ikke) innen 1. februar. Husk at invitasjonen
              gjelder kun de som er nevnt på utsiden av kortet du har mottatt
              fra oss.
            </Text>
          </Center>
          <Center>
            <Box w="xl" mt="40px" p="20px">
              <Form />
            </Box>
          </Center>
        </Box>
      </Container>
    </Layout>
  )
}

const Form = () => {
  return (
    <form
      name="response"
      method="post"
      action="/takk/"
      netlify-honeypot="bot-field"
      data-netlify="true"
      className="contact-us"
    >
      <p class="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <input type="hidden" name="form-name" value="response" />
      <Text mb="5px">Hvem kommer?</Text>
      <Textarea
        name="participants"
        type="text"
        placeholder="Skriv inn fullt navn på alle du svarer for"
        isRequired
        mb={["10px", "30px"]}
        variant="flushed"
        borderColor="green.100"
        focusBorderColor="green.500"
      />
      <Text mb="5px">Allergier?</Text>
      <Input
        mb={["10px", "30px"]}
        placeholder="Fyll inn allergier, og hvem som har det"
        size="sm"
        name="allergies"
        type="text"
        variant="flushed"
        borderColor="green.100"
        focusBorderColor="green.500"
      />
      <Button mt={4} type="submit" colorScheme="pink">
        Send inn
      </Button>
    </form>
  )
}

export default RSVP
