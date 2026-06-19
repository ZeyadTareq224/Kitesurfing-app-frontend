import { useState } from 'react'
import { CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SERVICES_LIST, CAMPS } from '../data/mockData'
import './Services.css'

const SPORT_FILTERS = ['All', 'Kitesurfing', 'Windsurfing', 'Wingfoiling', 'Wakeboarding', 'Kite Safari']

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s =>
      s.title.toLowerCase().includes(activeFilter.toLowerCase()) ||
      s.id.toLowerCase().includes(activeFilter.toLowerCase())
    )

  return (
    <>
      {/* Hero
          photo-1564499504739 = confirmed free: 5 kiteboarders on turquoise sea (Marcreation)
      */}
      <section className="page-hero services-hero" aria-labelledby="services-hero-heading">
        <div className="services-hero__bg" aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1564499504739-bc4fc2ae8cba?w=1600&auto=format&fit=crop&q=80"
            alt=""
            className="services-hero__img"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="services-hero__overlay" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label">What We Offer</p>
          <h1 className="page-hero__title" id="services-hero-heading">
            Camps &amp; <span style={{ color: 'var(--clr-primary)' }}>Services</span>
          </h1>
          <p className="page-hero__sub">
            From introductory taster sessions to full multi-day holiday camps —
            we cover every level in Sharm El Sheikh, Dahab &amp; Hurghada.
          </p>
          {/* UX: quick-action hero buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/201150919620"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <MessageCircle size={16} /> Book via WhatsApp
            </a>
            <Link to="/prices" className="btn btn--ghost">
              View Prices <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="services-filters" role="group" aria-label="Filter by sport">
        <div className="container services-filters__inner">
          {SPORT_FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn${activeFilter === f ? ' filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f)}
              aria-pressed={activeFilter === f}
              id={`services-filter-${f.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* UX: empty state when filter returns nothing */}
      {filtered.length === 0 && (
        <section className="section" aria-live="polite">
          <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ fontSize: '1.2rem', opacity: 0.6 }}>No services match this filter yet.</p>
            <button
              className="btn btn--secondary"
              style={{ marginTop: '1rem' }}
              onClick={() => setActiveFilter('All')}
            >
              Show All Services
            </button>
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section className="section services-grid-section" aria-live="polite" aria-label="Services list">
        <div className="container">
          <div className="services-grid">
            {filtered.map(s => (
              <article key={s.id} className={`service-card service-card--${s.color}`}>
                <div className="service-card__header">
                  <span className="service-card__icon" aria-hidden="true">{s.icon}</span>
                  <h2 className="service-card__title">{s.title}</h2>
                </div>
                <p className="service-card__desc">{s.description}</p>
                <ul className="service-card__features" aria-label="Included features">
                  {s.features.map(f => (
                    <li key={f}>
                      <CheckCircle size={14} aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="service-card__footer">
                  {/* UX: dual action — price OR direct WhatsApp enquiry */}
                  <Link
                    to="/prices"
                    className="service-card__link"
                    id={`service-prices-${s.id}`}
                  >
                    View Prices <ArrowRight size={14} />
                  </Link>
                  <a
                    href={`https://wa.me/201150919620?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(s.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost"
                    style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
                    id={`service-wa-${s.id}`}
                  >
                    <MessageCircle size={13} /> Enquire
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Holiday Camps */}
      <section className="section section--alt camps-section" aria-labelledby="camps-heading">
        <div className="container">
          <p className="section-label">Multi-Day Packages</p>
          <h2 className="section-title" id="camps-heading">
            Holiday <span>Camps</span>
          </h2>
          <p className="section-subtitle">
            All-inclusive packages combining accommodation, tuition and unforgettable experiences on the Red Sea.
          </p>
          <div className="divider" />

          <div className="camps-grid">
            {CAMPS.map(camp => (
              <article key={camp.id} className="camp-card">
                <div className="camp-card__img-wrap">
                  <img
                    src={camp.image}
                    alt={camp.title}
                    className="camp-card__img"
                    loading="lazy"
                    /* UX: graceful fallback if camp image from mockData is broken */
                    onError={e => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1564499504739-bc4fc2ae8cba?w=600&auto=format&fit=crop&q=80'
                    }}
                  />
                  <div className="camp-card__sport-badge">{camp.sport}</div>
                  <div className="camp-card__price-pill">
                    <span>{camp.priceNote}</span>
                    <strong>${camp.price}</strong>
                  </div>
                </div>

                <div className="camp-card__body">
                  <h3 className="camp-card__title">{camp.title}</h3>
                  <p className="camp-card__location">📍 {camp.location}</p>
                  <p className="camp-card__desc">{camp.description}</p>

                  <ul className="camp-card__includes" aria-label="What's included">
                    {camp.includes.map(item => (
                      <li key={item}>
                        <CheckCircle size={13} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="camp-card__actions">
                    {/* UX: Stripe book + WhatsApp side by side */}
                    <a
                      href="https://buy.stripe.com/8wMaIq6N05ExbscdQQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                      id={`camp-book-${camp.id}`}
                    >
                      💳 Book &amp; Pay Deposit
                    </a>
                    <a
                      href="https://wa.me/201150919620"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--secondary"
                      id={`camp-wa-${camp.id}`}
                    >
                      <Phone size={15} /> Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What's included info box */}
      <section className="section services-included" aria-labelledby="included-heading">
        <div className="container services-included__inner">
          <div className="services-included__content">
            <p className="section-label">All Courses Include</p>
            <h2 className="section-title" id="included-heading">
              Everything You <span>Need</span>
            </h2>
            <div className="divider" />
            <div className="included-grid">
              {[
                { emoji: '🪁', label: 'Latest Equipment' },
                { emoji: '🦺', label: 'Full Safety Gear' },
                { emoji: '📜', label: 'IKO Certification' },
                { emoji: '🌍', label: 'Multilingual Coaching' },
                { emoji: '🏖️', label: 'Beach Launch Access' },
                { emoji: '📸', label: 'Progress Tracking' },
              ].map(({ emoji, label }) => (
                <div key={label} className="included-item">
                  <span className="included-item__emoji" aria-hidden="true">{emoji}</span>
                  <span className="included-item__label">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="services-included__cta">
            <div className="services-included__card">
              <h3>Ready to Book?</h3>
              <p>Contact us for a personalised offer — flexible dates, group discounts and family packages available.</p>
              <a
                href="https://wa.me/201150919620"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem' }}
                id="services-final-whatsapp"
              >
                💬 WhatsApp Us
              </a>
              <a
                href="https://buy.stripe.com/8wMaIq6N05ExbscdQQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
                style={{ width: '100%', justifyContent: 'center' }}
                id="services-stripe-btn"
              >
                💳 Book &amp; Pay Deposit
              </a>
              <p className="services-included__note">Book Now · Pay Later with deposit only</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}