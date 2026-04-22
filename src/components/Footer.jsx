import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

const serviceLinks = [
  'Curtain Wall & Storefront',
  'Metal Panel Fabrication',
  'Commercial Windows',
  'Waterproofing',
  'Fire-Rated Glass',
  'GFRC Panels & Railings',
]

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-700 relative overflow-hidden">
      {/* Top orange strip */}
      <div className="h-1 bg-gradient-to-r from-transparent via-orange to-transparent" />

      {/* Blueprint drift background */}
      <div className="absolute inset-0 drift-grid opacity-20 mask-radial pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/assets/logo.webp" alt="Dynamic Windows System" className="h-12 w-auto mb-6" />
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Built to Perform. Designed to Elevate. High-precision curtain walls,
              windows, storefronts, and façade systems for modern buildings across NJ & NY.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+12014082134" className="btn-primary text-xs py-3 px-5">
                Call Now
              </a>
              <Link to="/contact" className="btn-outline text-xs py-3 px-5">
                Get a Quote
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-4">
              {['Licensed', 'Insured', 'AAMA', 'ASTM'].map((b) => (
                <div key={b} className="px-4 py-2 border border-white/10 text-white/60 text-[10px] tracking-[0.25em] uppercase">
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-orange" />
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-white/55 hover:text-orange transition-colors text-sm"
                  >
                    <span className="w-0 h-px bg-orange group-hover:w-4 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-orange" />
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-white/55 hover:text-orange transition-colors text-sm"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-orange" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="text-sm">
                <div className="text-white/30 text-[9px] tracking-[0.25em] uppercase mb-1">Address</div>
                <p className="text-white/60 leading-relaxed">
                  560 Sylvan Ave, Suite 3240<br />
                  Englewood Cliffs, NJ 07632
                </p>
              </li>
              <li className="text-sm">
                <div className="text-white/30 text-[9px] tracking-[0.25em] uppercase mb-1">Phone</div>
                <a href="tel:+12014082134" className="text-white/60 hover:text-orange transition-colors">
                  +1 201 408 2134
                </a>
              </li>
              <li className="text-sm">
                <div className="text-white/30 text-[9px] tracking-[0.25em] uppercase mb-1">Email</div>
                <a href="mailto:info@dynamicwindowssystem.com" className="text-white/60 hover:text-orange transition-colors break-all">
                  info@dynamicwindowssystem.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Dynamic Windows System, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/30 text-xs">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse" />
              Englewood Cliffs, NJ · Licensed & Insured
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
