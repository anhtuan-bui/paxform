import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import { GET_POSTS } from "../../lib/graphqlQuery";
import BlogCard from "../BlogCard/BlogCard";
import Button from "../Button/Button";
import "./BlogsView.scss";

const BATCH_SIZE = 1;

export default function BlogsView() {
  const firstPost = useQuery(GET_POSTS, {
    variables: { first: 1, after: null },
    notifyOnNetworkStatusChange: true,
  });

  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: {
      first: BATCH_SIZE,
      after: firstPost.data?.posts.pageInfo.endCursor,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (!data && loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!data) {
    return <p>No posts yet</p>;
  }

  const posts = data.posts.edges.map((edge) => edge.node);
  const hasNextPost = data.posts.pageInfo.hasNextPage;

  return (
    <Fragment>
      <div className="posts_view">
        {posts.map((post, index) => (
          <BlogCard key={index} blog={post} />
        ))}
      </div>
      <div className="view_more">
        {hasNextPost ? (
          <Button
            text="View all posts"
            type="arrow outline"
            arrowVariant="down"
            color="green"
            onClick={(e) => {
              e.preventDefault();
              fetchMore({
                variables: {
                  first: BATCH_SIZE,
                  after: data.posts.pageInfo.endCursor,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) return prev;
                  return {
                    ...prev,
                    posts: {
                      ...prev.posts,
                      ...fetchMoreResult.posts,
                      edges: [
                        ...prev.posts.edges,
                        ...fetchMoreResult.posts.edges,
                      ],
                    },
                  };
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
