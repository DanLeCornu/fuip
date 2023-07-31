import * as React from "react"
import { gql } from "@apollo/client"
import { Box, Button, Center, Flex, Spinner, Stack } from "@chakra-ui/react"

import { usePostsQuery } from "lib/graphql"
import { generateDeviceId } from "lib/helpers/deviceId"
import { useLocalStorage } from "lib/hooks/useLocalStorage"
import { DEVICE_ID_STORAGE_NAME } from "lib/static/deviceId"

import { NoData } from "./NoData"
import { PostItem } from "./PostItem"

const _ = gql`
  fragment PostItem on Post {
    id
    title
    image
    voteCount
  }
  query Posts($skip: Int) {
    posts(take: 20, skip: $skip) {
      items {
        ...PostItem
      }
      count
    }
  }
  # query MyVotes($deviceId: String!) {
  #   myVotes(deviceId: $deviceId) {
  #     postId
  #   }
  # }
`

export function PostList() {
  const [storedDeviceId, setStoredDeviceId] = useLocalStorage(DEVICE_ID_STORAGE_NAME, "")
  const [deviceId, setDeviceId] = React.useState("")

  React.useEffect(() => {
    setDeviceId(generateDeviceId(storedDeviceId, setStoredDeviceId))
  }, [storedDeviceId, setStoredDeviceId])

  const { data, loading, fetchMore } = usePostsQuery({
    fetchPolicy: "cache-and-network",
  })
  const posts = data?.posts.items || []

  const handleFetchMore = () => {
    if (!posts) return
    return fetchMore({ variables: { skip: posts.length } })
  }

  // const { data: voteData, loading: voteLoading } = useMyVotesQuery({
  //   fetchPolicy: "cache-and-network",
  //   variables: { deviceId },
  // })
  // const votes = voteData?.myVotes || []

  // if ((loading && !data) || (voteLoading && !voteData))
  if (loading && !data)
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
    <Box pb={12}>
      <Stack spacing={6} mb={12}>
        {posts.map((post, i) => (
          <PostItem
            key={i}
            index={i}
            post={post}
            deviceId={deviceId}
            // isVotingDisabled={!!votes.find((v) => v.postId === post.id)}
          />
        ))}
      </Stack>
      <Flex w="100%" justify="center">
        <Button onClick={handleFetchMore} isLoading={loading}>
          Load more
        </Button>
      </Flex>
    </Box>
  )
}
