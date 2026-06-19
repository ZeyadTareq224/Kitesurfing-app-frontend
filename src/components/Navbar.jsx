import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Camps' },
  { to: '/prices', label: 'Prices' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      role="banner"
    >

      <div className="navbar__inner container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar__logo"
          aria-label="Kiteboarding OS Home"
        >
          <img
            src="/assets/images/nav_logo.png"
            alt="Old School Kiteboarding"
            className="navbar__logo-img"
          />
        </Link>


        {/* Desktop links */}
        <nav
          className="navbar__links"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>


        {/* CTA */}
        <div className="navbar__cta">

          <a
            href="https://buy.stripe.com/8wMaIq6N05ExbscdQQ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary navbar__btn"
          >
            Book Now
          </a>

        </div>


        {/* Mobile menu */}
        <button
          className="navbar__hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(v => !v)}
        >
          {open
            ? <X size={24} />
            : <Menu size={24} />
          }

        </button>

      </div>



      {/* Mobile drawer */}

      <div
        id="mobile-menu"
        className={`navbar__mobile${open ? ' navbar__mobile--open' : ''}`}
        aria-hidden={!open}
      >

        <nav aria-label="Mobile navigation">

          {NAV_LINKS.map(({ to, label }) => (

            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>

          ))}


          <a
            href="https://buy.stripe.com/8wMaIq6N05ExbscdQQ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary navbar__mobile-btn"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>


        </nav>

      </div>


    </header>
  )
}