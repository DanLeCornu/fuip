import * as React from "react"
import { AiOutlineStar } from "react-icons/ai"
import { Box, Center, HStack, Image, Stack, Text } from "@chakra-ui/react"

import type { PostItemFragment } from "lib/graphql"

import { Tile } from "./Tile"

interface Props {
  index: number
  post: PostItemFragment
  deviceId: string
  // isVotingDisabled: boolean
}

export function PostItem(props: Props) {
  // const handler = useMutationHandler()

  // const [vote, { loading }] = useVoteMutation({
  //   refetchQueries: [
  //     { query: MyVotesDocument, variables: { deviceId: props.deviceId } },
  //     { query: PostsDocument },
  //   ],
  // })
  // const handleVote = () => {
  //   if (props.isVotingDisabled || loading) return
  //   return handler(
  //     () => vote({ variables: { postId: props.post.id, deviceId: props.deviceId, skip: false } }),
  //     {
  //       // onSuccess: (_, toast) => toast({ description: voteSuccessToast(props.post.title) }),
  //       onServerError: (_, toast) => {
  //         toast({ status: "error", description: "You've already voted for this!" })
  //       },
  //     },
  //   )
  // }

  const isFirst = props.index === 0

  return (
    <Tile p={{ base: 4, md: 6 }} maxW="550px">
      <Stack align="center" spacing={6}>
        <Box h={{ base: "200px", md: "300px" }} w="100%" position="relative">
          <Center
            as={isFirst ? AiOutlineStar : undefined}
            position="absolute"
            p={2}
            top={-2}
            left={-2}
            bg={isFirst ? "yellow.300" : "green.200"}
            rounded="lg"
            boxShadow="lg"
            h="45px"
            w="45px"
            alignItems="baseline"
          >
            <Text display="inline" fontSize="sm">
              #
            </Text>
            <Text display="inline" fontWeight="bold" fontSize="lg">
              {props.index + 1}
            </Text>
          </Center>
          <Image
            alt={props.post.title}
            src={
              props.post.image ||
              "https://www.investopedia.com/thmb/1WsvySVwOtar439kYEFtSwV3eDw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1395371348-a3f9430f269b4f73b2659fe10c21c88c.jpg"
            }
            rounded="lg"
            w="100%"
            h="100%"
            objectFit="cover"
            border="1px solid"
            borderColor="gray.100"
          />
        </Box>
        <Stack spacing={1} align="center">
          <Text fontWeight="bold" fontSize={{ base: "xl", md: "2xl" }}>
            {props.post.title}
          </Text>
          <HStack>
            <Text fontWeight="bold">{props.post.voteCount.toLocaleString()}</Text>
            <Text>vote{props.post.voteCount !== 1 && "s"}</Text>
          </HStack>
        </Stack>
        {/* <HStack w="100%" align="flex-end">
          <Flex justify="flex-end" w="100%">
            {props.isVotingDisabled ? (
              <Tooltip label="You've already voted on this post">
                <Box>
                  <IconButton
                    size="lg"
                    aria-label={`vote for ${props.post.title}}`}
                    icon={<Box as={LiaHandMiddleFingerSolid} boxSize="25px" />}
                    isDisabled
                  />
                </Box>
              </Tooltip>
            ) : (
              <IconButton
                size="lg"
                aria-label={`vote for ${props.post.title}}`}
                icon={<Box as={LiaHandMiddleFingerSolid} boxSize="25px" />}
                onClick={handleVote}
                isLoading={loading}
              />
            )}
          </Flex>
        </HStack> */}
      </Stack>
    </Tile>
  )
}
