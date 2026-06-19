import { useState } from 'react'
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '../data/mockData'
import './Blog.css'

const CATEGORIES = ['All Posts', 'Kitesurfing', 'Windsurfing', 'Sharm El Sheikh']

function formatDate(dateStr) {
  // Security: dateStr is hardcoded in mockData — no user input
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Posts')

  const filtered = activeCategory === 'All Posts'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory)

  const [featured, ...rest] = filtered

  return (
    <>
      {/* Hero */}
      <section className="page-hero blog-hero" aria-labelledby="blog-hero-heading">
        <div className="blog-hero__bg" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1559825481-12a05cc00344?w=1400&q=80"
            alt=""
            className="blog-hero__img"
          />
          <div className="blog-hero__overlay" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label">Knowledge Hub</p>
          <h1 className="page-hero__title" id="blog-hero-heading">
            The OS <span style={{ color: 'var(--clr-primary)' }}>Blog</span>
          </h1>
          <p className="page-hero__sub">
            Tips, guides and stories from the water — written by our instructors
            and shared with the global kitesurfing community.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div className="blog-filters" role="group" aria-label="Filter by category">
        <div className="container blog-filters__inner">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? ' filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              id={`blog-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Content */}
      <section className="section blog-content" aria-live="polite" aria-label="Blog posts">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="blog-empty">
              <p>No posts in this category yet — check back soon!</p>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featured && (
                <article className="blog-featured" aria-label="Featured post">
                  <div className="blog-featured__img-wrap">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="blog-featured__img"
                    />
                    <div className="blog-featured__category-badge badge badge--cyan">
                      {featured.category}
                    </div>
                  </div>
                  <div className="blog-featured__content">
                    <div className="blog-featured__meta">
                      <span className="blog-meta-item">
                        <Calendar size={13} />
                        <span>{formatDate(featured.date)}</span>
                      </span>
                      <span className="blog-meta-item">
                        <Clock size={13} />
                        <span>{featured.readTime}</span>
                      </span>
                      <span className="blog-meta-item">
                        <User size={13} />
                        <span>{featured.author}</span>
                      </span>
                    </div>
                    <h2 className="blog-featured__title">{featured.title}</h2>
                    <p className="blog-featured__excerpt">{featured.excerpt}</p>
                    <div className="blog-featured__tags">
                      {featured.tags.map(tag => (
                        <span key={tag} className="blog-tag">
                          <Tag size={11} />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      className="btn btn--primary blog-featured__cta"
                      id={`blog-read-${featured.id}`}
                      onClick={() => {
                        // TODO: Wire to blog post detail page when backend is connected
                      }}
                    >
                      Read Article <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              )}

              {/* Rest of posts */}
              {rest.length > 0 && (
                <div className="blog-grid">
                  {rest.map(post => (
                    <article key={post.id} className="blog-card">
                      <div className="blog-card__img-wrap">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="blog-card__img"
                        />
                        <span className="blog-card__category badge badge--cyan">
                          {post.category}
                        </span>
                      </div>
                      <div className="blog-card__body">
                        <div className="blog-card__meta">
                          <span className="blog-meta-item">
                            <Calendar size={12} />
                            <span>{formatDate(post.date)}</span>
                          </span>
                          <span className="blog-meta-item">
                            <Clock size={12} />
                            <span>{post.readTime}</span>
                          </span>
                        </div>
                        <h3 className="blog-card__title">{post.title}</h3>
                        <p className="blog-card__excerpt">{post.excerpt}</p>
                        <div className="blog-card__footer">
                          <div className="blog-card__author">
                            <div className="blog-card__author-avatar" aria-hidden="true">
                              {post.author.charAt(0)}
                            </div>
                            <div>
                              <p className="blog-card__author-name">{post.author}</p>
                              <p className="blog-card__author-role">{post.authorRole}</p>
                            </div>
                          </div>
                          <button
                            className="blog-card__read-btn"
                            id={`blog-read-${post.id}`}
                            onClick={() => {
                              // TODO: Wire to blog post detail page when backend is connected
                            }}
                          >
                            Read <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section section--alt blog-newsletter" aria-labelledby="newsletter-heading">
        <div className="container blog-newsletter__inner">
          <div className="blog-newsletter__content">
            <p className="section-label">Stay in the Loop</p>
            <h2 className="section-title" id="newsletter-heading">
              Join the <span>OS Community</span>
            </h2>
            <p className="section-subtitle">
              Get the latest kitesurfing tips, wind forecasts and special offers delivered directly to your WhatsApp.
            </p>
          </div>
          <div className="blog-newsletter__cta">
            <a
              href="https://wa.me/201150919620?text=Hi%20OS%20Team%2C%20I%27d%20like%20to%20join%20your%20community%20updates!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary blog-newsletter__btn"
              id="blog-whatsapp-community"
            >
              💬 Join via WhatsApp
            </a>
            <a
              href="https://linktr.ee/kiteboardingos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
              id="blog-linktree-btn"
            >
              Follow Us <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
