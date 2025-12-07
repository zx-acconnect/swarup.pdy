
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://swarup-pdy.vercel.app';
const DIST_DIR = path.join(__dirname, '../dist');

// Pages to include in sitemap
const PATHS = [
    '/',
];

const generateSitemap = () => {
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PATHS.map(urlPath => `  <url>
    <loc>${DOMAIN}${urlPath}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${urlPath === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    if (!fs.existsSync(DIST_DIR)) {
        console.log(`Dist directory not found at ${DIST_DIR}. Creating it...`);
        fs.mkdirSync(DIST_DIR, { recursive: true });
    }

    fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapContent);
    console.log('✅ sitemap.xml generated');
};

const generateRobotsTxt = () => {
    const robotsContent = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml`;

    fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsContent);
    console.log('✅ robots.txt generated');
};

const main = () => {
    console.log('Building SEO assets...');
    try {
        generateSitemap();
        generateRobotsTxt();
        console.log('🎉 SEO assets generation complete!');
    } catch (error) {
        console.error('❌ Error generating SEO assets:', error);
        process.exit(1);
    }
};

main();
