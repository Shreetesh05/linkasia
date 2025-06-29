import React from 'react';

interface Author {
  name: string;
  avatar: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  author: Author;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Exploring the Hidden Beaches of Bali",
    excerpt: "Discover secret beaches away from the tourist crowds with crystal clear waters and pristine sands.",
    date: "June 15, 2025",
    readTime: "5 min read",
    category: "Beaches",
    imageUrl: "/images/balibeach.jpg",
    author: {
      name: "Sarah Johnson",
      avatar: "/avatars/sarah.jpg",
    },
  },
  {
    id: 2,
    title: "Mountain Trekking in the Swiss Alps",
    excerpt: "A complete guide to the most scenic hiking trails with breathtaking views of the Alpine peaks.",
    date: "June 8, 2025",
    readTime: "8 min read",
    category: "Mountains",
    imageUrl: "/images/mountains.jpg",
    author: {
      name: "Michael Chen",
      avatar: "/avatars/michael.jpg",
    },
  },
  {
    id: 3,
    title: "Culinary Journey Through Tokyo",
    excerpt: "From street food to Michelin-starred restaurants, experience Tokyo's vibrant food scene.",
    date: "May 28, 2025",
    readTime: "6 min read",
    category: "Food",
    imageUrl: "/images/mtfuji.jpeg",
    author: {
      name: "Emma Rodriguez",
      avatar: "/avatars/emma.jpg",
    },
  },
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-fuchsia-400 tracking-wider uppercase">
            Travel Blog
          </h2>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Stories & Travel Guides
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 mx-auto">
            Discover insider tips, destination guides, and inspiring stories from our global adventures.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col rounded-2xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-md border border-white/10 transition-transform hover:-translate-y-1 hover:shadow-fuchsia-500/30"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                />
                <span className="absolute top-4 right-4 bg-pink-500/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-lg">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center text-sm text-fuchsia-300 mb-3 space-x-2">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm">{post.excerpt}</p>

                {/* Author */}
                <div className="mt-6 flex items-center">
                  <img
                    className="h-10 w-10 rounded-full border-2 border-fuchsia-400"
                    src={post.author.avatar}
                    alt={post.author.name}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">{post.author.name}</p>
                    <p className="text-xs text-gray-400">Travel Writer</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-yellow-400 via-pink-500 to-fuchsia-500 shadow-lg hover:brightness-110 transition">
            View All Articles
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
