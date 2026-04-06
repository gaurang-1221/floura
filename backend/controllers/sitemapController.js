import Blog from '../models/Blog.js';

export const generateSitemap = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true }).select('slug updatedAt');
        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';

        let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Static Routes -->
    <url>
        <loc>${frontendUrl}/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${frontendUrl}/about</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>${frontendUrl}/blog</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>${frontendUrl}/contact</loc>
        <changefreq>yearly</changefreq>
        <priority>0.5</priority>
    </url>
`;

        // Dynamic Routes for Blogs
        blogs.forEach(blog => {
            const date = blog.updatedAt ? new Date(blog.updatedAt).toISOString() : new Date().toISOString();
            xml += `
    <url>
        <loc>${frontendUrl}/blog/${blog.slug}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`;
        });

        xml += `
</urlset>`;

        res.header('Content-Type', 'application/xml');
        res.status(200).send(xml);
    } catch (error) {
        console.error('Error generating sitemap:', error);
        res.status(500).json({ status: 'error', message: 'Could not generate sitemap' });
    }
};
