import * as React from "react"
import { Box } from "@chakra-ui/layout"

import { Limiter } from "./Limiter"
import { Nav } from "./Nav"

interface Props {
  children: React.ReactNode
}

export function HomeLayout(props: Props) {
  // const { colorMode, toggleColorMode } = useColorMode()
  // const isDark = colorMode === "dark"
  return (
    <Box>
      <Nav />
      {/* <NextLink passHref href="/">
        <Link position="fixed" top={6} left={6} sx={{ _hover: { textDecoration: "none" } }}>
          <Text fontWeight="bold" fontSize="2xl">
            FUIP
          </Text>
        </Link>
      </NextLink> */}
      {/* <Flex justify="flex-end">
        <Tooltip label="Toggle Theme">
          <IconButton
            aria-label="toggle theme"
            icon={isDark ? <BiSun /> : <BiMoon />}
            onClick={toggleColorMode}
            variant="ghost"
            m={4}
            size="lg"
          />
        </Tooltip>
      </Flex> */}
      <Limiter pt="120px">{props.children}</Limiter>
    </Box>
  )
}
