import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import { GET_POSTS } from "../../lib/graphqlQuery";
import BlogCard from "../BlogCard/BlogCard";
import Button from "../Button/Button";
import "./BlogsView.scss";

const BATCH_SIZE = 1;

export default function BlogsView(props) {

  const firstPost = useQuery(GET_POSTS, {
    variables: { first: 1, after: null },
    fetchPolicy: 'no-cache'
  });

  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: {
      first: BATCH_SIZE,
      after: firstPost.data?.posts?.pageInfo.endCursor,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    nextFetchPolicy: "cache-first"
  });

  if (!data && loading) return <p>Loading...</p>;

  if (error) return <p>An error occured</p>;

  if (!data) {
    return <p>No posts yet</p>;
  }
  
  let posts = data.posts.edges
    .map((edge) => edge.node);
  const postInfo = data.posts.pageInfo;

  if (props.chip !== "all") {
    posts = posts.filter(
      (post) => post.categories.edges[0].node.name.toLowerCase() === props.chip.toLowerCase()
    );

  } else {
    posts = data.posts.edges.map((edge) => edge.node);
  }

  return (
    <Fragment>
      <div className="posts_view">
        {posts.map((post, index) => (
          <BlogCard key={index} blog={post} />
        ))}
      </div>
      <div className="view_more">
        {postInfo.hasNextPage ? (
          <Button
            text={loading ? "Loading..." : "View all posts"}
            type="arrow outline"
            arrowVariant="down"
            color="green"
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              fetchMore({
                variables: {
                  after: postInfo.endCursor,
                },
              });
            }}
          />
        ) : (
          <p>All posts loaded.</p>
        )}
      </div>
    </Fragment>
  );
}
