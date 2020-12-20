import { Heading, Text } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { usePostQuery } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

const Post = () => {
  const router = useRouter();
  const intId =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  const [{ data, error, fetching }] = usePostQuery({
    pause: intId === -1,
    variables: { id: intId },
  });

  if (error) {
    return <Layout>{error.message}</Layout>;
  }

  if (fetching) {
    return <Layout>Loading...</Layout>;
  }

  if (!data?.post) {
    return (
      <Layout>
        <Text>Could not find post</Text>
      </Layout>
    );
  }

  return (
    <Layout>
      <Heading mb={4}>{data.post.title}</Heading>
      <Text>{data.post.text}</Text>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
