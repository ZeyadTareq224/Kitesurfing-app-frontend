import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Wind, CheckCircle, ChevronRight, MapPin, Star, ExternalLink } from 'lucide-react'
import { SERVICES_LIST } from '../data/mockData'
import './Home.css'

/* ─── Scroll reveal ─────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ─── Hero ──────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__bg" aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
        {/*
          Pexels free kitesurfing drone videos — IDs confirmed from pexels.com/search/videos/kitesurf/
          16577344 = drone kiteboarding on seashore (Serg Alesenko)
          16577306 = top view kiteboarding near shore (Serg Alesenko)
        */}
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/16577344/ultra-hd-16577344.jpeg?auto=compress&cs=tinysrgb&w=1280"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        >
          <source
            src="https://videos.pexels.com/video-files/16577344/16577344-hd_1280_720_60fps.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/16577306/16577306-hd_1280_720_60fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <Star size={13} fill="currentColor" />
          <span>5-Star Rated School · Est. 2012</span>
        </div>

        <h1 className="hero__title">
          We are everywhere,<br />
          <span className="hero__title-accent">we are the origin story.</span>
        </h1>

        <p className="hero__sub">
          Welcome to The Kite OS — Schools, Kite Safari — Sharm El Sheikh, Dahab &amp; Hurghada.
          Kitesurfing, windsurfing, kiteboarding, wing foiling school &amp; kite safari.
        </p>

        <p className="hero__sub2">
          Join our ECO school &amp; Kite Safari around Egypt with our trusted team.
        </p>

        <div className="hero__actions">
          <Link to="/prices" className="btn btn--primary hero__cta" id="hero-cta-primary">
            Check Our Courses
            <ArrowRight size={17} />
          </Link>
          <a
            href="http://wa.me/201150919620"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost hero__cta"
            id="hero-cta-whatsapp"
          >
            WhatsApp Us
          </a>
        </div>

        <div className="hero__locations">
          <MapPin size={14} />
          <span>Sharm El Sheikh · Dahab · Hurghada</span>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true"><span /></div>
    </section>
  )
}

/*
  ─── Sport images ─────────────────────────────────────────────────────────────
  Every ID below is the OG/twitter image from its respective Unsplash
  search-results page — those are guaranteed FREE (non-Unsplash+) photos
  that appear as the page thumbnail in search engines.

  Kitesurfing  → 1564499504739  Marcreation — 5 kiteboarders on sea
  Windsurfing  → 1619507845851  Top result /s/photos/windsurfing
  Wing Foiling → 1730134427101  Twitter card /s/photos/wingfoil (Paulina Herpel)
  Wakeboarding → 1531001602318  OG card /s/photos/wakeboarding (Luke Bender)
  SUP          → 1614614098579  OG card /s/photos/stand-up-paddle
  Kite Safari  → 1554190914    OG card /s/photos/egypt-beach (Red Sea coast)
  ──────────────────────────────────────────────────────────────────────────── */
const SPORT_IMAGES = {
  'Kitesurfing':
    'https://images.unsplash.com/photo-1564499504739-bc4fc2ae8cba?w=600&auto=format&fit=crop&q=80',
  'Windsurfing':
    'https://images.unsplash.com/photo-1619507845851-1ada1136b795?w=600&auto=format&fit=crop&q=80',
  'Wing Foiling':
    'https://images.unsplash.com/photo-1730134427101-ec7982a3d773?w=600&auto=format&fit=crop&q=80',
  'Wakeboarding & Water Skiing':
    'https://images.unsplash.com/photo-1531001602318-1916852b9205?w=600&auto=format&fit=crop&q=80',
  'Stand Up Paddle (SUP)':
    'https://images.unsplash.com/photo-1614614098579-7167dd3f4c07?w=600&auto=format&fit=crop&q=80',
  // Egypt Red Sea beach aerial — confirms Egypt / lagoon theme for Kite Safari
  'Kite Safari':
    'https://images.unsplash.com/photo-1554190914-99eb5365e613?w=600&auto=format&fit=crop&q=80',
}

