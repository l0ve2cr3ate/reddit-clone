import { FC } from "react";
import { Box, Button, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { useMeQuery } from "../generated/graphql";

const Navbar: FC = () => {
  const [{ data, fetching }] = useMeQuery();
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
        <Button color="white" variant="link">
          Logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex p={4} as="nav" bg="#0891B2">
      <Box ml="auto">{body}</Box>
    </Flex>
  );
};

export default Navbar;
