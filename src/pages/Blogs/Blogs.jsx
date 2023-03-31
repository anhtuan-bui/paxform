import React, { Fragment, Suspense, useState } from "react";
import "./Blogs.scss";
import ReadArticle from "../../components/ReadArticle/ReadArticle";
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import Author from "../../components/Author/Author";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES, GET_POSTS } from "../../lib/graphqlQuery";
import Button from "../../components/Button/Button";
import BlogCard from "../../components/BlogCard/BlogCard";
import Skeleton from "react-loading-skeleton";

export default function Blogs() {
  const [chip, setChip] = useState("all");

  const { loading, data } = useQuery(GET_CATEGORIES);

  const categories = !loading
    ? data?.categories?.nodes
    : Array.from({ length: 3 });

  const handleRadioChange = (event) => {
    setChip(event.target.id);
  };

  return (
    <main className="blogs">
      <section className="hero" background="light">
        <div className="container">
          <div className="hero_blog">
            <div className="hero_blog__wrapper">
              <HeroBlogInfo />
            </div>
          </div>
        </div>
        <div className="hero_graphic">
          <div className="hero_graphic__item hero_graphic__item--blue"></div>
          <div className="hero_graphic__item hero_graphic__item--green"></div>
        </div>
      </section>

      <section className="posts">
        <div className="container">
          <div className="chips">
            {categories.map((category, index) => (
              <Chip
                category={category}
                key={index}
                onChange={handleRadioChange}
                checked={chip.toLowerCase() === category?.slug}
              />
            ))}
          </div>

          <BlogsView chip={chip} />
        </div>
        <SectionTriangleRight variant="footer" />
      </section>
    </main>
  );
}

const Chip = ({ category, onChange, checked }) => {
  return category ? (
    category?.node?.slug !== "uncategorised" && (
      <div className="chip">
        <input
          id={category?.name}
          type="radio"
          name="radio"
          onChange={onChange}
          checked={checked}
        />
        <label htmlFor={category?.name}>{category?.name}</label>
      </div>
    )
  ) : (
    <Fragment>
      <Skeleton width={100} height={33} style={{ borderRadius: "20px" }} />
    </Fragment>
  );
};

const HeroBlogInfo = () => {
  const { loading, data } = useQuery(GET_POSTS, {
    variables: { first: 1, after: null },
    fetchPolicy: "no-cache",
  });

  const blog = data?.posts?.nodes[0];

  const headline = !loading ? "BLOG TODAYS" : <Skeleton width={100} />;
  const title = !loading ? (
    blog?.title
  ) : (
    <Fragment>
      <Skeleton />
      <Skeleton width={"75%"} />
    </Fragment>
  );

  // Get the first paragraph of the blog
  const parser = new DOMParser();
  const firstParagraph = blog ? (
    parser.parseFromString(blog?.content, "text/html").querySelector("p")
      .innerText
  ) : (
    <Fragment>
      <Skeleton count={2} />
      <Skeleton width={"75%"} />
    </Fragment>
  );

  return (
    <Fragment>
      <div className="hero_blog__image">
        {!loading ? (
          <img src={blog?.featuredImage?.node?.sourceUrl} alt="blog hero" />
        ) : (
          <Skeleton height={380} style={{ borderRadius: "20px" }} />
        )}
      </div>
      <div className="hero_blog__content">
        <div className="hero_blog__content-box">
          <p className="section_name hero_blog__name">{headline}</p>
          <h1 className="hero_blog__title section_title">{title}</h1>

          <p className="hero_blog__summary section__description">
            {firstParagraph}
          </p>

          <ReadArticle id={blog?.id} loading={loading} />
        </div>

        <Author author={blog?.author} />
      </div>
    </Fragment>
  );
};

const BlogsView = ({ chip }) => {
  const batchSize = 8;
  // get the first post to get the cursor for the first batch of posts
  const { data: firstPost } = useQuery(GET_POSTS, {
    variables: {
      first: 1,
    },
  });

  // get the rest of the posts
  const { loading, data, fetchMore } = useQuery(GET_POSTS, {
    variables: {
      first: batchSize,
      after: firstPost?.posts?.pageInfo.endCursor,
    },
    notifyOnNetworkStatusChange: true,
  });

  // show only posts that have the selected category
  let posts = !loading ? data?.posts?.nodes : Array.from({ length: 8 });
  const postInfo = data?.posts?.pageInfo;

  if (chip.toLowerCase() !== "all") {
    // set posts to only posts that have the selected category
    posts = posts?.filter((post) => {
      const categories = post?.categories?.nodes.map((node) => node.name);
      return categories.includes(chip);
    });
  }

  return (
    <Fragment>
      <div className="posts_view">
        {posts.map((post, index) => (
          <BlogCard key={index} blog={post} loading={loading} />
        ))}
      </div>
      <div className="view_more">
        {postInfo?.hasNextPage ? (
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
                  first: batchSize,
                  after: data?.posts?.pageInfo?.endCursor,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) return prev;
                  return {
                    ...prev,
                    posts: {
                      ...prev?.posts,
                      ...fetchMoreResult?.posts,
                      nodes: [
                        ...prev?.posts?.nodes,
                        ...fetchMoreResult.posts.nodes,
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
};
