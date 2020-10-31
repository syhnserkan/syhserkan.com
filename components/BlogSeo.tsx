import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

type Props = {
  title: string;
  summary: string;
  publishedAt: string;
  url: string;
  image: string;
};

type Featured = {
  url: string;
  alt: string;
};

const BlogSeo = ({ title, summary, publishedAt, url, image }: Props) => {
  const date = new Date(publishedAt).toISOString();
  const featuredImage: Featured = {
    url: `https://syhnserkan.io${image}`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – Serkan Sayhan`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName="Serkan Sayhan"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Serkan Sayhan"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
