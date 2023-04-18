import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Article.scss";
import Author from "../../components/Author/Author";

const Article = ({ blogArticle, loading }) => {
  let postDate, title, articleImage, articleContent;
  // Converting date format
  const blogDate = () => {
    let postDate = new Date(blogArticle?.post?.date);
    postDate = postDate.toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
    return postDate;
  };
  const articleLoading = () => {
    postDate = <Skeleton width="45%" />;
    title = <Skeleton width="75%" />;
    articleImage = (
      <div className="article_info__img">
        <Skeleton height="100%" borderRadius="20px" />
      </div>
    );
    articleContent = (
      <div className="article-content">
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
    );
  };
  const articleLoaded = () => {
    postDate = blogDate();
    title = blogArticle?.post?.title ?? "";
    articleImage = (
      <img
        className="article_info__img"
        src={blogArticle?.post?.featuredImage?.node?.sourceUrl}
        alt="Article"
      />
    );
    articleContent = (
      <div
        className="article_detail"
        style={{ marginTop: "35px" }}
        dangerouslySetInnerHTML={{ __html: blogArticle?.post?.content }}
      ></div>
    );
  };

  loading ? articleLoading() : articleLoaded();
  return (
    <>
      <section className="article_info">
        <div className="article_info__date section_name">{postDate}</div>
        <h1 className="article_info__title">{title}</h1>
        {articleImage}
      </section>
      <Author
        className="author--blog-detail"
        author={blogArticle?.post?.author}
      />
      <div className="article">{articleContent}</div>
    </>
  );
};

export default Article;
