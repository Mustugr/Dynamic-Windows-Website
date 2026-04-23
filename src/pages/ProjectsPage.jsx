import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

const allProjects = [
  {
    name: '500 Main St',
    location: 'New Rochelle, NY',
    title: 'Modern Residential Tower Façade',
    type: 'Residential Facade',
    year: '2024',
    description:
      'This striking high-rise features sleek curtain walls, floor-to-ceiling windows, and custom metal panels — all installed by our expert team. From the street-level storefronts to the upper-level window systems, every detail was designed and delivered to elevate both the look and performance of this residential development.',
    scope: ['Window Install', 'Storefront', 'Slab Covers'],
    img: '/assets/projects/500-main-st.webp',
    category: 'facade',
  },
  {
    name: '646 11th Ave',
    location: 'New York, NY',
    title: 'Urban Retail Podium & Mixed-Use Façade Upgrade',
    type: 'Mixed-Use Facade',
    year: '2023',
    description:
      'This dynamic corner property features a modernized retail base beneath a mixed-use structure of residences, offices, and commercial spaces. The redesigned street-level façade brings together clean lines, high-performance glass, and precision detailing — enhancing visibility, access, and architectural cohesion.',
    scope: [],
    img: '/assets/projects/646-11th-ave.webp',
    category: 'facade',
  },
  {
    name: '26 Sharpe Ave',
    location: 'Staten Island, NY',
    title: 'New World Prep Charter School — Custom Skylight',
    type: 'Skylight Roofing System',
    year: '2022',
    description:
      'At New World Prep Charter School, we engineered and installed a custom skylight roofing system designed to enhance natural lighting and create an inspiring educational environment. The structure features high-performance glazing panels, precision framing, and a geometrically complex layout — delivering both architectural appeal and long-term durability. From initial hoist to final seal, this project reflects our commitment to safe execution and detail-oriented craftsmanship.',
    scope: ['Windows Installation', 'Panels Installation', 'Storefront Installation'],
    img: '/assets/projects/26-sharpe-ave.webp',
    category: 'skylights',
  },
  {
    name: '1525 N American St',
    location: 'Philadelphia, PA',
    title: 'GFRC Panel Façade',
    type: 'GFRC Panel Facade',
    year: '2022',
    description:
      'This modern mid-rise development in the heart of Philadelphia features a refined architectural envelope clad in GFRC (Glass Fiber Reinforced Concrete) panels. The team handled furnishing and installation of the custom façade system, providing a durable and visually consistent surface that works with the building’s contemporary design.',
    scope: ['Furnish and Install GFRC Panels'],
    img: '/assets/projects/1525-n-american.webp',
    category: 'facade',
  },
  {
    name: '413 Summit Ave',
    location: 'Jersey City, NJ',
    title: 'Façade Systems & Window Wall',
    type: 'Window Wall System',
    year: '2023',
    description:
      'Situated in the growing Journal Square neighborhood, 413 Summit Avenue is a 19-story residential tower that will deliver 148 modern units, 4,900 square feet of retail space, and convenient access to transit via the nearby PATH station. The structure adds substantially to Jersey City’s developing urban landscape. Dynamic Windows System provided metal slab covers, installed windows, and constructed a complete window wall system to ensure a polished, long-lasting facade.',
    scope: ['Metal Slab Covers Supply and Install', 'Window Installation', 'Window Wall Installation'],
    img: '/assets/projects/413-summit-ave.webp',
    category: 'facade',
  },
  {
    name: '885 Washington Blvd',
    location: 'Stamford, CT',
    title: 'The Smyth — Curtain Wall Installation',
    type: 'Curtain Wall',
    year: '2022',
    description:
      'The Smyth is a 16-story mixed-use development containing over 400 residential units and more than 19,000 square feet of retail space in downtown Stamford. Positioned near the city’s transit and entertainment centers, it represents a key initiative in urban revitalization. Dynamic Windows System was selected to execute the complete curtain wall installation, delivering a high-performance exterior that balances visual appeal with modern efficiency and durability standards.',
    scope: ['Curtain Wall Installation'],
    img: '/assets/projects/885-washington-blvd.webp',
    category: 'curtain-wall',
  },
  {
    name: '600 North Ave',
    location: 'New Rochelle, NY',
    title: 'Mixed-Use Residential & Retail Façade',
    type: 'Curtain Wall & Storefront',
    year: '2022',
    description:
      'This downtown New Rochelle development merges street-level retail with residential and community spaces above. The building’s modern design is complemented by transparent glazing and contemporary façade detailing. Dynamic Windows System installed the curtain wall system, provided laminated safety glass, and completed storefront work to create an efficient, visually prominent façade.',
    scope: ['Curtain Wall Installation', 'Furnish and Install Laminated Glass', 'Furnish and Install Storefront'],
    img: '/assets/projects/600-north-ave.webp',
    category: 'curtain-wall',
  },
  {
    name: '1 Nassau St',
    location: 'Brooklyn, NY',
    title: 'VITAL Brooklyn — Adaptive Reuse',
    type: 'Adaptive Reuse · Retail',
    year: '2023',
    description:
      'This adaptive reuse project converted an industrial facility into VITAL Brooklyn, an indoor climbing gym and lifestyle destination. The work blends modern wellness architecture with Brooklyn’s industrial heritage, featuring expansive retail glazing, custom windows, and natural daylight enhancements.',
    scope: ['Fire Rated Glazing', 'Glass', 'Skylight', 'Furnish and Install Waterproofing', 'Fabricate and Install Windows', 'Fabricate and Install Storefront'],
    img: '/assets/projects/1-nassau-st.webp',
    category: 'storefront',
  },
  {
    name: '30 Park Lane — The Wave',
    location: 'Jersey City, NJ',
    title: 'Luxury Waterfront Residential Tower — The Wave',
    type: 'Glass Railings · Windows',
    year: '2024',
    description:
      'Located in the prestigious Newport neighborhood, The Wave is a modern high-rise residential tower offering panoramic waterfront views of Manhattan. The building features specialized glazing and balcony systems that contribute to both its visual appeal and resident comfort.',
    scope: ['Glass Railings', 'Window Install', 'Balcony Doors Install', 'Balcony Dividers'],
    img: '/assets/projects/30-park-lane.webp',
    category: 'curtain-wall',
  },
  {
    name: 'Great Wolf Lodge',
    location: 'Norwich, CT',
    title: 'Family Resort & Waterpark Glazing Systems',
    type: 'Resort Glazing',
    year: '2022',
    description:
      'This project involved delivering glazing solutions for a large-scale indoor waterpark and resort destination in eastern Connecticut. Dynamic Windows System provided durable and high-efficiency glazing solutions suitable for both wet environments and guest room comfort.',
    scope: ['Waterpark — Window Installation', 'Resort / Hotel — Window Installation'],
    img: '/assets/projects/great-wolf-lodge.webp',
    category: 'windows',
  },
  {
    name: '345 Baldwin Ave',
    location: 'Jersey City, NJ',
    title: 'Mid-Rise Residential Tower Glazing',
    type: 'Residential Glazing',
    year: '2023',
    description:
      'Located in the heart of Jersey City, 345 Baldwin Avenue is a modern residential high-rise designed to deliver urban comfort with sleek architectural appeal.',
    scope: ['Window Install', 'Storefront', 'Slab Covers'],
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

  // Lock scroll + ESC-to-close while the lightbox is open.
  useEffect(() => {
    if (!lightbox) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
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
                className="relative overflow-hidden cursor-pointer group bg-ink-900 aspect-[4/3] animate-fade-up"
                style={{ animationDelay: `${Math.min(i * 40, 240)}ms` }}
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

      {/* Lightbox — portaled to <body> so it escapes the PageTransition
          ancestor's transform (which would otherwise scope `position: fixed`
          to the page wrapper and push the modal behind the navbar). */}
      {lightbox && createPortal(
        <div
          className="fixed inset-0 z-[100] bg-ink-950/92 backdrop-blur-xl animate-fade-in overflow-y-auto overscroll-contain"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title || lightbox.name}
        >
          {/* Close button — fixed so it stays visible regardless of scroll */}
          <button
            className="fixed top-5 right-5 md:top-6 md:right-6 z-[110] w-11 h-11 md:w-12 md:h-12 bg-ink-950/90 border border-white/25 hover:border-orange hover:bg-orange flex items-center justify-center text-white transition-all duration-300 shadow-2xl"
            onClick={(e) => { e.stopPropagation(); setLightbox(null) }}
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Vertically centered on large screens, naturally flows on small */}
          <div className="min-h-full flex items-center justify-center p-4 md:p-8">
            <div
              className="relative w-full max-w-6xl animate-scale-in my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-[1.1fr_1fr] gap-0 bg-ink-900 border border-ink-700">
                {/* Image */}
                <div className="relative bg-ink-950 aspect-[4/3] md:aspect-auto md:min-h-full">
                  <img
                    src={lightbox.img}
                    alt={lightbox.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-ink-950/85 backdrop-blur-sm px-3 py-1 border border-white/10">
                    <span className="text-orange text-[10px] tracking-[0.25em] uppercase font-mono">{lightbox.year}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 md:p-10 flex flex-col">
                  <div className="text-orange text-[10px] tracking-[0.3em] uppercase font-mono mb-4">
                    {lightbox.type}
                  </div>
                  {lightbox.title && (
                    <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-3">
                      {lightbox.title}
                    </h3>
                  )}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-5 mb-5 border-b border-ink-700 text-white/60 text-xs tracking-wider uppercase">
                    <span>{lightbox.name}</span>
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {lightbox.location}
                    </span>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {lightbox.description}
                  </p>

                  {lightbox.scope && lightbox.scope.length > 0 && (
                    <div className="mb-8">
                      <div className="section-label mb-4">Scope of Work</div>
                      <ul className="space-y-2.5">
                        {lightbox.scope.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-white/80 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-orange flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    to="/contact"
                    onClick={() => setLightbox(null)}
                    className="btn-primary mt-auto self-start"
                  >
                    Start a Similar Project →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
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
