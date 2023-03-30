import React from "react";
import Button from "../Button/Button";
import RelatedCard from "../RelatedCard/RelatedCard";
import "./LatestBlogs.scss";
import { useQuery } from "@apollo/client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GET_RECOMMENDED_POSTS } from '../../lib/graphqlQuery'

export default function LatestBlogs({ triangleColor }) {

  const { loading, error, data } = useQuery(GET_RECOMMENDED_POSTS);
  console.log(error);

  let recentPosts = [];
  let latestBlogs = [];
  
  // Display skeletons while loading
  if (loading) {
    for (let i = 0; i <= 3; i++) {
      latestBlogs.push(
        <div key={i}>
          <Skeleton height="250px" borderRadius="20px" />
          <div>
            <p>
              <Skeleton count={1} width="50%" />
            </p>
            <h2>
              <Skeleton count={1} />
            </h2>
            <p>
              <Skeleton count={2} />
            </p>
          </div>
        </div>
      );
    }
  }
  // When loading is finished 
  else {
    let postsNodes = data?.posts?.nodes;
    // Sort the posts by dates and get the latest 4 posts
    recentPosts = [...postsNodes];
    // Creating an array of the latest 4 blogs in RelatedCard Components
    
    recentPosts.forEach((recentPost) => {
      // Extracting the <p> tag from blog's content
      const description = new DOMParser()
        .parseFromString(recentPost.content, "text/html")
        .getElementsByTagName("p")[0].innerText;
      latestBlogs.push(
        <RelatedCard
          key={recentPost.id}
          image={recentPost.featuredImage?.node?.sourceUrl ?? ""}
          category={recentPost.categories?.nodes[0]?.name ?? ""}
          description={description ?? ""}
          title={recentPost.title}
          readLink
        />
      );
    });
  }

  return (
    <section className="platform background--dark-blue platform__title--white">
      <div className="container platform__container">
        <div className="platform__top">
          <div className="platform__top-left">
            <p className="platform__name platform__name--green section_name">
              PAXFORM BLOG
            </p>
            <h2 className="platform__title section_title">
              Latest Blog’s from Paxform.
            </h2>
          </div>
          <div className="platform__top-right">
            <Button type="outline arrow" text="See All Blog Post" />
          </div>
        </div>
        <div className="platform__content">
          {latestBlogs}
        </div>
      </div>
      <div
        className={`bottom_triangle bottom_triangle--${triangleColor}`}
      ></div>
    </section>
  );
}
