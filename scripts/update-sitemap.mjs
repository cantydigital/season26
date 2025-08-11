import fs from 'node:fs';
import path from 'node:path';

// Config with ENV fallbacks
const projectId = process.env.SANITY_PROJECT_ID || '02jhhvr4';
const dataset = process.env.SANITY_DATASET || 'production';
const apiVersion = process.env.SANITY_API_VERSION || '2023-05-03';
const sanityToken = process.env.SANITY_READ_TOKEN || '';
const SITE_URL = process.env.SITE_URL || 'https://www.season26.com';

function toISODate(dateStr) {
  try {
    if (!dateStr) return new Date().toISOString().slice(0, 10);
    return new Date(dateStr).toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

async function fetchPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) { "slug": slug.current, publishedAt }`;
  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;

  const res = await fetch(url, {
    headers: sanityToken ? { Authorization: `Bearer ${sanityToken}` } : undefined,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Sanity query failed: ${res.status} ${res.statusText} - ${text}`);
  }
  const data = await res.json();
  return data.result || [];
}

function buildUrlEntry(loc, lastmod, changefreq = 'weekly', priority = '0.7') {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

async function generateSitemap() {
  const posts = await fetchPosts();

  const today = new Date().toISOString().slice(0, 10);

  const staticUrls = [
    buildUrlEntry(`${SITE_URL}/`, today, 'daily', '1.0'),
    buildUrlEntry(`${SITE_URL}/about`, today, 'weekly', '0.8'),
    buildUrlEntry(`${SITE_URL}/contact`, today, 'monthly', '0.8'),
    buildUrlEntry(`${SITE_URL}/blog`, today, 'daily', '0.9'),
  ];

  const postUrls = (posts || [])
    .filter(p => p?.slug)
    .map(p => buildUrlEntry(`${SITE_URL}/blog/${p.slug}`, toISODate(p.publishedAt), 'weekly', '0.7'));

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticUrls,
    ...postUrls,
    '</urlset>',
    '',
  ].join('\n');

  const outPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, xml);
  console.log(`Sitemap generated with ${staticUrls.length + postUrls.length} entries at: ${outPath}`);
}

generateSitemap().catch(err => {
  console.error('Failed to generate sitemap:', err);
  process.exitCode = 1;
});
