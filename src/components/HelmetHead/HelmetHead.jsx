import React from "react";
import { Helmet } from "react-helmet-async";

export default function HelmetHead({ url, title, description, image }) {
  return (
    <Helmet prioritizeSeoTags>
      <meta property="og:type" content="article" />
      <title>{`Paxform | ${title}`} </title>
      <meta property="og:whatsapp" content="share"></meta>
      <meta name="pinterest-rich-pin" content="true"></meta>

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <meta property="linkedin:url" content={url} />
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={image} />
    </Helmet>
  );
}
