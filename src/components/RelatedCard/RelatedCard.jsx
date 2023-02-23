import ReadArticle from "../ReadArticle/ReadArticle";
import "./RelatedCard.scss";

const RelatedCard = (props) => {

    return (
      <div className="related_card">
        <div className="related_card__top">
          {props.image ? (
            <div className={`${props.className} related_card__image`}>
              <img src={props.image} alt="first story" />
            </div>
          ) : (
            ""
          )}

          {props.category ? (
            <p className="related_card__category">{props.category}</p>
          ) : ( 
            ""
          )}

          {props.title ? (
            <h2 className="related_card__title">{props.title}</h2>
          ) : (
            ""
          )}
          {props.description ? (
            <p className="related_card__description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour...
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="related_card__bottom">
          {props.readLink ? <ReadArticle to="related" /> : ""}
        </div>
      </div>
    );
}

export default RelatedCard;
