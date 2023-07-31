import * as React from "react"
import { Box } from "@chakra-ui/react"

import { Limiter } from "./Limiter"
import { Nav } from "./Nav"

interface Props {
  children: React.ReactNode
}

export function HomeLayout(props: Props) {
  return (
    <Box>
      <Nav />
      <Limiter pt={{ base: "70px", md: "120px" }}>{props.children}</Limiter>
    </Box>
  )
}
