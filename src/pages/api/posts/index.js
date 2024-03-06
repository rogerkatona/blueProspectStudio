// pages/api/posts/index.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export default function handler(req, res) {
    const filenames = fs.readdirSync(postsDirectory);
    const posts = filenames.map((filename) => {
        const slug = filename.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title,
        };
    });

    res.status(200).json(posts);
}
