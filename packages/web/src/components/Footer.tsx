import * as React from "react"
import { Box, HStack, StackDivider, Text, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"

import { DEVICE_ID_STORAGE_NAME } from "lib/static/deviceId"
import { useLocalStorage } from "lib/hooks/useLocalStorage"

export function Footer() {
  const [deviceId] = useLocalStorage(DEVICE_ID_STORAGE_NAME, "")
  return (
    <Box
      position="fixed"
      bottom={0}
      borderTop="1px solid"
      borderColor={useColorModeValue("gray.100", "gray.700")}
      w="100%"
      py={{ base: 1, md: 3 }}
      zIndex={500}
      bg={useColorModeValue("white", "gray.800")}
    >
      <HStack
        divider={<StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />}
        fontSize="sm"
        color="gray.600"
        justify="center"
      >
        <Text>© 2023 FUIP</Text>
        <Text>{deviceId}</Text>
        <Text>v1.0.9</Text>
        <NextLink passHref href="/privacy">
          privacy
        </NextLink>
      </HStack>
    </Box>
  )
}
