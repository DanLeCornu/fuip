import * as React from "react"
import { Box, Center, Heading, HStack, Link, Stack, Text } from "@chakra-ui/react"
import { IoMdArrowBack } from "react-icons/io"
import Head from "next/head"
import NextLink from "next/link"

import { HomeLayout } from "components/HomeLayout"
import { Limiter } from "components/Limiter"
import { PostForm } from "components/PostForm"
import { useLocalStorage } from "lib/hooks/useLocalStorage"
import { DEVICE_ID_STORAGE_NAME } from "lib/static/deviceId"

export default function NewPost() {
  const [deviceId] = useLocalStorage(DEVICE_ID_STORAGE_NAME, "")
  return (
    <Box>
      <Head>
        <title>Fuck You In Particular | Submit</title>
      </Head>
      <Limiter>
        <Center flexDir="column">
          <NextLink passHref href="/">
            <Link mb={8}>
              <HStack>
                <IoMdArrowBack />
                <Text>back to ratings</Text>
              </HStack>
            </Link>
          </NextLink>
          <Stack>
            <Heading as="h1" textAlign="center">
              Make a suggestion
            </Heading>
            <Heading as="h2" textAlign="center" fontSize="lg" fontWeight="normal">
              What do you hate the most?
            </Heading>
          </Stack>
          <Box my={12}>
            <PostForm deviceId={deviceId} />
          </Box>
        </Center>
      </Limiter>
    </Box>
  )
}

NewPost.getLayout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>
