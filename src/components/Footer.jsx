import { Link } from 'react-router-dom'
import { Wind, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'
import './Footer.css'

const QUICK_LINKS = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About Us' },
  { to: '/services', label: 'Camps'    },
  { to: '/prices',   label: 'Prices'   },
  { to: '/blog',     label: 'Blog'     },
]

const SPORTS = [
  'Kitesurfing', 'Windsurfing', 'Wing Foiling',
  'Wakeboarding', 'Stand Up Paddle', 'Kite Safari',
]

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      {/* Wave divider */}
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="var(--clr-bg-2)"
          />
        </svg>
      </div>

      <div className="footer__body">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <Wind size={24} strokeWidth={2.2} />
              <span>Kite<span>OS</span></span>
            </div>
            <p className="footer__tagline">
              The Old School of Kitesurfing, Windsurfing &amp; Wingfoiling.
              Teaching Egypt's waters since 2012.
            </p>
            <div className="footer__socials">
              <a
                href="https://instagram.com/kiteboardingos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer__social-link"
                id="footer-instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/kiteboardingos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer__social-link"
                id="footer-facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com/@kiteboardingos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="footer__social-link"
                id="footer-youtube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer__col">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__list">
              {QUICK_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports */}
          <div className="footer__col">
            <h3 className="footer__heading">Our Sports</h3>
            <ul className="footer__list">
              {SPORTS.map(sport => (
                <li key={sport}>
                  <Link to="/services" className="footer__link">{sport}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__heading">Contact Us</h3>
            <ul className="footer__contact-list">
              <li>
                <MapPin size={15} />
                <span>Sharm El Sheikh · Dahab · Hurghada, Egypt</span>
              </li>
              <li>
                <Phone size={15} />
                <a href="tel:+201150919620" className="footer__link" id="footer-phone">
                  +20 115 091 9620
                </a>
              </li>
            </ul>
            <a
              href="https://wa.me/201150919620"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary footer__whatsapp"
              id="footer-whatsapp"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <div className="container footer__bottom-inner">
            <p className="footer__copy">
              © 2012–2026 Kiteboarding OS — The Old School. All rights reserved.
            </p>
            <p className="footer__credits">
              Sharm El Sheikh · Dahab · Hurghada · Egypt
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
