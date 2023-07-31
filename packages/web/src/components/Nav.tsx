import * as React from "react"
import { BiMoon, BiSun } from "react-icons/bi"
import { HiMenuAlt3 } from "react-icons/hi"
import { IoMdAdd } from "react-icons/io"
import {
  Box,
  Button,
  Fade,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import NextLink from "next/link"

import { Limiter } from "./Limiter"

export function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Box
      w="100%"
      pos="fixed"
      top={0}
      left={0}
      borderBottom="1px solid"
      borderColor={useColorModeValue("gray.100", "gray.700")}
      zIndex={500}
    >
      <Limiter
        display="flex"
        transition="200ms all"
        py={{ base: 0, md: 3 }}
        bg={useColorModeValue("white", "gray.800")}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        {/* Left link list */}
        <HStack>
          <NextLink passHref href="/">
            <Text fontWeight="bold" fontSize="2xl" sx={{ _hover: { textDecoration: "none" } }} px={4} py={2}>
              FUIP
            </Text>
          </NextLink>
        </HStack>

        {/* Right link list */}
        <Fade in>
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            <Tooltip label="Toggle Theme">
              <IconButton
                aria-label="toggle theme"
                icon={isDark ? <BiSun /> : <BiMoon />}
                onClick={toggleColorMode}
                variant="ghost"
                size="lg"
              />
            </Tooltip>
            <NextLink passHref href="/posts/new">
              <Button colorScheme="green">Make a suggestion!</Button>
            </NextLink>
          </HStack>
        </Fade>

        {/* Right menu list */}
        <Menu placement="bottom-end">
          <MenuButton
            as={IconButton}
            display={{ base: "flex", md: "none" }}
            variant="ghost"
            borderRadius="full"
            icon={<Box as={HiMenuAlt3} boxSize="25px" />}
          />

          <MenuList fontSize="md">
            <MenuItem
              closeOnSelect={false}
              icon={<Box as={isDark ? BiSun : BiMoon} boxSize="16px" />}
              onClick={toggleColorMode}
            >
              Toggle theme
            </MenuItem>
            <MenuDivider />
            <NextLink passHref href="/posts/new">
              <MenuItem icon={<Box as={IoMdAdd} />}>Make a suggestion!</MenuItem>
            </NextLink>
          </MenuList>
        </Menu>
      </Limiter>
    </Box>
  )
}
