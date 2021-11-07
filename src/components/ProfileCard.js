import React from "react"

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react"

import { ImFacebook2, ImLinkedin } from "react-icons/im"
import { FiMail } from "react-icons/fi"

export const ProfileCard = ({
  imageUrl,
  imageAlt,
  name,
  title,
  children,
  facebookUrl,
  linkedInUrl,
  mail,
  badges,
}) => {
  const badgeBgColor = useColorModeValue("gray.50", "gray.800")
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={imageUrl}
          alt={imageAlt}
          mb={4}
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {title}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {children}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          {badges.map(badge => {
            return (
              <Badge px={2} py={1} bg={badgeBgColor} fontWeight={"400"}>
                #{badge}
              </Badge>
            )
          })}
        </Stack>

        <Stack
          mt={8}
          direction={"row"}
          spacing={10}
          alignItems="center"
          justifyItems="center"
          justifyContent="center"
        >
          <Link isExternal href={facebookUrl}>
            <ImFacebook2 />
          </Link>

          <Link href={`mailto:${mail}`}>
            <FiMail />
          </Link>

          <Link isExternal href={linkedInUrl}>
            <ImLinkedin />
          </Link>
        </Stack>
      </Box>
    </Center>
  )
}
