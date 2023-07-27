import * as React from "react"
import { Box, Center, Heading, HStack, Link, VStack, Text } from "@chakra-ui/react"
import { IoMdArrowForward } from "react-icons/io"
import Head from "next/head"
import NextLink from "next/link"

import { HomeLayout } from "components/HomeLayout"
import { Limiter } from "components/Limiter"
import { RandomPost } from "components/RandomPost"
import { generateDeviceId } from "lib/helpers/deviceId"
import { useLocalStorage } from "lib/hooks/useLocalStorage"
import { DEVICE_ID_STORAGE_NAME } from "lib/static/deviceId"

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
          <VStack>
            <Heading
              as="h1"
              textAlign="center"
              minW="402px" // magic number to always keep on one line, to improve
            >
              Fuck You In Particular
            </Heading>
            <Heading as="h2" textAlign="center" fontSize="lg" fontWeight="normal">
              The Internet's most hated things
            </Heading>
          </VStack>
          <Box my={16}>
            <RandomPost deviceId={deviceId} />
          </Box>
          <NextLink passHref href="/posts">
            <Link>
              <HStack>
                <Text>see the leaderboard</Text>
                <IoMdArrowForward />
              </HStack>
            </Link>
          </NextLink>
        </Center>
      </Limiter>
    </Box>
  )
}

Home.getLayout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>
