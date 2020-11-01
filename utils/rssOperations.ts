import { StaticBlog } from 'global';

const generateRssItem = (post: StaticBlog): string => `
  <item>
    <guid>https://syhnserkan.com/blog/${post.id}</guid>
    <title>${post.title}</title>
    <link>https://syhnserkan.com/blog/${post.id}</link>
    <description>${post.summary}</description>
    <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
  </item>
`;

export const generateRss = (posts: StaticBlog[]): string => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Serkan Sayhan – Developer, student, curios.</title>
      <link>https://syhnserkan.com/blog</link>
      <description>[...]</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].publishedAt).toUTCString()}</lastBuildDate>
      <atom:link href="https://syhnserkan.com/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`;
