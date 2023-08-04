import * as React from "react"
import { LiaHandMiddleFingerSolid } from "react-icons/lia"
import { MdNavigateNext } from "react-icons/md"
import { gql } from "@apollo/client"
import {
  Box,
  Button,
  Center,
  Image,
  Kbd,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
  Tooltip,
  useEventListener,
} from "@chakra-ui/react"

import { PostType, useGetRandomPostQuery, useVoteMutation } from "lib/graphql"
import { useMutationHandler } from "lib/hooks/useMutationHandler"

import { EverythingVoted } from "./EverythingVoted"
import { NoData } from "./NoData"
import { Tile } from "./Tile"

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
  mutation Vote($postId: String!, $deviceId: String!, $skip: Boolean!) {
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
  const handleVote = (skip: boolean) => {
    if (loading || voteLoading) return
    return handler(
      () =>
        vote({
          variables: {
            postId: post?.id || "",
            deviceId: props.deviceId,
            skip,
          },
        }),
      {
        onSuccess: () => {
          // if (!skip) toast({ description: voteSuccessToast(post?.title || "") })
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
      handleVote(false)
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
  }
  if (!loading && !post) {
    return (
      <Center>
        <NoData>Error fetching post</NoData>
      </Center>
    )
  }

  return (
    <Tile p={{ base: 4, md: 6 }} maxW="550px" m="0 auto">
      <Stack align="center" spacing={{ base: 6, md: 12 }} position="relative">
        <Box h={{ base: "200px", md: "300px" }} w="100%">
          <Skeleton isLoaded={!loading && !!post} w="100%" h="100%" rounded="lg">
            <Image
              alt={post?.title}
              src={post?.image || ""}
              rounded="lg"
              w="100%"
              h="100%"
              objectFit="cover"
              border="1px solid"
              borderColor="gray.100"
            />
          </Skeleton>
        </Box>
        <SkeletonText isLoaded={!loading && !!post} noOfLines={1} h="27px">
          <Text fontWeight="bold" fontSize={{ base: "lg", md: "2xl" }}>
            {post?.title}
          </Text>
        </SkeletonText>
        <Stack w={{ base: "100%", md: "auto" }}>
          <Stack align="center">
            <Button
              w="100%"
              size={{ base: "md", md: "lg" }}
              aria-label={`vote for ${post?.title}}`}
              rightIcon={<Box as={LiaHandMiddleFingerSolid} boxSize="25px" />}
              onClick={() => handleVote(false)}
              colorScheme="green"
              isLoading={loading}
            >
              {buttonText}
            </Button>
            <Box display={{ base: "none", md: "flex" }}>
              <Tooltip label="You can use the enter/return key as a hotkey for this button">
                <Kbd>enter</Kbd>
              </Tooltip>
            </Box>
          </Stack>
          <Box position={{ base: "relative", md: "absolute" }} bottom={0} right={{ base: 0, md: 1 }}>
            <Stack align="center">
              <Button
                w="100%"
                variant="outline"
                onClick={() => handleVote(true)}
                rightIcon={<Box as={MdNavigateNext} boxSize="20px" />}
                isLoading={loading}
              >
                next
              </Button>
              <Box display={{ base: "none", md: "flex" }}>
                <Tooltip label="You can use the right arrow key as a hotkey for this button">
                  <Kbd>{">"}</Kbd>
                </Tooltip>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Tile>
  )
}
