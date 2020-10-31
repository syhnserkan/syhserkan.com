import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { StaticBlog } from 'global';

const postsDirectory = path.join(process.cwd(), 'pages/blog');

export function getSortedPostsData() {
  // Get file names under /blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: StaticBlog[] = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mergedData = { id, ...matterResult.data } as any;
    // Combine the data with the i

    return mergedData;
  });
  return allPostsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

// export async function getPostData(id: string) {
//   const fullPath = path.join(postsDirectory, `${id}.mdx`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark().use(html).process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data,
//   };
// }
