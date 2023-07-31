import * as React from "react"
import { IoMdAdd } from "react-icons/io"
import { Box, Button, Image, Stack, Text } from "@chakra-ui/react"
import NextLink from "next/link"

import { Tile } from "./Tile"

export const EverythingVoted = () => {
  return (
    <Tile p={{ base: 4, md: 6 }} maxW="550px">
      <Stack align="center" spacing={{ base: 6, md: 12 }} position="relative">
        <Box h={{ base: "200px", md: "300px" }} w="100%">
          <Image
            alt="You've voted on everything"
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGw3enBobmtsankxZWg1ejFrZGFuZnloYWhqa3Y4NDg5NWJocm10aSZlcD12MV92aWRlb3Nfc2VhcmNoJmN0PXY/gzQQaZWUjSomCaUimW/giphy.gif"
            rounded="lg"
            w="100%"
            h="100%"
            objectFit="cover"
            border="1px solid"
            borderColor="gray.100"
          />
        </Box>
        <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
          You've voted on everything!
        </Text>
        <NextLink passHref href="/posts/new">
          <Button
            size={{ base: "md", md: "lg" }}
            aria-label="Make a suggestion!"
            colorScheme="green"
            leftIcon={<Box as={IoMdAdd} />}
          >
            Make a suggestion
          </Button>
        </NextLink>
      </Stack>
    </Tile>
  )
}
