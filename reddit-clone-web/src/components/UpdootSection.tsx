import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { FC } from "react";
import { PostsQuery } from "../generated/graphql";

interface UpdootSectionProps {
  post: PostsQuery["posts"]["posts"][0];
}

const UpdootSection: FC<UpdootSectionProps> = ({ post }) => {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center" mr={4}>
      <IconButton
        aria-label="Upvote post"
        icon={<ChevronUpIcon size="24px" />}
      />
      <Text>{post.points}</Text>
      <IconButton
        aria-label="Downvote post"
        icon={<ChevronDownIcon size="24px" />}
      />
    </Flex>
  );
};

export default UpdootSection;
