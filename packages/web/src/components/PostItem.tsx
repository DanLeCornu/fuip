import * as React from "react"
import { Tile } from "./Tile"
import { Flex, HStack, IconButton, Stack, Text, Image, Box, Tooltip } from "@chakra-ui/react"
import { MyVotesDocument, PostItemFragment, useVoteMutation } from "lib/graphql"
import { LiaHandMiddleFingerSolid } from "react-icons/lia"
import { useMutationHandler } from "lib/hooks/useMutationHandler"
import { voteSuccessToast } from "lib/helpers/voteToast"

interface Props {
  post: PostItemFragment
  deviceId: string
  isVotingDisabled: boolean
}

export function PostItem(props: Props) {
  const handler = useMutationHandler()

  const [vote, { loading }] = useVoteMutation({
    refetchQueries: [{ query: MyVotesDocument, variables: { deviceId: props.deviceId } }],
  })
  const handleVote = () => {
    if (props.isVotingDisabled || loading) return
    return handler(() => vote({ variables: { postId: props.post.id, deviceId: props.deviceId } }), {
      onSuccess: (_, toast) => toast({ description: voteSuccessToast(props.post.title) }),
      onServerError: (_, toast) => {
        toast({ status: "error", description: "You've already voted for this!" })
      },
    })
  }

  return (
    <Tile p={6} w="500px">
      <Stack align="center" spacing={6}>
        <Box h="300px" w="100%">
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
        <Text fontWeight="bold" fontSize="2xl">
          {props.post.title}
        </Text>
        <HStack w="100%" align="flex-end">
          <HStack>
            <Text>votes:</Text>
            <Text fontWeight="bold">{props.post.voteCount.toLocaleString()}</Text>
          </HStack>
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
              />
            )}
          </Flex>
        </HStack>
      </Stack>
    </Tile>
  )
}
