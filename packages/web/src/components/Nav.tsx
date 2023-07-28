import * as React from "react"
import { BiMoon, BiSun } from "react-icons/bi"
// import { GiHamburgerMenu } from "react-icons/gi"
import {
  // Avatar,
  Box,
  Fade,
  HStack,
  IconButton,
  // LinkProps,
  // Menu,
  // MenuButton,
  // MenuDivider,
  // MenuItem,
  // MenuList,
  Tooltip,
  useColorMode,
  useColorModeValue,
  Text,
  Button,
} from "@chakra-ui/react"
import NextLink from "next/link"
// import { useRouter } from "next/router"

// import { Role } from "lib/graphql"
// import { useLogout } from "lib/hooks/useLogout"
// import { useMe } from "lib/hooks/useMe"

import { Limiter } from "./Limiter"
// import { LinkButton } from "./LinkButton"

export function Nav() {
  // const { me, loading } = useMe()
  // const logout = useLogout()
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
        py={{ base: 4, md: 3 }}
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
          {/* <HomeLink
            href="/"
            // color={useColorModeValue("green.600", "green.400")}
            pl={0}
            // textTransform="uppercase"
            // fontWeight="bold"
          >
            <Text fontWeight="bold" fontSize="2xl">
              FUIP
            </Text>
          </HomeLink> */}
        </HStack>

        {/* Right link list */}

        {/* {!me && !loading && ( */}
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
        {/* )} */}

        {/* Right menu list */}
        {/* <Menu placement="bottom-end">
          <MenuButton
            as={IconButton}
            display={{ base: "flex", md: me ? "flex" : "none" }}
            variant="ghost"
            borderRadius="full"
            icon={me ? <Avatar size="xs" src={me.avatar || undefined} /> : <Box as={GiHamburgerMenu} />}
          />

          <MenuList fontSize="md">
            {me ? (
              <>
                <NextLink passHref href="/profile">
                  <MenuItem icon={<Box as={BiUser} boxSize="16px" />}>Profile</MenuItem>
                </NextLink>
                {me.role === Role.Admin && (
                  <NextLink passHref href="/admin">
                    <MenuItem icon={<Box as={BiCog} boxSize="16px" />}>Admin</MenuItem>
                  </NextLink>
                )}
                <MenuDivider />
                <MenuItem
                  closeOnSelect={false}
                  icon={<Box as={isDark ? BiSun : BiMoon} boxSize="16px" />}
                  onClick={toggleColorMode}
                >
                  Toggle theme
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => logout()} icon={<Box as={BiExit} boxSize="16px" />}>
                  Logout
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem
                  closeOnSelect={false}
                  icon={<Box as={isDark ? BiSun : BiMoon} boxSize="16px" />}
                  onClick={toggleColorMode}
                >
                  Toggle theme
                </MenuItem>
                <MenuDivider />
                <NextLink passHref href="/login">
                  <MenuItem>Login</MenuItem>
                </NextLink>
                <NextLink passHref href="/register">
                  <MenuItem fontWeight="semibold">Register</MenuItem>
                </NextLink>
              </>
            )}
          </MenuList>
        </Menu> */}
      </Limiter>
    </Box>
  )
}

// interface HomeLinkProps extends LinkProps {
//   href: string
// }

// function HomeLink({ href, ...props }: HomeLinkProps) {
//   const { asPath } = useRouter()
//   const isActive = asPath === href

//   return (
//     <NextLink passHref href={href}>
//       <Link
//         px={4}
//         py={2}
//         textDecor="none !important"
//         _hover={{ color: isActive ? "green.600" : "green.500" }}
//         color={isActive ? "green.600" : "gray.500"}
//         {...props}
//       >
//         {props.children}
//       </Link>
//     </NextLink>
//   )
// }
