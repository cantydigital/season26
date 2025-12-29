'use client';

import React, { useState } from 'react';
import { Post } from '@/types/post';
import BlogPostCard from './BlogPostCard';
import Pagination from './Pagination';

interface BlogListProps {
  posts: Post[];
}

const POSTS_PER_PAGE = 10;

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">No posts found</h2>
        <p className="text-gray-600 dark:text-gray-400">Check back later for new content.</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-8">
        {currentPosts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default BlogList;
