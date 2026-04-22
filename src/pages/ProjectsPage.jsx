import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const allProjects = [
  {
    name: '500 Main Street',
    location: 'New Jersey',
    type: 'Curtain Wall',
    year: '2023',
    scope: '12-story commercial facade with unitized curtain wall system.',
    img: '/assets/projects/500-main-st.webp',
    category: 'curtain-wall',
  },
  {
    name: '646 11th Avenue',
    location: 'New York, NY',
    type: 'Curtain Wall System',
    year: '2023',
    scope: 'High-rise curtain wall installation in Midtown Manhattan.',
    img: '/assets/projects/646-11th-ave.webp',
    category: 'curtain-wall',
  },
  {
    name: '26 Sharpe Avenue',
    location: 'New Jersey',
    type: 'Skylight Roofing System',
    year: '2022',
    scope: 'Custom skylight roofing with fire-rated glazing.',
    img: '/assets/projects/26-sharpe-ave.webp',
    category: 'skylights',
  },
  {
    name: '1525 N American Street',
    location: 'Philadelphia, PA',
    type: 'Facade & Glazing',
    year: '2022',
    scope: 'Full building envelope with metal panel accents.',
    img: '/assets/projects/1525-n-american.webp',
    category: 'facade',
  },
  {
    name: '413 Summit Avenue',
    location: 'Jersey City, NJ',
    type: 'Facades & Windows',
    year: '2023',
    scope: 'Mixed-use high-rise facade and window systems.',
    img: '/assets/projects/413-summit-ave.webp',
    category: 'facade',
  },
  {
    name: '885 Washington Blvd',
    location: 'Jersey City, NJ',
    type: 'Commercial Windows',
    year: '2021',
    scope: 'Thermally broken commercial window replacement.',
    img: '/assets/projects/885-washington-blvd.webp',
    category: 'windows',
  },
  {
    name: '600 North Avenue',
    location: 'New Jersey',
    type: 'Storefront & Glazing',
    year: '2022',
    scope: 'Retail storefront with all-glass entry system.',
    img: '/assets/projects/600-north-ave.webp',
    category: 'storefront',
  },
  {
    name: '1 Nassau Street',
    location: 'New York, NY',
    type: 'Retail Glass & Framing',
    year: '2023',
    scope: 'Landmark retail renovation with custom framing.',
    img: '/assets/projects/1-nassau-st.webp',
    category: 'storefront',
  },
  {
    name: '30 Park Lane — The Wave',
    location: 'New Jersey',
    type: 'Curtain Wall System',
    year: '2024',
    scope: 'Signature curved curtain wall for luxury residences.',
    img: '/assets/projects/30-park-lane.webp',
    category: 'curtain-wall',
  },
  {
    name: 'Great Wolf Lodge',
    location: 'Multi-State',
    type: 'Commercial Facade',
    year: '2022',
    scope: 'Hospitality facade systems across multiple properties.',
    img: '/assets/projects/great-wolf-lodge.webp',
    category: 'facade',
  },
  {
    name: '345 Baldwin Avenue',
    location: 'Jersey City, NJ',
    type: 'Metal Panel & Windows',
    year: '2023',
    scope: 'Aluminum composite panels with integrated window systems.',
    img: '/assets/projects/345-baldwin-ave.webp',
    category: 'facade',
  },
]

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'curtain-wall', label: 'Curtain Wall' },
  { key: 'facade', label: 'Facade' },
  { key: 'storefront', label: 'Storefront' },
  { key: 'windows', label: 'Windows' },
  { key: 'skylights', label: 'Skylights' },
]

