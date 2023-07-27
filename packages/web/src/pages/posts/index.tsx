import * as React from "react"
import { IoMdArrowBack } from "react-icons/io"

import { HomeLayout } from "components/HomeLayout"
import { PostList } from "components/PostList"
import { Box, Center, Heading, Link, Stack, HStack, Text } from "@chakra-ui/react"
import Head from "next/head"
import NextLink from "next/link"
import { Limiter } from "components/Limiter"

export default function Posts() {
  return (
    <Box>
      <Head>
        <title>Fuck You In Particular | Leaderboard</title>
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
              Leaderboard
            </Heading>
            <Heading as="h2" textAlign="center" fontSize="lg" fontWeight="normal">
              What does the internet hate the most?
            </Heading>
          </Stack>
          <Box my={12}>
            <PostList />
          </Box>
        </Center>
      </Limiter>
    </Box>
  )
}

Posts.getLayout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>
