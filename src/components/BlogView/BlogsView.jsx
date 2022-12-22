import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import { GET_POSTS } from "../../lib/graphqlQuery";
import BlogCard from "../BlogCard/BlogCard";
import Button from "../Button/Button";
import "./BlogsView.scss";

const BATCH_SIZE = 5;

export default function BlogsView() {

  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: {
      first: BATCH_SIZE,
      after: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (!data && loading) return <p>Loading...</p>;

  if (error) return <p>An error occured</p>;

  if (!data) {
    return <p>No posts yet</p>;
  }

  const posts = data.posts.edges.map((edge) => edge.node);
  const postInfo = data.posts.pageInfo;

  return (
    <Fragment>
      <div className="posts_view">
        {posts.map(
          (post, index) => index !== 0 && <BlogCard key={index} blog={post} />
        )}
      </div>
      <div className="view_more">
        {postInfo.hasNextPage ? (
          <Button
            text= {loading? "Loading..." : "View all posts"}
            type="arrow outline"
            arrowVariant="down"
            color="green"
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              fetchMore({
                variables: {
                  after: postInfo.endCursor
                }
              })
            }}
          />
        ) : (
          <p>All posts loaded.</p>
        )}
      </div>
    </Fragment>
  );
}
