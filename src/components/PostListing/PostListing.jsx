import React from "react";
import { Card } from "components/common";
import { ListingStyle } from "./styles";

function PostListing({ postEdges }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });

  return (
    <ListingStyle>
      {postList.map((post) => (
        <Card key={`${post.title}-${post.path}`} post={post} />
      ))}
    </ListingStyle>
  );
}

export default PostListing;
