import * as React from "react"
import { Box, Stack, Image, Text, Button } from "@chakra-ui/react"
import NextLink from "next/link"

import { Tile } from "./Tile"

export const EverythingVoted = () => {
  return (
    <Tile p={6} w="550px">
      <Stack align="center" spacing={12} position="relative">
        <Box h="300px" w="100%">
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
        <Text fontWeight="bold" fontSize="xl">
          You've voted on everything!
        </Text>
        <NextLink passHref href="/posts/new">
          <Button size="lg" aria-label="Make a suggestion!" colorScheme="green">
            Make a suggestion!
          </Button>
        </NextLink>
      </Stack>
    </Tile>
  )
}
