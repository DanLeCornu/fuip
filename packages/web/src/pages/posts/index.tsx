import * as React from "react"
import { IoMdArrowBack } from "react-icons/io"
import { Box, Center, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import Head from "next/head"
import NextLink from "next/link"

import { HomeLayout } from "components/HomeLayout"
import { Limiter } from "components/Limiter"
import { PostList } from "components/PostList"

export default function Posts() {
  return (
    <Box>
      <Head>
        <title>Fuck You In Particular | Leaderboard</title>
      </Head>
      <Limiter>
        <Center flexDir="column">
          <NextLink passHref href="/">
            <HStack mb={8}>
              <IoMdArrowBack />
              <Text>back to ratings</Text>
            </HStack>
          </NextLink>
          <Stack spacing={1}>
            <Heading as="h1" textAlign="center" fontSize={{ base: "xl", md: "3xl" }}>
              Leaderboard
            </Heading>
            <Heading as="h2" textAlign="center" fontSize={{ base: "sm", md: "lg" }} fontWeight="normal">
              What does the internet hate the most?
            </Heading>
          </Stack>
          <Box my={{ base: 4, md: 16 }}>
            <PostList />
          </Box>
        </Center>
      </Limiter>
    </Box>
  )
}

Posts.getLayout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>
