import { Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

import EditDeletePostButtons from "../../components/EditDeletePostButtons";
import Layout from "../../components/Layout";
import { useGetPostFromUrl } from "../../utils/useGetPostFormUrl";
import { withApollo } from "../../utils/withApollo";

const Post: FC = () => {
  const { data, error, loading } = useGetPostFromUrl();

  if (error) {
    return <Layout>{error.message}</Layout>;
  }

  if (loading) {
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
      <Text mb={4}>{data.post.text}</Text>
      <EditDeletePostButtons
        id={data.post.id}
        creatorId={data.post.creator.id}
      />
    </Layout>
  );
};

export default withApollo({ ssr: true })(Post);
