import "./BlogDetails.scss";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BLOG_DETAILS } from "../../lib/graphqlQuery";
import ShareToSocialMedias from "../../components/ShareToSocialMedias/ShareToSocialMedias";
import LatestBlogs from "../../components/LatestBlogs/LatestBlogs";
import RelatedBlogs from "../../components/RelatedBlogs/RelatedBlogs";
import Article from "../../components/Article/Article";
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import "react-loading-skeleton/dist/skeleton.css";

import HelmetHead from "../../components/HelmetHead/HelmetHead";

const BlogDetails = () => {
  const parser = new DOMParser();
  const url = window.location.href;
  // Current Blog Slug
  const slug = useLocation().pathname.split("/").pop();
  // Querying Current Blog
  const { loading, data } = useQuery(GET_BLOG_DETAILS, {
    variables: { slug },
  });

  // -> Current Blog Details
  const title = !loading ? data?.post?.title : "";
  const currentCategory = !loading
    ? data?.post?.categories?.nodes[0]?.name
    : "";
  const imgSrc = !loading ? data?.post?.featuredImage?.node?.sourceUrl : "";
  const id = !loading ? data?.post?.databaseId : null;
  const description = !loading
    ? parser
        .parseFromString(data?.post?.content, "text/html")
        .querySelector("p").innerText
    : "";

  return (
    <>
      <HelmetHead url={url} title={title} description={description} image={imgSrc}/>
      <div className="container hero" background="light">
        <main className="blog_details__main">
          <Article blogArticle={data} loading={loading} />
          <ShareToSocialMedias
            slug={slug}
            title={title}
            term="blogs"
            imageUrl={imgSrc}
            className="blog-details-social"
          />
          <RelatedBlogs
            currentSlug={slug}
            currentCategory={currentCategory}
            currentId={id}
          />
        </main>
      </div>
      <div className="latest_blogs__container">
        <SectionTriangleRight variant="dark-blue" />
        <LatestBlogs triangleColor="light-blue" />
      </div>
      <div className="footer_triangle">
        <SectionTriangleRight variant="light-blue" />
      </div>
    </>
  );
};

export default BlogDetails;
