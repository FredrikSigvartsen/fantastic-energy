import React, { useState, useEffect } from "react"
import { IconButton } from "@chakra-ui/react"
import _ from "lodash"
import { MinusIcon } from "@chakra-ui/icons"
import Layout from "../components/Layout"
import { navigate } from "gatsby-link"

import {
  Box,
  Input,
  Text,
  Textarea,
  Heading,
  Center,
  Button,
} from "@chakra-ui/react"

const RSVP = () => {
  return (
    <Layout title="Kontakt">
      <Box pb="60rem" h="xl" width="100%">
        <Heading mt="30px" textAlign="center">
          Kommer du?
        </Heading>
        <Center>
          <Box w="xl" mt="40px" p="20px">
            <Form />
          </Box>
        </Center>
      </Box>
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
        placeholder="Fyll inn navn her"
        isRequired
        mb={["10px", "30px"]}
      />
      <Text mb="5px">Allergier?</Text>
      <Input
        mb={["10px", "30px"]}
        placeholder="Fyll inn allergier, og hvem som har det"
        size="sm"
        name="allergies"
        type="text"
      />
      <Button mt={4} type="submit">
        Send inn
      </Button>
    </form>
  )
}

export default RSVP
