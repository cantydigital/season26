import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { Post } from '@/types/post';

interface BlogPostCardProps {
  post: Post;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-64 w-full">
          {post.mainImage?.asset?.url ? (
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="bg-gray-200 dark:bg-gray-700 h-full w-full flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">No image</span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-2">
            {post.categories?.map((category, index) => (
              <span 
                key={index} 
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-50 dark:bg-primary-900 dark:text-primary-200"
              >
                {category}
              </span>
            ))}
          </div>
          
          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-200">
            {post.title}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {post.excerpt || 'Read this article to learn more...'}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {post.author?.image ? (
                <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 mr-2"></div>
              )}
              <span className="text-sm text-gray-600 dark:text-gray-400">{post.author?.name}</span>
            </div>
            
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {post.publishedAt ? format(new Date(post.publishedAt), 'MMM dd, yyyy') : 'No date'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