export default function ProjectsPage() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'all' ? allProjects : allProjects.filter((p) => p.category === active)

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <main className="pt-28 md:pt-32">
      {/* Hero banner */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden bg-ink-850 border-b border-ink-700">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange" />
        <div className="absolute inset-0 drift-grid opacity-40 mask-fade-b" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-orange/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative">
          <p className="section-label mb-5 animate-fade-in">Our Work</p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[120px] text-white leading-[0.9] animate-slide-right" style={{ opacity: 0 }}>
            PROJECT<br /><span className="text-gradient-orange">PORTFOLIO</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-up" style={{ opacity: 0, animationDelay: '0.4s' }}>
            Bold visions, expertly built. Every project tells a story — this is how we bring it to life.
          </p>

          <div className="mt-12 flex flex-wrap gap-8 animate-fade-up" style={{ opacity: 0, animationDelay: '0.6s' }}>
            {[
              { n: '100+', l: 'Projects' },
              { n: '20+', l: 'Years' },
              { n: '2', l: 'States' },
              { n: '5★', l: 'Quality' },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-orange pl-4">
                <div className="font-heading text-3xl text-white">{s.n}</div>
                <div className="text-white/50 text-[10px] tracking-[0.3em] uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-20 md:top-28 z-30 bg-ink-900/95 backdrop-blur-xl border-b border-ink-700 px-6 md:px-10 py-4">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => {
            const count = cat.key === 'all' ? allProjects.length : allProjects.filter((p) => p.category === cat.key).length
            return (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`flex-shrink-0 px-5 py-2.5 text-[10px] tracking-[0.22em] uppercase font-semibold transition-all duration-300 flex items-center gap-2 ${
                  active === cat.key
                    ? 'bg-orange text-white shadow-orange-glow'
                    : 'border border-ink-600 text-white/55 hover:text-white hover:border-white/30'
                }`}
              >
                {cat.label}
                <span className={`text-[9px] ${active === cat.key ? 'text-white/70' : 'text-white/30'}`}>
                  ({count})
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 px-6 md:px-10 bg-ink-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-700">
            {filtered.map((project, i) => (
              <div
                key={project.name}
                className={`relative overflow-hidden cursor-pointer group bg-ink-900 aspect-[4/3] reveal d-${Math.min(i % 6 + 1, 6)}`}
                onClick={() => setLightbox(project)}
              >
                <img
                  src={project.img}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent" />
                <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 transition-colors duration-500" />

                {/* Year tag */}
                <div className="absolute top-4 left-4 bg-ink-950/80 backdrop-blur-sm px-3 py-1 border border-white/10">
                  <span className="text-orange text-[10px] tracking-[0.25em] uppercase font-mono">{project.year}</span>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-orange text-[10px] tracking-[0.25em] uppercase mb-2 font-semibold">{project.type}</div>
                  <h3 className="font-heading text-2xl md:text-3xl text-white leading-tight mb-1">{project.name}</h3>
                  <p className="text-white/60 text-xs flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-orange flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-orange-glow">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-0 border-r-0 group-hover:border-b-[60px] group-hover:border-r-[60px] border-b-orange border-r-transparent transition-all duration-500" />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-white/30 text-sm">No projects in this category yet.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] bg-ink-950/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 border border-white/20 hover:border-orange hover:bg-orange flex items-center justify-center text-white transition-all duration-300"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="max-w-5xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={lightbox.img}
                alt={lightbox.name}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="mt-6 px-2 grid md:grid-cols-[1fr_auto] gap-6 items-end">
              <div>
                <div className="text-orange text-[10px] tracking-[0.3em] uppercase font-mono mb-2">
                  {lightbox.year} · {lightbox.type}
                </div>
                <h3 className="font-heading text-4xl md:text-5xl text-white mb-2">{lightbox.name}</h3>
                <p className="text-white/60 text-sm mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {lightbox.location}
                </p>
                <p className="text-white/70 text-sm max-w-xl leading-relaxed">{lightbox.scope}</p>
              </div>
              <Link to="/contact" onClick={() => setLightbox(null)} className="btn-primary">
                Start a Similar Project →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="py-24 px-6 md:px-10 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 drift-grid opacity-40 mask-radial" />
        <div className="max-w-6xl mx-auto border border-ink-600 p-10 md:p-16 glass-panel relative reveal">
          <div className="grid md:grid-cols-[1.5fr_auto] gap-10 items-center">
            <div>
              <p className="section-label mb-3">Bold Visions, Expertly Built</p>
              <h3 className="font-heading text-4xl md:text-6xl text-white leading-none">
                EVERY PROJECT<br />TELLS A <span className="text-gradient-orange">STORY</span>
              </h3>
              <p className="text-white/60 text-sm mt-6 max-w-xl leading-relaxed">
                Have a vision in mind? Let's discuss how we can bring it to life with
                precision engineering and exceptional craftsmanship.
              </p>
            </div>
            <Link to="/contact" className="btn-primary flex-shrink-0">
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
