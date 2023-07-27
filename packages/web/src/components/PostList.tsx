import { gql } from "@apollo/client"
import { Center, HStack, SimpleGrid, Spinner, Stack, Text } from "@chakra-ui/react"
import { SortOrder, useMyVotesQuery, usePostsQuery } from "lib/graphql"
import { generateDeviceId } from "lib/helpers/deviceId"
import { useLocalStorage } from "lib/hooks/useLocalStorage"
import { DEVICE_ID_STORAGE_NAME } from "lib/static/deviceId"
import * as React from "react"
import { NoData } from "./NoData"
import { PostItem } from "./PostItem"

const _ = gql`
  fragment PostItem on Post {
    id
    title
    image
    voteCount
  }
  query Posts($orderBy: [PostOrderByWithRelationInput!]) {
    posts(orderBy: $orderBy) {
      items {
        ...PostItem
      }
      count
    }
  }
  query MyVotes($deviceId: String!) {
    myVotes(deviceId: $deviceId) {
      postId
    }
  }
`

export function PostList() {
  const [storedDeviceId, setStoredDeviceId] = useLocalStorage(DEVICE_ID_STORAGE_NAME, "")
  const [deviceId, setDeviceId] = React.useState("")

  React.useEffect(() => {
    setDeviceId(generateDeviceId(storedDeviceId, setStoredDeviceId))
  }, [storedDeviceId, setStoredDeviceId])

  const { data, loading } = usePostsQuery({
    fetchPolicy: "cache-and-network",
    variables: { orderBy: { votes: { _count: SortOrder.Desc } } },
  })
  const posts = data?.posts.items || []

  const { data: voteData, loading: voteLoading } = useMyVotesQuery({
    fetchPolicy: "cache-and-network",
    variables: { deviceId },
  })
  const votes = voteData?.myVotes || []

  if ((loading && !data) || (voteLoading && !voteData))
    return (
      <Center h="400px">
        <Spinner />
      </Center>
    )
  if (!posts)
    return (
      <Center h="200px">
        <NoData>There are no posts</NoData>
      </Center>
    )
  return (
    <SimpleGrid>
      <Stack spacing={6}>
        {posts.map((post, i) => (
          <HStack key={i} spacing={8}>
            <Text fontSize="4xl" mb={28}>
              #{i + 1}
            </Text>
            <PostItem
              post={post}
              deviceId={deviceId}
              isVotingDisabled={!!votes.find((v) => v.postId === post.id)}
            />
          </HStack>
        ))}
      </Stack>
    </SimpleGrid>
  )
}
