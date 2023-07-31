import * as React from "react"
import { IoMdArrowForward } from "react-icons/io"
import { Box, Center, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import Head from "next/head"
import NextLink from "next/link"

import { generateDeviceId } from "lib/helpers/deviceId"
import { useLocalStorage } from "lib/hooks/useLocalStorage"
import { DEVICE_ID_STORAGE_NAME } from "lib/static/deviceId"
import { HomeLayout } from "components/HomeLayout"
import { Limiter } from "components/Limiter"
import { RandomPost } from "components/RandomPost"

export default function Home() {
  const [storedDeviceId, setStoredDeviceId] = useLocalStorage(DEVICE_ID_STORAGE_NAME, "")
  const [deviceId, setDeviceId] = React.useState("")

  React.useEffect(() => {
    setDeviceId(generateDeviceId(storedDeviceId, setStoredDeviceId))
  }, [storedDeviceId, setStoredDeviceId])

  return (
    <Box>
      <Head>
        <title>Fuck You In Particular</title>
      </Head>

      <Limiter>
        <Center flexDir="column">
          <VStack spacing={1}>
            <Heading as="h1" textAlign="center" fontSize={{ base: "xl", md: "3xl" }}>
              Fuck You In Particular
            </Heading>
            <Heading as="h2" textAlign="center" fontSize={{ base: "sm", md: "lg" }} fontWeight="normal">
              The Internet's most hated things
            </Heading>
          </VStack>
          <Box my={{ base: 4, md: 16 }}>
            <RandomPost deviceId={deviceId} />
          </Box>
          <NextLink passHref href="/posts">
            <HStack>
              <Text>see the leaderboard</Text>
              <IoMdArrowForward />
            </HStack>
          </NextLink>
        </Center>
      </Limiter>
    </Box>
  )
}

Home.getLayout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>
