import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/queries'
import { Post } from '@/types/post'

// Replace with your actual domain
const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.season26.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all blog posts from Sanity
  const posts = await getAllPosts()
  
  // Create sitemap entries for blog posts
  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt || new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Static routes
  const routes = [
    '',
    '/blog',
    '/about',
    '/contact',
    // Add other static routes here
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }))

  return [...routes, ...blogEntries]
}
