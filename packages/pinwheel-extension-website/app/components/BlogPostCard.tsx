import React from 'react';
import Image from 'next/image';

interface BlogPostCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    category: string;
  };
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {post.date}
          </span>
        </div>
        <h3 className="font-bold text-xl mb-2 text-slate-800 dark:text-white line-clamp-2">
          {post.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 flex items-center">
          阅读更多
          <span className="ml-1 text-sm">→</span>
        </button>
      </div>
    </div>
  );
};

export default BlogPostCard;