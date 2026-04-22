import { Link } from 'react-router-dom'

const services = [
  {
    num: '01',
    title: 'Curtain Wall & Storefront',
    description:
      'Non-structural exterior cladding with large glass expanses for maximum natural light and sleek architectural aesthetics.',
    features: ['Unitized systems', 'Stick-built curtain walls', 'Storefront glazing', 'Custom engineering'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
        <rect x="6" y="6" width="24" height="24" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="34" y="6" width="24" height="24" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="6" y="34" width="24" height="24" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="34" y="34" width="24" height="24" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="30" y1="0" x2="30" y2="64" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <line x1="0" y1="30" x2="64" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Metal Panel Fabrication',
    description:
      'Custom architectural metal panels crafted for durability, thermal performance, and striking modern aesthetics.',
    features: ['Aluminum composite panels', 'Zinc & copper cladding', 'Custom finishes', 'Concealed fastening'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
        <path d="M6 16 L32 6 L58 16 L58 48 L32 58 L6 48 Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 16 L32 26 L58 16" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M32 26 L32 58" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M19 11 L19 38" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <path d="M45 11 L45 38" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Commercial Window & Door Systems',
    description:
      'High-performance entry systems engineered to meet the most stringent energy efficiency and safety standards.',
    features: ['Thermally broken frames', 'Hurricane-rated', 'Automatic entries', 'Custom hardware'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
        <rect x="8" y="8" width="48" height="48" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="8" y="8" width="22" height="48" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="19" y1="8" x2="19" y2="56" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
        <line x1="8" y1="32" x2="30" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
        <circle cx="30" cy="32" r="2" fill="currentColor"/>
        <path d="M50 24 L50 40" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Waterproofing Solutions',
    description:
      'Advanced moisture protection systems safeguarding building exteriors and façade joints against water infiltration.',
    features: ['Air/vapor barriers', 'Sealant replacement', 'Below-grade systems', 'Leak investigation'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
        <path d="M32 6 C32 6 10 24 10 40 A22 22 0 0 0 54 40 C54 24 32 6 32 6Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M32 22 C32 22 22 32 22 40 A10 10 0 0 0 42 40 C42 32 32 22 32 22Z" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Fire-Rated Glass & Skylights',
    description:
      'Certified fire-rated glazing systems and custom skylights that maintain code compliance without compromising design.',
    features: ['UL/FM certified', '45–120 min ratings', 'Custom skylights', 'Smoke baffles'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
        <rect x="10" y="10" width="44" height="44" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M26 38 C26 30 36 28 36 20 C36 14 32 10 32 10 C32 10 28 14 28 20 C28 26 34 28 32 32" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
        <path d="M20 54 L44 54" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Retail Glass, Trim & Framing',
    description:
      'Premium storefronts with precision-crafted metal details, architectural trim, and high-security framing solutions.',
    features: ['All-glass entrances', 'Architectural trim', 'Security glazing', 'Designer hardware'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
        <path d="M6 48 L6 28 L32 14 L58 28 L58 48" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="32" width="14" height="16" stroke="currentColor" strokeWidth="1"/>
        <rect x="36" y="32" width="14" height="16" stroke="currentColor" strokeWidth="1"/>
        <line x1="6" y1="48" x2="58" y2="48" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '07',
    title: 'GFRC Panels, Glass Railings & Balconies',
    description:
      'Lightweight glass fiber reinforced concrete panels combined with structural glass railings for elegant façade solutions.',
    features: ['GFRC cladding', 'Structural glass rails', 'Balcony systems', 'Custom profiles'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
        <rect x="6" y="40" width="52" height="6" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="12" y1="40" x2="12" y2="24" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="24" y1="40" x2="24" y2="24" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="38" y1="40" x2="38" y2="24" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="52" y1="40" x2="52" y2="24" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="6" y1="24" x2="58" y2="24" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="20" y="10" width="24" height="12" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
      </svg>
    ),
  },
]

const process = [
  { n: '01', t: 'Consultation', d: 'We meet to understand your vision, scope, site conditions, and budget.' },
  { n: '02', t: 'Design & Engineering', d: 'Detailed shop drawings, load calculations, and system selection.' },
  { n: '03', t: 'Fabrication', d: 'In-house and partnered fabrication to spec — tolerances to the millimeter.' },
  { n: '04', t: 'Installation', d: 'Certified installers execute the plan safely, cleanly, and on schedule.' },
  { n: '05', t: 'Sign-Off & Warranty', d: 'Commissioning, final walkthrough, and long-term system warranty.' },
]

export default function ServicesPage() {
  return (
    <main className="pt-28 md:pt-32">
      {/* Hero banner */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden bg-ink-850 border-b border-ink-700">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange" />
        <div className="absolute inset-0 drift-grid opacity-40 mask-fade-b" />

        <div className="max-w-7xl mx-auto relative">
          <p className="section-label mb-5 animate-fade-in">What We Build</p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[120px] text-white leading-[0.9] animate-slide-right" style={{ opacity: 0 }}>
            SERVICES &<br /><span className="text-gradient-orange">CAPABILITIES</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-up" style={{ opacity: 0, animationDelay: '0.4s' }}>
            Comprehensive building envelope solutions delivered with precision,
            craftsmanship, and unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6 md:px-10 bg-ink-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-700">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`relative bg-ink-900 p-8 md:p-10 group hover:bg-ink-800 transition-all duration-500 overflow-hidden reveal d-${Math.min(i + 1, 8)}`}
              >
                {/* Orange hover bar */}
                <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full bg-orange transition-all duration-700" />

                {/* Big numeral watermark */}
                <div className="absolute top-4 right-4 font-heading text-7xl text-white/[0.04] group-hover:text-orange/20 leading-none select-none transition-colors duration-500">
                  {s.num}
                </div>

                <div className="relative">
                  <div className="text-white/30 group-hover:text-orange transition-colors duration-500 mb-6">
                    {s.icon}
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl text-white mb-4 group-hover:text-orange transition-colors duration-500 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{s.description}</p>

                  <ul className="space-y-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-white/50">
                        <span className="w-1 h-1 bg-orange rounded-full flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-orange opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                    <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Inquire</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA tile */}
            <Link
              to="/contact"
              className="relative bg-orange p-10 flex flex-col justify-between group hover:bg-orange-dark transition-colors duration-500 overflow-hidden reveal d-8"
            >
              <div className="absolute inset-0 bg-sheen bg-[length:300%_100%] animate-sheen pointer-events-none" />
              <div className="relative">
                <div className="font-heading text-ink-950 text-4xl leading-tight">
                  HAVE A<br />PROJECT<br />IN MIND?
                </div>
              </div>
              <div className="relative flex items-center gap-3 mt-8">
                <span className="text-ink-950 font-semibold text-xs tracking-widest uppercase">Get a Free Quote</span>
                <svg className="w-6 h-6 text-ink-950 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 px-6 md:px-10 bg-ink-850 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-30 mask-radial" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4 justify-center" style={{ display: 'inline-flex' }}>How We Work</p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none">
              OUR <span className="text-gradient-orange">PROCESS</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-orange to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((p, i) => (
                <div key={p.n} className={`relative reveal d-${i + 1}`}>
                  <div className="glass-panel p-8 h-full group hover:border-orange/40 transition-all duration-500 tilt-card">
                    <div className="w-14 h-14 bg-orange rounded-full flex items-center justify-center mb-5 shadow-orange-glow">
                      <span className="font-heading text-xl text-ink-950">{p.n}</span>
                    </div>
                    <h3 className="font-heading text-xl text-white mb-3 group-hover:text-orange transition-colors duration-300">
                      {p.t}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-10 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 drift-grid opacity-40 mask-radial" />
        <div className="max-w-5xl mx-auto text-center relative reveal">
          <h2 className="font-heading text-4xl md:text-6xl text-white leading-none mb-6">
            NOT SURE WHICH SERVICE<br />IS RIGHT FOR YOUR PROJECT?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10">
            Send us a brief — we'll recommend the best approach, scope, and timeline.
          </p>
          <Link to="/contact" className="btn-primary">Get a Free Consultation</Link>
        </div>
      </section>
    </main>
  )
}
