import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export default async function handler(req, res) {
    // Extract the slug from the query parameters
    const { slug } = req.query;

    // Construct the full path to the markdown file based on the slug
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    // Read the markdown file
    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Optionally, use remark to convert markdown into HTML string
        const processedContent = await remark().use(html).process(matterResult.content);
        const contentHtml = processedContent.toString();

        // Return the post data
        res.status(200).json({
            slug,
            contentHtml,
            ...matterResult.data,
        });
    } catch (err) {
        // If the post doesn't exist or there's an error, return a 404 response
        res.status(404).json({ message: `Post with slug '${slug}' not found.` });
    }
}
