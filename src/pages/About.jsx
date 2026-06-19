import { useEffect } from 'react'
import { MapPin, Star, ArrowRight } from 'lucide-react'
import './About.css'

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

const BRANDS = ['Cabrinha', 'North', 'Ozone', 'Neil Pride', 'JP', 'Fanatic', 'RRD']

/* UX: stat counters — adds social proof at a glance */
const STATS = [
  { value: '12+', label: 'Years in Sharm' },
  { value: '100yrs', label: 'Combined Instructor XP' },
  { value: '3', label: 'Locations in Egypt' },
  { value: '5★', label: 'Rated on Google' },
]

export default function About() {
  useScrollReveal()
  return (
    <>
      {/* Hero
          photo-1564499504739 = confirmed free: kiteboarders on turquoise sea (Marcreation)
          Much more on-brand than the previous image
      */}
      <section className="page-hero about-hero" aria-labelledby="about-hero-heading">
        <div className="about-hero__bg" aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1564499504739-bc4fc2ae8cba?w=1600&auto=format&fit=crop&q=80"
            alt=""
            className="about-hero__img"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="about-hero__overlay" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="page-hero__title" id="about-hero-heading">
            About The <span style={{ color: 'var(--clr-primary)' }}>Old School</span>
          </h1>
          <p className="page-hero__sub">
            An international school of watersports in Sharm El Sheikh specialising in Kitesurfing, Windsurfing &amp; Wingfoiling.
          </p>
          {/* UX: location pills in hero */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
            {['Sharm El Sheikh', 'Dahab', 'Hurghada'].map(loc => (
              <span key={loc} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.25)', borderRadius: '2rem',
                padding: '0.3rem 0.85rem', fontSize: '0.8rem', color: '#fff'
              }}>
                <MapPin size={11} /> {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* UX: Stats bar — quick proof before the copy */}
      <div style={{
        background: 'var(--clr-primary)',
        padding: '1.5rem 0',
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '1rem',
          textAlign: 'center',
        }}>
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', marginTop: '0.25rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main About Text */}
      <section className="section about-body" aria-labelledby="about-body-heading">
        <div className="container about-body__inner">
          <div className="about-body__text reveal reveal--left">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title" id="about-body-heading">
              We Are <span>Passionate</span> About Teaching
            </h2>

            <div className="about-body__paragraphs">
              <p>
                We are an International School of Watersports in Sharm El‑Sheikh specialising in Kitesurfing,
                Windsurfing and Wingfoiling. We are passionate about teaching and offer a personalised service.
              </p>
              <p>
                At OS you will learn or perfect your skills with highly experienced instructors, who together have
                <strong> nearly a century of experience</strong> in kitesurfing and windsurfing.
              </p>
              <p>
                We have an established worldwide reputation for effectiveness. If you are new to kitesurfing or
                windsurfing, or already caught the bug and want to improve your skills, we are the school for you.
              </p>
              <p>
                We guarantee that with us you will achieve great results, have lots of fun and build some friendships.
                You will receive an <strong>IKO certificate</strong> at the end of the course.
              </p>
              <p>
                We offer lessons for beginners and advanced students and tailor the lessons to match the client's
                skill level. We are confident that our lessons can provide a solid foundation to start or improve
                your skills, while also ensuring a fun and engaging experience.
              </p>
              <p>
                Our priority is ensuring you have a safe and joyful learning experience that leaves you feeling
                confident in your skills and hooked on this great sport.
              </p>
            </div>

            {/* UX: CTA directly within the about text */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/201150919620"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                💬 Get in Touch
              </a>
              <a
                href="https://maps.app.goo.gl/NMUdt55mj9aWu2dP6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                <Star size={14} /> Our Reviews <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="about-body__image-col reveal reveal--right">
            {/*
              photo-1564499504739 = kiteboarders on turquoise sea — confirmed free
              photo-1619507845851 = windsurfer with sail — confirmed free (OG of /s/photos/windsurfing)
            */}
            <div className="about-body__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1564499504739-bc4fc2ae8cba?w=700&auto=format&fit=crop&q=80"
                alt="Kitesurfing lesson at OS school"
                className="about-body__img"
                loading="lazy"
              />
            </div>
            <div className="about-body__img-wrap about-body__img-wrap--small">
              <img
                src="https://images.unsplash.com/photo-1619507845851-1ada1136b795?w=400&auto=format&fit=crop&q=80"
                alt="Windsurfing at OS school"
                className="about-body__img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Brands */}
      <section className="section about-brands" aria-labelledby="about-brands-heading">
        <div className="container">
          <p className="section-label reveal reveal--up" style={{ textAlign: 'center' }}>Equipment</p>
          <h2 className="section-title reveal reveal--up" id="about-brands-heading" style={{ textAlign: 'center' }}>
            Reputable <span>Brands Only</span>
          </h2>
          <p className="section-subtitle reveal reveal--up" style={{ textAlign: 'center', margin: '0 auto var(--sp-3xl)' }}>
            We use equipment of reputable brands only — always serviced, always safe.
          </p>
          <div className="about-brands__grid reveal reveal--up">
            {BRANDS.map(brand => (
              <div key={brand} className="about-brands__item">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* UX: Find us section with location links */}
      <section className="section section--alt" aria-labelledby="locations-heading">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label reveal reveal--up">Where to Find Us</p>
          <h2 className="section-title reveal reveal--up" id="locations-heading">
            Three <span>Locations</span>
          </h2>
          <p className="section-subtitle reveal reveal--up">
            We operate across Egypt's top watersports destinations — pick your spot.
          </p>
          <div className="reveal reveal--up" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
          }}>
            {[
              { name: 'Sharm El Sheikh', sub: 'Nabq Bay — lagoon spot', flag: '🏖️' },
              { name: 'Dahab', sub: 'World-class wind corridor', flag: '💨' },
              { name: 'Hurghada', sub: 'Red Sea kite safari base', flag: '🪁' },
            ].map(({ name, sub, flag }) => (
              <a
                key={name}
                href={`https://wa.me/201150919620?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(name)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  gap: '0.5rem', padding: '2rem 1rem',
                  background: 'var(--clr-surface, #f5f8ff)',
                  borderRadius: '1rem', border: '1px solid var(--clr-border, #e0e8f0)',
                  textDecoration: 'none', color: 'inherit',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)' }}
                onMouseOut={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
              >
                <span style={{ fontSize: '2.5rem' }}>{flag}</span>
                <strong style={{ fontSize: '1.05rem' }}>{name}</strong>
                <span style={{ fontSize: '0.8rem', opacity: 0.65 }}>{sub}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--clr-primary)', marginTop: '0.25rem' }}>
                  Enquire →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}