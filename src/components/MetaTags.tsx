import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export type MetaTagsProps = {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  children?: React.ReactNode;
};

export function MetaTags({
  title,
  description,
  image,
  path,
  children,
}: MetaTagsProps) {
  const {
    site: {
      siteMetadata: {
        title: defaultTitle,
        description: defaultDescription,
        image: defaultImage,
        siteUrl,
        pathPrefix,
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
          pathPrefix
        }
      }
    }
  `);

  const meta = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathPrefix}${path || ``}`,
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="image" content={meta.image} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      {children}
    </>
  );
}
