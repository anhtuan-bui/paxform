import Skeleton from "react-loading-skeleton";
import ReadArticle from "../ReadArticle/ReadArticle";
import "./RelatedCard.scss";

const RelatedCard = ({ data, readLink, className, loading, term , background}) => {
  const parser = new DOMParser();

  const category = data ? (
    data?.resourceCategories?.nodes[0]?.name
  ) : (
    <Skeleton width={"50%"} />
  );
  const title = data ? data?.title : <Skeleton count={2} />;
  const slug = data?.slug;
  const description = data ? (
    parser
      .parseFromString(data?.content, "text/html")
      .getElementsByTagName("p")[0]?.innerText
  ) : (
    <Skeleton count={3} />
  );
  const image = data?.featuredImage?.node?.sourceUrl;

  const to = `/${term}/${slug}`;

  const readArticle = !loading ? (
    <ReadArticle to={to} />
  ) : (
    <Skeleton width={"75%"} />
  );

  const titleVariant = background  ? `related_card__title--${background}` : ''
  return (
    <div className="related_card">
      <div className="related_card__top">
        {image ? (
          <div className={`${className ? className : ""} related_card__image`}>
            <img src={image} alt="first story" />
          </div>
        ) : (
          <Skeleton height={180} style={{ borderRadius: "20px" }} />
        )}

        {category ? <p className="related_card__category">{category}</p> : ""}

        {title ? (
          <h2 className={`related_card__title ${titleVariant}`}>
            <a className="related_card__title-link" href={to}>{title}</a>
          </h2>
        ) : (
          ""
        )}
        {description ? (
          <p className="related_card__description">{description}</p>
        ) : (
          ""
        )}
      </div>
      <div className="related_card__bottom">{readLink ? readArticle : ""}</div>
    </div>
  );
};

export default RelatedCard;