/* ─── Sports Section ────────────────────────────────────────── */
function SportsSection() {
  return (
    <section className="section sports-section" aria-labelledby="sports-heading">
      <div className="container">
        <p className="section-label reveal reveal--up">Our Courses</p>
        <h2 className="section-title reveal reveal--up" id="sports-heading">
          Kitesurfing &amp; <span>Windsurfing</span>
        </h2>
        <p className="section-subtitle reveal reveal--up">
          Kitesurfing, Windsurfing, Kiteboarding, Wing Foiling, Wakeboarding &amp; SUP.
          All levels from intro to advanced — contact us for a personalised offer.
        </p>

        <div className="sports-grid">
          {SERVICES_LIST.map((s, i) => (
            <div
              key={s.id}
              className={`sport-card sport-card--${s.color} reveal reveal--up`}
              style={{ '--delay': `${i * 0.09}s` }}
            >
              <div className="sport-card__image-wrap">
                <img
                  src={SPORT_IMAGES[s.title] || SPORT_IMAGES['Kitesurfing']}
                  alt={s.title}
                  className="sport-card__image"
                  loading="lazy"
                />
                <div className="sport-card__image-overlay" />
                <div className="sport-card__icon-float" aria-hidden="true">{s.icon}</div>
              </div>
              <div className="sport-card__body">
                <h3 className="sport-card__title">{s.title}</h3>
                <p className="sport-card__desc">{s.description}</p>
                <ul className="sport-card__features">
                  {s.features.slice(0, 4).map(f => (
                    <li key={f}><CheckCircle size={13} /><span>{f}</span></li>
                  ))}
                </ul>
                <Link to="/prices" className="sport-card__link">
                  Check prices <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Scene Break ───────────────────────────────────────────── */
function SceneBreak({ image, text, sub }) {
  return (
    <div className="scene-break">
      <img src={image} alt="" className="scene-break__img" loading="lazy" />
      <div className="scene-break__overlay" />
      <div className="scene-break__content reveal reveal--up">
        <h2 className="scene-break__title">{text}</h2>
        {sub && <p className="scene-break__sub">{sub}</p>}
      </div>
    </div>
  )
}

/* ─── Featured Camps ────────────────────────────────────────── */
const CAMP_DATA = [
  {
    id: 'kite-camp',
    title: '7 Days Kitesurfing & Accommodation',
    location: 'Hurghada · Sharm · Dahab',
    price: '$600',
    image:
      'https://images.unsplash.com/photo-1564499504739-bc4fc2ae8cba?w=900&auto=format&fit=crop&q=80',
    includes: [
      "7 nights' accommodation BB/HB in a beach apartment",
      'Airport transfer',
      '12 hours of kitesurfing sessions',
      'Tuition: EN, PL, IT, AR, GER',
      'New 2024 North Equipment',
      'Wetsuit, shoes, gloves, helmet, life jacket',
      'IKO certification',
      'Equipment rental at discounted rate after course',
      'Other water activities at discounted rate',
    ],
    desc: 'Join us for an unforgettable 7 days in Sharm — all sessions in the stunning lagoon at Nabq Bay, featuring a sandy beach and shallow, warm waters. Flexible dates · Discounts for groups and families.',
    stripe: 'https://buy.stripe.com/8wMaIq6N05ExbscdQQ',
  },
  {
    id: 'wind-camp',
    title: '7 Days Windsurfing Course & Accommodation',
    location: 'Sharm El Sheikh',
    price: '$600',
    image:
      'https://images.unsplash.com/photo-1619507845851-1ada1136b795?w=900&auto=format&fit=crop&q=80',
    includes: [
      '7 nights in a beach apartment or villa',
      'Airport transport to and from the venue',
      'Free Rider or Advanced Rider Course',
      'Complete equipment package (wetsuit, shoes, gloves, helmet, life jacket)',
      'IKO certification',
      'Discounted equipment rental after the course',
      'Socials',
      'Other water activities at discounted rate',
    ],
    desc: 'Master your skills in the beautiful surroundings of Sharm El Sheikh — all sessions in the stunning lagoon at Nabq Bay, featuring shallow, warm waters.',
    stripe: null,
  },
]

function FeaturedCamps() {
  return (
    <section className="section camps-section" aria-labelledby="camps-heading">
      <div className="container">
        <p className="section-label reveal reveal--up">Upcoming Camps</p>
        <h2 className="section-title reveal reveal--up" id="camps-heading">
          Kitesurfing &amp; Windsurfing <span>Camps</span>
        </h2>
        <p className="section-subtitle reveal reveal--up">
          Our popular camps resume in January 2025 and run all year. Contact us to reserve your spot.
        </p>

        <div className="camps-grid">
          {CAMP_DATA.map((camp, i) => (
            <div key={camp.id} className="camp-card reveal reveal--up" style={{ '--delay': `${i * 0.15}s` }}>
              <div className="camp-card__image-wrap">
                <img src={camp.image} alt={camp.title} className="camp-card__image" loading="lazy" />
                <div className="camp-card__price-badge">
                  <span className="camp-card__price-from">From</span>
                  <span className="camp-card__price-amount">{camp.price}</span>
                </div>
              </div>
              <div className="camp-card__body">
                <div className="camp-card__meta"><MapPin size={13} /><span>{camp.location}</span></div>
                <h3 className="camp-card__title">{camp.title}</h3>
                <p className="camp-card__desc">{camp.desc}</p>
                <ul className="camp-card__includes">
                  {camp.includes.map(item => (
                    <li key={item}><CheckCircle size={13} /><span>{item}</span></li>
                  ))}
                </ul>
                <div className="camp-card__actions">
                  <Link to="/services" className="btn btn--secondary">View Details</Link>
                  {camp.stripe
                    ? <a href={camp.stripe} target="_blank" rel="noopener noreferrer" className="btn btn--primary">💳 Book via Stripe</a>
                    : <a href="http://wa.me/201150919620" target="_blank" rel="noopener noreferrer" className="btn btn--primary">Contact Us</a>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Wind Widget ───────────────────────────────────────────── */
function WindWidget() {
  return (
    <section className="wind-cta section" aria-labelledby="wind-cta-heading">
      <div className="container">
        <div className="wind-cta__inner reveal reveal--up">
          <Wind className="wind-cta__icon animate-float" size={52} />
          <div className="wind-cta__text">
            <h2 className="wind-cta__title" id="wind-cta-heading">Check the wind @ our OS station</h2>
            <p className="wind-cta__sub">Live wind forecasts at Sharm El Sheikh, Dahab &amp; Hurghada — powered by Windfinder.</p>
          </div>
          <a href="https://www.windfinder.com/weatherforecast/nabq" target="_blank" rel="noopener noreferrer" className="btn btn--accent" id="home-wind-forecast-btn">
            GO! <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Reviews CTA ───────────────────────────────────────────── */
function ReviewsCTA() {
  return (
    <section className="reviews-cta section" aria-labelledby="reviews-cta-heading">
      <div className="container reviews-cta__inner reveal reveal--up">
        <div className="reviews-cta__stars">
          {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="var(--clr-gold)" color="var(--clr-gold)" />)}
        </div>
        <h2 className="reviews-cta__title" id="reviews-cta-heading">Check Our 5★ Reviews</h2>
        <p className="reviews-cta__sub">See what our students say on Google Maps &amp; TripAdvisor.</p>
        <div className="reviews-cta__actions">
          <a href="https://maps.app.goo.gl/NMUdt55mj9aWu2dP6" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            Google Reviews <ExternalLink size={15} />
          </a>
          <a href="https://www.tripadvisor.com/Attraction_Review-g297555-d32601420-Reviews-Kiteboarding_OS_Sharm_el_Sheikh-Sharm_El_Sheikh_South_Sinai_Red_Sea_and_Sinai.html" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
            TripAdvisor <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Book CTA ───────────────────────────────────────────────── */
function BookCTA() {
  return (
    <section className="book-cta section" aria-labelledby="book-cta-heading">
      <div className="container book-cta__inner">
        <div className="book-cta__glow" aria-hidden="true" />
        <p className="section-label reveal reveal--up" style={{ textAlign: 'center' }}>Ready to Fly?</p>
        <h2 className="book-cta__title reveal reveal--up" id="book-cta-heading">
          Book Now — <span>Pay Later</span>
        </h2>
        <p className="book-cta__sub reveal reveal--up">
          Contact us for a personalised offer. Free trials available.
          Kids go free with a paying adult. Discounts for groups &amp; families.
        </p>
        <div className="book-cta__actions reveal reveal--up">
          <a href="http://wa.me/201150919620" target="_blank" rel="noopener noreferrer" className="btn btn--primary book-cta__btn">
            WhatsApp Us
          </a>
          <Link to="/prices" className="btn btn--secondary" id="home-final-prices-btn">
            View All Prices
          </Link>
        </div>
        <p className="book-cta__note reveal reveal--up">
          ✓ FREE trials  ✓ Kids go free  ✓ Group discounts  ✓ Flexible dates
        </p>
      </div>
    </section>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function Home() {
  useScrollReveal()
  return (
    <>
      <Hero />
      <SportsSection />
      <SceneBreak
        image="https://images.unsplash.com/photo-1554190914-99eb5365e613?w=1600&auto=format&fit=crop&q=80"
        text="Master Your Skills in Nabq Bay"
        sub="Shallow warm Red Sea waters — the perfect learning environment"
      />
      <FeaturedCamps />
      <WindWidget />
      <ReviewsCTA />
      <BookCTA />
    </>
  )
}