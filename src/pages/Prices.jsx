import { useState } from 'react'
import { Check, ArrowRight, Info, MessageCircle } from 'lucide-react'
import { COURSES, EQUIPMENT_RENTALS } from '../data/mockData'
import './Prices.css'

const SPORT_TABS = ['All', 'Kitesurfing', 'Windsurfing', 'Wingfoiling']

export default function Prices() {
  const [activeTab, setActiveTab] = useState('All')

  const filteredCourses = activeTab === 'All'
    ? COURSES
    : COURSES.filter(c => c.sport === activeTab)

  return (
    <>
      {/* Hero
          photo-1619507845851 = confirmed free: windsurfer leaning into sail on open sea
          Much more relevant than the previous broken restaurant/food photo
      */}
      <section className="page-hero prices-hero" aria-labelledby="prices-hero-heading">
        <div className="prices-hero__bg" aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1619507845851-1ada1136b795?w=1600&auto=format&fit=crop&q=80"
            alt=""
            className="prices-hero__img"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="prices-hero__overlay" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label">Transparent Pricing</p>
          <h1 className="page-hero__title" id="prices-hero-heading">
            Course <span style={{ color: 'var(--clr-primary)' }}>Prices</span>
          </h1>
          <p className="page-hero__sub">
            Quality instruction at fair prices. Get a full package and save up to 20%.
            Celebrating 20+ years of giving — enjoy 10% off all courses.
          </p>
        </div>
      </section>

      {/* Promo Banner */}
      <div className="prices-promo" aria-label="Current promotion">
        <div className="container prices-promo__inner">
          <span className="prices-promo__icon" aria-hidden="true">🎉</span>
          <p>
            <strong>20 Years of Giving</strong> — Get <strong>10% off</strong> all courses this season!
            · <strong>FREE trials</strong> for first-timers
            · <strong>Kids go free</strong> with a paying adult
          </p>
          <a
            href="https://buy.stripe.com/8wMaIq6N05ExbscdQQ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--accent prices-promo__btn"
            id="prices-promo-cta"
          >
            Claim Offer <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Tab Selector */}
      <div className="prices-tabs" role="tablist" aria-label="Filter by sport">
        <div className="container prices-tabs__inner">
          {SPORT_TABS.map(tab => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`prices-tab${activeTab === tab ? ' prices-tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
              id={`prices-tab-${tab.toLowerCase()}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <section className="section prices-courses" aria-label="Course prices" aria-live="polite">
        <div className="container">
          <p className="section-label">Courses</p>
          <h2 className="section-title">
            {activeTab === 'All' ? 'All' : activeTab} <span>Courses</span>
          </h2>
          <div className="divider" />

          {/* UX: empty state */}
          {filteredCourses.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 0', opacity: 0.6 }}>
              <p>No courses listed for this sport yet — contact us for availability.</p>
              <a
                href="https://wa.me/201150919620"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                style={{ marginTop: '1rem' }}
              >
                <MessageCircle size={15} /> Ask on WhatsApp
              </a>
            </div>
          )}

          <div className="courses-grid">
            {filteredCourses.map(course => (
              <article key={course.id} className={`course-card${course.badge ? ' course-card--featured' : ''}`}>
                {course.badge && (
                  <div className={`course-card__badge badge badge--${course.badgeType}`}>
                    {course.badge}
                  </div>
                )}
                <div className="course-card__sport">{course.sport}</div>
                <div className="course-card__icon" aria-hidden="true">{course.icon}</div>
                <h3 className="course-card__name">{course.name}</h3>
                <p className="course-card__desc">{course.description}</p>

                <div className="course-card__meta">
                  <span className="course-card__meta-item">
                    <span className="course-card__meta-label">Duration</span>
                    <span className="course-card__meta-val">{course.duration}</span>
                  </span>
                  <span className="course-card__meta-item">
                    <span className="course-card__meta-label">Level</span>
                    <span className="course-card__meta-val">{course.level}</span>
                  </span>
                </div>

                <div className="course-card__price-row">
                  <div className="course-card__price">
                    <span className="course-card__price-currency">{course.currency}</span>
                    <span className="course-card__price-amount">{course.price}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <a
                      href="https://buy.stripe.com/8wMaIq6N05ExbscdQQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary course-card__book-btn"
                      id={`prices-book-${course.id}`}
                    >
                      Book Now
                    </a>
                    {/* UX: WhatsApp fallback on every course card */}
                    <a
                      href={`https://wa.me/201150919620?text=Hi%2C%20I%27d%20like%20to%20book%20the%20${encodeURIComponent(course.name)}%20course`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--ghost"
                      style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem', textAlign: 'center' }}
                      id={`prices-wa-${course.id}`}
                    >
                      💬 Ask on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Rentals */}
      <section className="section section--alt prices-rentals" aria-labelledby="rentals-heading">
        <div className="container">
          <p className="section-label">Equipment Hire</p>
          <h2 className="section-title" id="rentals-heading">
            Equipment <span>Rental</span>
          </h2>
          <p className="section-subtitle">
            All equipment includes wetsuit, shoes, helmet and life jacket. Latest brands, always serviced.
          </p>
          <div className="divider" />

          <div className="rentals-grid">
            {EQUIPMENT_RENTALS.map(rental => (
              <article key={rental.id} className="rental-card">
                <h3 className="rental-card__sport">{rental.sport}</h3>
                <p className="rental-card__brands">{rental.brands}</p>
                <p className="rental-card__note">
                  <Info size={13} /> {rental.note}
                </p>
                <div className="rental-card__options">
                  {rental.options.map(opt => (
                    <div key={opt.label} className="rental-card__option">
                      <span className="rental-card__opt-label">{opt.label}</span>
                      <span className="rental-card__opt-price">
                        {opt.currency} {opt.price}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a
                    href="https://buy.stripe.com/8wMaIq6N05ExbscdQQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary rental-card__btn"
                    id={`prices-rent-${rental.id}`}
                  >
                    Reserve Equipment
                  </a>
                  {/* UX: WhatsApp enquiry per rental item */}
                  <a
                    href={`https://wa.me/201150919620?text=Hi%2C%20I%27d%20like%20to%20rent%20${encodeURIComponent(rental.sport)}%20equipment`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost"
                    style={{ fontSize: '0.8rem' }}
                  >
                    💬
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing notes */}
      <section className="section prices-notes" aria-labelledby="notes-heading">
        <div className="container prices-notes__inner">
          <div>
            <p className="section-label">Good to Know</p>
            <h2 className="section-title" id="notes-heading">
              Our <span>Pricing Policy</span>
            </h2>
            <div className="divider" />
            <div className="prices-notes__list">
              {[
                { icon: '🎁', text: 'FREE trials for those who have never stood on the board.' },
                { icon: '👦', text: 'Kids go free with a paying adult.' },
                { icon: '🌿', text: "We are aligned with nature and work to her demands. We don't earn year-round like schools in other climates." },
                { icon: '⭐', text: 'Our prices reflect best-in-Sharm expertise, highest quality of work, trusted international instructors and always-serviced equipment.' },
                { icon: '💳', text: 'BOOK NOW, PAY LATER — secure your spot with a deposit only.' },
                { icon: '👨‍👩‍👧', text: 'Group and family discounts available — contact us for a personalised offer.' },
              ].map(({ icon, text }) => (
                <div key={text} className="prices-note-item">
                  <span className="prices-note-item__icon" aria-hidden="true">{icon}</span>
                  <p className="prices-note-item__text">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="prices-cta-card">
            <div className="prices-cta-card__glow" aria-hidden="true" />
            <h3>Ready to Start?</h3>
            <p>Contact us for a personalised quote including accommodation, transfers and activities.</p>
            <ul className="prices-cta-card__checks">
              {['Flexible dates', 'Group discounts', 'Family packages', 'Book with deposit only'].map(item => (
                <li key={item}>
                  <Check size={14} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://buy.stripe.com/8wMaIq6N05ExbscdQQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary prices-cta-card__btn"
              id="prices-stripe-btn"
            >
              Book &amp; Pay Deposit →
            </a>
            <a
              href="https://wa.me/201150919620"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary prices-cta-card__wa"
              id="prices-whatsapp-btn"
            >
              💬 WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  )
}