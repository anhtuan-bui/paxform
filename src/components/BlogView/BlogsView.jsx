import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import { GET_POSTS } from "../../lib/graphqlQuery";
import BlogCard from "../BlogCard/BlogCard";
import Button from "../Button/Button";
import "./BlogsView.scss";

const BATCH_SIZE = 2;

export default function BlogsView(props) {
  // get the first post to get the cursor for the first batch of posts
  const { data: firstPost } = useQuery(GET_POSTS, {
    variables: {
      first: 1,
    },
  });

  // get the rest of the posts
  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: {
      first: BATCH_SIZE,
      after: firstPost?.posts?.pageInfo.endCursor,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (!data && loading) return <p>Loading...</p>;

  if (error) return <p>An error occured</p>;

  if (!data) {
    return <p>No posts yet</p>;
  }

  // show only posts that have the selected category
  let posts = data.posts.edges.map((edge) => edge.node);
  const postInfo = data.posts.pageInfo;

  if (props.chip.toLowerCase() !== "all") {
    // set posts to only posts that have the selected category
    posts = posts.filter((post) => {
      const categories = post.categories.edges.map((edge) => edge.node.name);
      return categories.includes(props.chip);
    });
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
