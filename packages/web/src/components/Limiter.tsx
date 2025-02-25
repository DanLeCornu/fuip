import * as React from "react"
import type { BoxProps } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const Limiter: React.FC<BoxProps> = (props) => {
  const px = {
    base: 2,
    md: 10,
    lg: 24,
    xl: 60,
  }
  return <Box w="100%" px={px} {...props} />
}
