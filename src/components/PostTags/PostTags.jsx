import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
// import { Button } from "components/common";

function PostTags({ tags }) {
  return (
    <div className="post-tag-container">
      {tags &&
        tags.map((tag) => (
          <Link
            key={tag}
            style={{ textDecoration: "none" }}
            to={`/tags/${_.kebabCase(tag)}`}
          >
            <button type="primary">{tag}</button>
          </Link>
        ))}
    </div>
  );
}

export default PostTags;
