import "./RelatedBlogs.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useQuery } from "@apollo/client";
import { GET_RELATED_POST } from "../../lib/graphqlQuery";
import RelatedCard from "../../components/RelatedCard/RelatedCard";

const RelatedBlogs = ({ currentCategory, currentId }) => {
  const numberOfRelatedBlogs = 2;
  const { data, loading } = useQuery(GET_RELATED_POST, {
    variables: {
      categoryName: currentCategory,
      id: currentId
    },
  });

  const relatedBlogsLoading = () => {
    let relatedBlogs = [];
    for (let i = 0; i < numberOfRelatedBlogs; i++) {
      relatedBlogs.push(
        <div key={i} className="skeleton-container">
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

  const relatedBlogsLoaded = () => {
    let relatedBlogs = [];
    const postsNodes = data?.posts?.nodes;
    // Filtering all the posts to get 2 random posts from the same category as the current post
    const categoryBlogs = postsNodes
      ?.filter((node) => {
        return (
          node?.categories?.nodes[0]?.name === currentCategory
        );
      })
      .sort(() => 0.5 - Math.random())
      .slice(0, numberOfRelatedBlogs);

    categoryBlogs.forEach((blog) => {
      relatedBlogs.push(
        <RelatedCard key={blog.id} term="blogs" data={blog} readLink={true} />
      );
    });
    return relatedBlogs;
  };

  return (
    <section className="recommended">
      <p className="recommended__title section_name">Recommended</p>
      <div className="recommended_container">
        {loading ? relatedBlogsLoading() : relatedBlogsLoaded()}
      </div>
    </section>
  );
};

export default RelatedBlogs;
