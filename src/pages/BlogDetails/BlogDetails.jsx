import "./BlogDetails.scss";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BLOG_DETAILS, GET_RELATED_POST } from "../../lib/graphqlQuery";
import Author from "../../components/Author/Author";
import RelatedCard from "../../components/RelatedCard/RelatedCard";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import LatestBlogs from "../../components/LatestBlogs/LatestBlogs";
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogDetails = () => {
  // Current Blog Slug
  const slug = useLocation().pathname.split("/").pop();
  // Querying Current Blog
  const { loading, data } = useQuery(GET_BLOG_DETAILS, {
    variables: { slug },
  });
  // Querying other posts to get related blogs
  const { loading: loadingPosts, data: dataPosts } = useQuery(
    GET_RELATED_POST,
    {
      variables: {
        categoryName: "story",
      },
    }
  );

  // -> Extracting the related blogs
  // Displaying 2 skeletons while loading
  const relatedBlogsLoading = () => {
    let relatedBlogs = [];
    for (let i = 0; i < 1; i++) {
      relatedBlogs.push(
        <div key={i} style={{ display: "flex", flexDirection: "column" }}>
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
    return relatedBlogs;
  };

  // Posts finished loading
  const relatedBlogsLoaded = () => {
    let relatedBlogs = [];
    // All the posts nodes
    const postsNodes = dataPosts?.posts?.nodes;
    // Current post category
    const currentCategory = data?.post?.categories?.nodes[0]?.name ?? "";
    // Filtering all the posts to get posts from the same category as the current post
    const categoryBlogs = postsNodes?.filter((node) => {
      return (
        node?.slug !== slug &&
        node?.categories?.nodes[0]?.name === currentCategory
      );
    });

    // Shuffling the posts to pick random ones
    const shuffledBlogs = [...categoryBlogs].sort(() => 0.5 - Math.random());
    // Picking 2 random posts
    const recommendedBlogs = shuffledBlogs.slice(0, 1);
    // Looping through the recommended blogs array to pass the props to RealtedCard Component
    recommendedBlogs.forEach((blog) => {
      // let recommendedCategory = blog?.categories?.nodes[0]?.name ?? "";
      // let blogTitle = blog?.title ?? "";
      // let blogImage = blog?.featuredImage?.node?.sourceUrl ?? "";
      // // Extracting the <p> tag from blog's content
      // const description = new DOMParser()
      //   .parseFromString(blog.content, "text/html")
      //   .getElementsByTagName("p")[0].innerText;
      relatedBlogs.push(
        <RelatedCard
          key={blog.id}
          // image={blogImage}
          // category={recommendedCategory}
          // title={blogTitle}
          // description={description}
          term="blogs"
          data={blog}
          readLink={true}
        />
      );
    });
    return relatedBlogs;
  };

  // -> Current Blog Details
  let authorNode, imgSrc, post;
  if (!loading) {
    post = data?.post;
    authorNode = post?.author?.node;
    imgSrc = post?.featuredImage?.node?.sourceUrl ?? "";
  }

  // Converting date format
  const blogDate = () => {
    let postDate = new Date(post?.date);
    postDate = postDate.toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
    return postDate;
  };

  const postDate = loading ? <Skeleton width="45%" /> : blogDate();
  const title = loading ? <Skeleton width="75%" /> : post?.title ?? "";
  const authorName = loading ? (
    <Skeleton />
  ) : (
    `${authorNode?.firstName ?? ""} ${authorNode?.lastName ?? ""}`
  );
  const displayName = loading ? (
    <Skeleton />
  ) : (
    authorNode?.roles?.nodes[0]?.displayName ?? ""
  );
  const authorAvatar = loading ? (
    <Skeleton height="50px" width="50px" borderRadius="50%" />
  ) : (
    <img
      className="author__photo"
      src={authorNode?.avatar?.url}
      alt="Author Avatar"
    />
  );

  const articleImage = loading ? (
    <div className="article_info__img">
      <Skeleton height="100%" borderRadius="20px" />
    </div>
  ) : (
    <img className="article_info__img" src={imgSrc} alt="Article" />
  );

  const article = loading ? (
    <div style={{ marginTop: "35px" }}>
      <h2>
        <Skeleton count={1} width="75%" />
      </h2>
      <p>
        <Skeleton count={5} />
      </p>
      <p>
        <Skeleton count={5} />
      </p>
      <p>
        <Skeleton count={5} />
      </p>
      <p>
        <Skeleton count={5} />
      </p>
      <p>
        <Skeleton count={5} />
      </p>
    </div>
  ) : (
    <div
      className="article_detail"
      style={{ marginTop: "35px" }}
      dangerouslySetInnerHTML={{ __html: post?.content }}
    ></div>
  );

  const relatedPosts =
    !loading && !loadingPosts ? relatedBlogsLoaded() : relatedBlogsLoading();

  return (
    <>
      <div className="container hero" background="light">
        <main className="blog_detail__main">
          <section className="article_info">
            <div className="article_info__date section_name">{postDate}</div>
            <h1 className="article_info__title">{title}</h1>
            {articleImage}
          </section>
          <Author
            className="author--blog-detail"
            avatar={authorAvatar}
            name={authorName}
            displayName={displayName}
            author={post?.author}
          />
          <div className="article">{article}</div>
          <SocialIcons />
          <section className="recommended">
            <p className="recommended__title section_name">Recommended</p>
            <div className="recommended_container">{relatedPosts}</div>
          </section>
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
