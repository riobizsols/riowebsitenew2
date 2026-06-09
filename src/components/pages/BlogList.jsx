import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiCalendar, FiArrowRight, FiSearch } from 'react-icons/fi';
import '../../css/BlogList.css';
import LazyImage from '../LazyImage';
import { blogCardImage, cloudinarySrcSet } from '../../utils/cloudinary';

const BLOG_CARD_WIDTH = 480;
const BLOG_CARD_HEIGHT = 220;

const blogPosts = [
  {
    id: 1, 
    title: 'RIO EAM: Transform Your Enterprise Asset Managment', 
    date: '2025-01-15', 
    author: 'Admin',
    category: 'RIO EAM',
    tags: ['alm', 'asset-management', 'enterprise'],
    readTime: 7,
    excerpt: 'Discover how RIO Enterprise Asset Managment transforms asset operations, reduces downtime, and ensures compliance across your enterprise.',
    image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599940/rio_main_website/zsmbw34rfoookdmgmcpv.png'
  },
  {
    id: 2,
    title: 'Five Key Benefits of Enterprise Asset Management Solutions', 
    date: '2025-01-12', 
    author: 'Admin',
    category: 'RIO EAM',
    tags: ['alm', 'benefits', 'enterprise'],
    readTime: 5,
    excerpt: 'Uncover the five critical benefits of implementing a comprehensive enterprise asset managment system in your organization.',
    image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/m4cliid7bj5sx10flesg.png'
  },
  {
    id: 3,
    title: 'How RIO EAM Ensures Compliance and Audit Readiness', 
    date: '2025-01-10', 
    author: 'Admin',
    category: 'RIO EAM',
    tags: ['alm', 'compliance', 'audit'],
    readTime: 6,
    excerpt: 'Learn how RIO EAM maintains comprehensive audit trails, automates compliance workflows, and keeps your organization audit-ready.',
    image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599940/rio_main_website/zsmbw34rfoookdmgmcpv.png'
  },
  {
    id: 4,
    title: 'Asset Maintenance Best Practices: A Complete Guide', 
    date: '2025-01-08', 
    author: 'Admin',
    category: 'RIO EAM',
    tags: ['alm', 'maintenance', 'best-practices'],
    readTime: 9,
    excerpt: 'Explore industry best practices for preventive maintenance, work order management, and asset tracking using modern EAM solutions.',
    image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/m4cliid7bj5sx10flesg.png'
  },
  {
    id: 5,
    title: 'From Excel to Enterprise — A Practical EAM Roadmap for Multi-Location Businesses',
    date: '2024-11-15',
    author: 'Admin',
    category: 'RIO EAM',
    tags: ['alm', 'migration', 'multi-location'],
    readTime: 10,
    excerpt: 'A practical roadmap for moving from Excel-based asset tracking to a full EAM platform across multiple locations without operational chaos.',
    image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/m4cliid7bj5sx10flesg.png'
  },
  {
    id: 6,
    title: 'Why Hospitals Need a Dedicated Medical Equipment Maintenance System',
    date: '2025-02-01',
    author: 'Admin',
    category: 'RIO MEMS',
    tags: ['mems', 'healthcare', 'medical-equipment'],
    readTime: 6,
    excerpt: 'Learn why dedicated systems like RIO MEMS are essential for hospitals to maintain biomedical equipment, ensure compliance, and reduce downtime.',
    image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599940/rio_main_website/zsmbw34rfoookdmgmcpv.png'
  },
  {
    id: 7,
    title: 'RIO MEMS: Streamlining Biomedical Asset Lifecycle in Healthcare',
    date: '2025-02-05',
    author: 'Admin',
    category: 'RIO MEMS',
    tags: ['mems', 'biomedical', 'asset-lifecycle'],
    readTime: 7,
    excerpt: 'Discover how RIO MEMS (Medical Equipment Maintenance System) helps healthcare organizations track, maintain, and comply with medical device regulations.',
    image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/m4cliid7bj5sx10flesg.png'
  },
  {
    id: 8,
    title: 'AIssist: Boost Productivity with AI-Powered Comments and Tasks',
    date: '2025-02-10',
    author: 'Admin',
    category: 'AIssist',
    tags: ['aissist', 'productivity', 'browser-extension'],
    readTime: 5,
    excerpt: 'See how the AIssist Chrome extension turns comments and highlights into tasks and follow-ups, keeping your team aligned without leaving the page.',
    image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599940/rio_main_website/zsmbw34rfoookdmgmcpv.png'
  },
  {
    id: 9,
    title: 'How Browser Extensions Like AIssist Improve Team Collaboration',
    date: '2025-02-12',
    author: 'Admin',
    category: 'AIssist',
    tags: ['aissist', 'collaboration', 'workflow'],
    readTime: 6,
    excerpt: 'Explore how AI-powered browser tools help distributed teams capture context, assign action items, and stay in sync on web-based work.',
    image: 'https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599928/rio_main_website/m4cliid7bj5sx10flesg.png'
  },
];

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts by search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Product Blog | RioBizSols - RIO EAM, RIO MEMS & AIssist Insights</title>
        <meta name="description" content="Insights on RIO EAM enterprise asset managment, RIO MEMS medical equipment maintenance, and AIssist productivity. Product updates and best practices from RioBizSols." />
        <meta name="keywords" content="RIO EAM blog, RIO MEMS, AIssist, enterprise asset managment, medical equipment maintenance, browser extension" />
        <meta name="author" content="RioBizSols" />
        <meta property="og:title" content="Product Blog | RioBizSols" />
        <meta property="og:description" content="Insights on RIO EAM, RIO MEMS, and AIssist products" />
        <meta property="og:url" content="https://riobizsols.com/blog" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://riobizsols.com/blog" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href={blogCardImage(blogPosts[0].image, BLOG_CARD_WIDTH)}
          fetchPriority="high"
        />
      </Helmet>
      <div className="blog-page">
        {/* Hero Section */}
        <div className="blog-hero">
          <div className="blog-hero-content">
            <h1 className="blog-hero-title">Our Blogs</h1>
            <p className="blog-hero-subtitle">Insights, tips, and industry trends to help you succeed</p>
          </div>
        </div>

        {/* Search Section */}
        <div className="blog-search-section">
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="blog-category-filter">
          <h3>Filter by Category</h3>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="blog-container">
          <div className="blog-posts-grid">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="blog-card"
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/blog/${post.id}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate(`/blog/${post.id}`);
                  }
                }}
                aria-label={`Open blog: ${post.title}`}
              >
                <div className="blog-card-image">
                  <LazyImage
                    src={blogCardImage(post.image, BLOG_CARD_WIDTH)}
                    srcSet={cloudinarySrcSet(post.image, [320, 480, 640], { crop: 'fill' })}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    alt={post.title}
                    width={BLOG_CARD_WIDTH}
                    height={BLOG_CARD_HEIGHT}
                    priority={index === 0}
                  />
                  <span className="blog-category-badge">{post.category}</span>
                </div>
                
                <div className="blog-card-content">
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  
                  <div className="blog-card-meta">
                    <span className="blog-meta-item">
                      <FiCalendar className="meta-icon" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="blog-meta-item">
                      📖 {post.readTime} min
                    </span>
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="blog-tags-preview">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="tag-badge">{tag}</span>
                      ))}
                    </div>
                  )}

                  <Link
                    to={`/blog/${post.id}`}
                    className="blog-read-more"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read More
                    <FiArrowRight className="arrow-icon" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-results">
              <p>No blog posts found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogList;
