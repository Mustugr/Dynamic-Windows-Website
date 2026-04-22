import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Thin top bar with contact */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-[60] bg-ink-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-9 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase">
          <div className="flex items-center gap-6 text-white/50">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse" />
              Licensed & Insured · NJ · NY
            </span>
          </div>
          <div className="flex items-center gap-6 text-white/60">
            <a href="tel:+12014082134" className="hover:text-orange transition-colors">+1 201 408 2134</a>
            <span className="text-white/20">|</span>
            <a href="mailto:info@dynamicwindowssystem.com" className="hover:text-orange transition-colors">info@dynamicwindowssystem.com</a>
          </div>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 md:top-9 top-0 ${
          scrolled
            ? 'bg-ink-950/95 backdrop-blur-xl border-b border-white/8 shadow-2xl shadow-black/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <img src="/assets/logo.webp" alt="Dynamic Windows System" className="h-11 w-auto group-hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* Desktop Tabs */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-1 bg-ink-900/60 border border-white/5 rounded-none px-1 py-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `relative px-5 py-2.5 text-xs font-semibold tracking-[0.22em] uppercase transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-orange shadow-orange-glow'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>

          <Link to="/contact" className="btn-primary hidden md:inline-flex">
            Get a Quote
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[10px] bg-orange' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[10px] bg-orange' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 bg-ink-950 border-t border-white/8 ${
            menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-2">
            {navItems.map((item, i) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-5 py-4 text-sm font-semibold tracking-[0.25em] uppercase transition-all duration-300 border-l-2 ${
                    isActive
                      ? 'text-orange border-orange bg-orange/5'
                      : 'text-white/60 hover:text-white border-transparent hover:border-white/20 hover:bg-white/5'
                  }`
                }
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-4 text-center">
              Get a Quote →
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
