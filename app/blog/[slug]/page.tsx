import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/lib/queries';
import { Post } from '@/types/post';
import { Metadata } from 'next';
import CustomNextSeo from '@/app/components/CustomNextSeo';
import PortableTextComponent from '@/app/components/PortableTextComponent';

// We're now using the PortableTextComponent instead of defining components here

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.season26.com';
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  // Get featured image or fallback to default og-image
  const imageUrl = post.mainImage?.asset?.url || `${baseUrl}/og-image.jpg`;
  
  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || `Read our blog post about ${post.title}`,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || `Read our blog post about ${post.title}`,
      url: `${baseUrl}/blog/${params.slug}`,
      siteName: 'Season26',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || `Read our blog post about ${post.title}`,
      images: [imageUrl],
    },
    keywords: post.seo?.seoKeywords?.join(', ') || 'Season26, blog, article'
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: Post = await getPostBySlug(params.slug);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link href="/blog" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }
  
  // Fetch related posts based on categories
  const relatedPosts = await getRelatedPosts(params.slug, post.categories || []);

  return (
    <>
      {post.seo && <CustomNextSeo seo={post.seo} slug={`/blog/${post.slug}`} />}
      
      <article>
        {/* Hero Section */}
        <div className="bg-charcoal py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-8">
              <Link href="/blog" className="inline-flex items-center text-white hover:text-primary-200 transition-colors backdrop-blur-sm bg-black/20 py-2 px-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Blog
              </Link>
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-md">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <div className="flex flex-wrap gap-2 justify-center">
                  {post.categories?.map((category, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-semibold py-1 px-3 rounded-full text-white bg-primary-600/80 backdrop-blur-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-full py-1.5 px-4 text-center">
                  <p className="text-sm text-white">
                    <span className="font-medium">{post.author?.name}</span> · {post.publishedAt ? format(new Date(post.publishedAt), 'MMM dd, yyyy') : 'No date'} · {post.estimatedReadingTime || 5} min read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Image Section */}
        {post.mainImage?.asset?.url ? (
          <div className="w-full max-w-5xl mx-auto px-4 -mt-16 relative z-10">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        ) : (
          /* Fallback if no image - add some spacing */
          <div className="h-16"></div>
        )}
        
        {/* Main Content Container */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <PortableTextComponent content={post.body} />
          </div>
        </div>
      </div>
        
        {relatedPosts.length > 0 && (
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost._id} href={`/blog/${relatedPost.slug}`} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <div className="relative h-48 w-full">
                      {relatedPost.mainImage?.asset?.url ? (
                        <Image
                          src={relatedPost.mainImage.asset.url}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="bg-gray-200 dark:bg-gray-700 h-full w-full flex items-center justify-center">
                          <span className="text-gray-500 dark:text-gray-400">No image</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {relatedPost.publishedAt ? format(new Date(relatedPost.publishedAt), 'MMM dd, yyyy') : 'No date'}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}


