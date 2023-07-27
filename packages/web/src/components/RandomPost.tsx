import * as React from "react"
import { Center, Text, Image, Stack, Button, Box, Kbd, Tooltip, useEventListener } from "@chakra-ui/react"
import { MdNavigateNext } from "react-icons/md"
import { LiaHandMiddleFingerSolid } from "react-icons/lia"
import gql from "graphql-tag"

import { PostType, useGetRandomPostQuery, useVoteMutation } from "lib/graphql"

import { voteSuccessToast } from "lib/helpers/voteToast"
import { useMutationHandler } from "lib/hooks/useMutationHandler"
import { NoData } from "./NoData"
import { Tile } from "./Tile"
import { EverythingVoted } from "./EverythingVoted"

const _ = gql`
  fragment RandomPost on Post {
    id
    title
    image
    type
  }
  query GetRandomPost($deviceId: String!) {
    randomPost(deviceId: $deviceId) {
      ...RandomPost
    }
  }
  mutation Vote($postId: String!, $deviceId: String!, $skip: Boolean) {
    createVote(postId: $postId, deviceId: $deviceId, skip: $skip)
  }
`

interface Props {
  deviceId: string
}

export function RandomPost(props: Props) {
  const handler = useMutationHandler()

  const { data, loading, refetch, error } = useGetRandomPostQuery({
    fetchPolicy: "cache-and-network",
    variables: { deviceId: props.deviceId },
  })
  const post = data?.randomPost

  const [vote, { loading: voteLoading }] = useVoteMutation()
  const handleVote = (skip?: boolean) => {
    if (loading || voteLoading) return
    return handler(
      () =>
        vote({
          variables: {
            postId: post?.id || "",
            deviceId: props.deviceId,
            skip: !!skip,
          },
        }),
      {
        onSuccess: (_, toast) => {
          if (!skip) toast({ description: voteSuccessToast(post?.title || "") })
          refetch()
        },
        onServerError: (_, toast) => {
          toast({ status: "error", description: "You've already voted for this!" })
        },
      },
    )
  }

  useEventListener("keydown", (event) => {
    if (error?.message === "All posts voted on") return
    if (event.key === "Enter") {
      handleVote()
    } else if (event.key === "ArrowRight") {
      handleVote(true)
    }
  })

  let buttonText
  switch (post?.type as PostType) {
    case PostType.Person:
      buttonText = "fuck them"
      break
    case PostType.Groups:
      buttonText = "fuck them"
      break
    default:
      buttonText = "fuck that"
      break
  }

  if (error?.message === "All posts voted on") {
    return <EverythingVoted />
  } else if (!loading && !post) {
    return (
      <Center>
        <NoData>Error fetching post</NoData>
      </Center>
    )
  } else if (post) {
    return (
      <Tile p={6} w="550px">
        <Stack align="center" spacing={12} position="relative">
          <Box h="300px" w="100%">
            <Image
              alt={post.title}
              src={
                post.image ||
                "https://www.investopedia.com/thmb/1WsvySVwOtar439kYEFtSwV3eDw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1395371348-a3f9430f269b4f73b2659fe10c21c88c.jpg" // Elon
              }
              rounded="lg"
              w="100%"
              h="100%"
              objectFit="cover"
              border="1px solid"
              borderColor="gray.100"
            />
          </Box>
          <Text fontWeight="bold" fontSize="2xl">
            {post.title}
          </Text>
          <Stack align="center">
            <Button
              size="lg"
              aria-label={`vote for ${post.title}}`}
              leftIcon={<Box as={LiaHandMiddleFingerSolid} boxSize="25px" />}
              onClick={() => handleVote()}
              colorScheme="green"
            >
              {buttonText}
            </Button>
            <Tooltip label="You can use the enter/return key as a hotkey for this button">
              <Kbd>enter</Kbd>
            </Tooltip>
          </Stack>
          <Box position="absolute" bottom={0} right={1}>
            <Stack align="center">
              <Button
                variant="outline"
                onClick={() => handleVote(true)}
                rightIcon={<Box as={MdNavigateNext} boxSize="20px" />}
              >
                next
              </Button>
              <Tooltip label="You can use the right arrow key as a hotkey for this button">
                <Kbd>{">"}</Kbd>
              </Tooltip>
            </Stack>
          </Box>
        </Stack>
      </Tile>
    )
  } else {
    return null
  }
}
