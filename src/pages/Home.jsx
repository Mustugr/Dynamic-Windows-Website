import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import MarqueeStrip from '../components/MarqueeStrip'
import LandingAnimation from '../components/LandingAnimation'

const featured = [
  { name: '646 11th Avenue', location: 'New York, NY', img: '/assets/projects/646-11th-ave.webp', type: 'Curtain Wall' },
  { name: '413 Summit Avenue', location: 'Jersey City, NJ', img: '/assets/projects/413-summit-ave.webp', type: 'Facades & Windows' },
  { name: '30 Park Lane — The Wave', location: 'New Jersey', img: '/assets/projects/30-park-lane.webp', type: 'Curtain Wall' },
  { name: '1 Nassau Street', location: 'New York, NY', img: '/assets/projects/1-nassau-st.webp', type: 'Retail Glass' },
]

const servicesTeaser = [
  { num: '01', title: 'Curtain Wall & Storefront', href: '/services' },
  { num: '02', title: 'Metal Panel Fabrication', href: '/services' },
  { num: '03', title: 'Commercial Windows & Doors', href: '/services' },
  { num: '04', title: 'Waterproofing Systems', href: '/services' },
]

export default function Home() {
  return (
    <main>
      <LandingAnimation />
      <Hero />

      <MarqueeStrip />

      {/* About teaser */}
      <section className="py-28 px-6 md:px-10 bg-ink-850 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <div className="relative reveal reveal-left">
              <div className="relative overflow-hidden group">
                <img
                  src="/assets/about-bg.webp"
                  alt="Precision glazing"
                  className="w-full h-[520px] object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
                <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-orange" />
                <div className="absolute -top-5 -left-5 w-20 h-20 border-2 border-orange" />
                {/* Scan line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-orange/30 to-transparent animate-scan" />
                </div>
              </div>

              <div className="absolute bottom-8 right-0 lg:-right-8 glass-panel px-8 py-6 z-10">
                <div className="font-heading text-5xl text-orange leading-none">20+</div>
                <div className="text-white/60 text-xs tracking-[0.2em] uppercase mt-1">Years of Excellence</div>
              </div>
            </div>

            <div className="reveal reveal-right">
              <p className="section-label mb-4">About the Company</p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-8">
                PRECISION<br />
                IN EVERY<br />
                <span className="text-gradient-orange">PANEL</span>
              </h2>

              <p className="text-white/60 leading-relaxed mb-5">
                Dynamic Windows System, Inc. is a premier facade and glazing contractor
                serving the New York and New Jersey metropolitan area. We specialize in
                delivering high-performance building envelope solutions.
              </p>
              <p className="text-white/60 leading-relaxed mb-10">
                From high-rise curtain walls to custom retail storefronts, our team of
                certified craftsmen bring exceptional quality to every project — on time,
                on budget, and above expectations.
              </p>

              <Link to="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-28 px-6 md:px-10 bg-ink-900 relative overflow-hidden">
        <div className="absolute inset-0 drift-grid opacity-30 mask-radial" />

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 reveal">
            <div>
              <p className="section-label mb-4">What We Do</p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none">
                OUR<br /><span className="text-gradient-orange">EXPERTISE</span>
              </h2>
            </div>
            <Link to="/services" className="btn-outline self-start md:self-auto">
              All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-700">
            {servicesTeaser.map((s, i) => (
              <Link
                key={s.title}
                to={s.href}
                className={`group relative bg-ink-900 p-10 md:p-12 overflow-hidden hover:bg-ink-800 transition-colors duration-500 reveal d-${i + 1}`}
              >
                <div className="absolute top-0 left-0 h-px bg-orange w-0 group-hover:w-full transition-all duration-700" />

                <div className="flex items-start justify-between gap-4 mb-8">
                  <span className="font-heading text-6xl text-white/10 group-hover:text-orange/80 transition-colors duration-500">
                    {s.num}
                  </span>
                  <svg className="w-6 h-6 text-white/30 group-hover:text-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>

                <h3 className="font-heading text-3xl md:text-4xl text-white mb-3 group-hover:text-orange transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-white/40 text-sm tracking-widest uppercase">
                  View Service
                </p>
              </Link>
            ))}

            {/* CTA tile */}
            <Link
              to="/services"
              className="group relative bg-orange p-10 md:p-12 flex flex-col justify-between hover:bg-orange-dark transition-colors duration-500 md:col-span-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-sheen bg-[length:300%_100%] animate-sheen pointer-events-none" />
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-ink-950/70 text-[10px] tracking-[0.35em] uppercase font-semibold mb-3">
                    Comprehensive Solutions
                  </p>
                  <h3 className="font-heading text-4xl md:text-5xl text-ink-950 leading-none">
                    SEE ALL<br />7 SERVICES
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-ink-950 font-semibold text-xs tracking-widest uppercase">Explore</span>
                  <svg className="w-8 h-8 text-ink-950 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects teaser */}
      <section className="py-28 px-6 md:px-10 bg-ink-850">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 reveal">
            <div>
              <p className="section-label mb-4">Our Portfolio</p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none">
                FEATURED<br /><span className="text-gradient-orange">PROJECTS</span>
              </h2>
            </div>
            <Link to="/projects" className="btn-outline self-start md:self-auto">
              Full Portfolio →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-700">
            {featured.map((p, i) => (
              <Link
                key={p.name}
                to="/projects"
                className={`relative overflow-hidden group bg-ink-900 aspect-[3/4] reveal d-${i + 1}`}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 transition-colors duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-orange text-[10px] tracking-[0.25em] uppercase mb-1">{p.type}</div>
                  <h3 className="font-heading text-2xl text-white leading-tight">{p.name}</h3>
                  <p className="text-white/50 text-xs mt-1">{p.location}</p>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 bg-orange flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us strip */}
      <section className="py-28 px-6 md:px-10 bg-ink-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange/5 rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4 justify-center" style={{ display: 'inline-flex' }}>Why Choose Us</p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none">
              THE <span className="text-gradient-orange">DYNAMIC</span> DIFFERENCE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-700">
            {[
              { n: '01', t: 'Certified Excellence', d: 'AAMA, ASTM, and local building code compliance on every project.' },
              { n: '02', t: 'Precision Engineering', d: 'Every measurement, panel, and seal executed with exacting precision.' },
              { n: '03', t: 'Turnkey Solutions', d: 'Design consultation through installation — we handle every phase in-house.' },
            ].map((r, i) => (
              <div
                key={r.t}
                className={`relative bg-ink-900 p-10 group hover:bg-ink-800 transition-colors duration-500 reveal d-${i + 1}`}
              >
                <div className="font-heading text-6xl text-orange/30 group-hover:text-orange transition-colors duration-500 mb-6">
                  {r.n}
                </div>
                <h3 className="font-heading text-2xl text-white mb-3">{r.t}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{r.d}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-orange transition-all duration-700" />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center reveal">
            <Link to="/about" className="btn-primary">
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6 md:px-10 bg-ink-950 overflow-hidden">
        <div className="absolute inset-0 drift-grid opacity-40 mask-radial" />
        <div className="max-w-5xl mx-auto relative text-center reveal">
          <p className="section-label mb-6 justify-center" style={{ display: 'inline-flex' }}>Start Your Project</p>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-8">
            READY TO BUILD<br />
            SOMETHING <span className="text-gradient-orange">REMARKABLE?</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            From blueprint to ribbon-cutting, we bring precision, craftsmanship, and
            unwavering commitment to every project we touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Request a Quote</Link>
            <a href="tel:+12014082134" className="btn-outline">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.25 1.12a11 11 0 005.52 5.52l1.12-2.25a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
              </svg>
              Call +1 201 408 2134
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
