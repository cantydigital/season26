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

  // Group posts by category
  const postsByCategory: Record<string, Post[]> = {};
  const uncategorizedPosts: Post[] = [];

  posts.forEach((post) => {
    if (post.categories && post.categories.length > 0) {
      post.categories.forEach((category) => {
        if (!postsByCategory[category]) {
          postsByCategory[category] = [];
        }
        postsByCategory[category].push(post);
      });
    } else {
      uncategorizedPosts.push(post);
    }
  });

  // Sort categories alphabetically
  const sortedCategories = Object.keys(postsByCategory).sort();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-terracotta/10 to-sage/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-charcoal">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Discover stories, insights, and inspiration for navigating life in your mid-20s. 
              From personal growth to lifestyle tips, we're here to guide you through the beautiful chaos of adulthood.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                <span className="text-2xl">📚</span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">{posts.length} Articles</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                <span className="text-2xl">🎯</span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">{sortedCategories.length} Categories</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                <span className="text-2xl">✨</span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">Fresh Content</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-900 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-300 dark:bg-primary-800 rounded-full opacity-20 blur-xl"></div>
      </section>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-12">
        {posts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No posts found</h2>
          <p className="text-gray-600 dark:text-gray-400">Check back later for new content.</p>
        </div>
      ) : (
        <>
          {sortedCategories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-primary-600 dark:text-primary-400">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {postsByCategory[category].slice(0, 4).map((post) => (
                  <BlogPostCard key={post._id} post={post} />
                ))}
              </div>
            </div>
          ))}
          
          {uncategorizedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-600 dark:text-gray-400">
                Uncategorized
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {uncategorizedPosts.map((post) => (
                  <BlogPostCard key={post._id} post={post} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
      </div>
    </>
  );
}
