import { getAllPosts } from '@/lib/queries';
import { Post } from '@/types/post';
import { Metadata } from 'next';
import BlogPostCard from '@/app/components/BlogPostCard';
import { generateMetadata } from '../metadata';

export const metadata: Metadata = {
  ...generateMetadata(
    'Blog | Season26',
    'Read our latest articles and blog posts about life in your mid-20s, personal growth, and navigating the beautiful chaos of adulthood.',
    '/blog',
    '/og-image.jpg'
  ),
  keywords: 'Season26 blog, lifestyle blog, personal growth, mid-20s life, blog posts'
};

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No posts found</h2>
          <p className="text-gray-600 dark:text-gray-400">Check back later for new content.</p>
        </div>
      )}
    </div>
  );
}
