import { FC } from "react";
import { Box, Button, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { isServer } from "../utils/isServer";

const Navbar: FC = () => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  // Server doesn't have cookie, so skip me-query when ssr.
  const [{ data, fetching }] = useMeQuery({ pause: isServer() });
  let body = null;

  // data is loading
  if (fetching) {
  }
  // user is not logged in
  else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link color="white" mr={2}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">Register</Link>
        </NextLink>
      </>
    );
    // user is logged in
  } else {
    body = (
      <Flex>
        <Box mr={2} color="white">
          {data.me.username}
        </Box>
        <Button
          isLoading={logoutFetching}
          onClick={() => logout()}
          color="white"
          variant="link"
        >
          Logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex position="sticky" zIndex={1} top={0} p={4} as="nav" bg="#0891B2">
      <Box ml="auto">{body}</Box>
    </Flex>
  );
};

export default Navbar;
