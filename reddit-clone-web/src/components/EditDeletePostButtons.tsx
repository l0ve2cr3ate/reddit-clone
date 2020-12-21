import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { FC } from "react";
import { useDeletePostMutation } from "../generated/graphql";

interface EditDeletePostButtonsProps {
  id: number;
}

const EditDeletePostButtons: FC<EditDeletePostButtonsProps> = ({ id }) => {
  const [, deletePost] = useDeletePostMutation();
  return (
    <Box>
      <NextLink href="/post/edit/[id]" as={`/post/edit/${id}`}>
        <IconButton
          as={Link}
          mr={4}
          variant="outline"
          aria-label="Edit post"
          icon={<EditIcon fontSize="16px" />}
        />
      </NextLink>
      <IconButton
        variant="outline"
        onClick={() => deletePost({ id })}
        colorScheme="red"
        aria-label="Delete post"
        icon={<DeleteIcon fontSize="16px" />}
      />
    </Box>
  );
};

export default EditDeletePostButtons;
