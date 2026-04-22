import { Link } from 'react-router-dom'
import BuildingAnimation from '../components/BuildingAnimation'

const highlights = [
  'Licensed & Fully Insured',
  'Code-Compliant Systems',
  'Custom Fabrication',
  'Certified Installers',
  'Energy-Efficient Solutions',
  'On-Time Delivery',
  'AAMA Certified',
  'ASTM Standards',
]

const milestones = [
  { year: '2003', title: 'Company Founded', desc: 'Dynamic Windows System, Inc. established in Englewood Cliffs, NJ.' },
  { year: '2013', title: 'First Curtain Wall Project', desc: 'Completed our first high-rise curtain wall installation in Manhattan.' },
  { year: '2017', title: '75+ Projects Milestone', desc: 'Expanded operations across the NY/NJ metropolitan area.' },
  { year: '2021', title: 'Custom Fabrication Facility', desc: 'Opened an in-house fabrication studio for end-to-end control.' },
  { year: '2024', title: '100+ Projects Completed', desc: 'Surpassed a century of successfully delivered facade projects.' },
]

const values = [
  { title: 'Precision', desc: 'Every measurement matters. Every seal is verified. Every panel is engineered.', icon: 'P' },
  { title: 'Integrity', desc: 'Transparent pricing, clear timelines, honest communication — always.', icon: 'I' },
  { title: 'Craftsmanship', desc: 'Decades of combined expertise distilled into every install we touch.', icon: 'C' },
  { title: 'Innovation', desc: 'We embrace new systems, materials, and techniques to push performance.', icon: 'N' },
]

export default function AboutPage() {
  return (
    <main className="pt-28 md:pt-32">
      {/* Hero banner */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden bg-ink-850 border-b border-ink-700">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange" />
        <div className="absolute inset-0 drift-grid opacity-40 mask-fade-b" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div>
            <p className="section-label mb-5 animate-fade-in">Our Story</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[110px] text-white leading-[0.9] animate-slide-right" style={{ opacity: 0 }}>
              BUILDING<br />
              <span className="text-gradient-orange">EXCELLENCE</span><br />
              SINCE 2003
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-xl mt-8 leading-relaxed animate-fade-up" style={{ opacity: 0, animationDelay: '0.5s' }}>
              20+ years of engineering precision, architectural vision, and meticulous
              craftsmanship — built into every facade we deliver.
            </p>
          </div>

          <div className="hidden lg:block h-[440px] animate-fade-in-slow" style={{ opacity: 0 }}>
            <BuildingAnimation className="h-full w-full" />
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-28 px-6 md:px-10 bg-ink-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <div className="relative reveal reveal-left">
              <div className="relative overflow-hidden group">
                <img
                  src="/assets/about-bg.webp"
                  alt="Dynamic Windows System precision glazing"
                  className="w-full h-[600px] object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-orange" />
                <div className="absolute -top-5 -left-5 w-24 h-24 border-2 border-orange" />
                {/* Scan */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-orange/40 to-transparent animate-scan" />
                </div>
              </div>

              <div className="absolute bottom-10 -right-4 lg:-right-10 glass-panel px-8 py-6 z-10">
                <div className="font-heading text-6xl text-orange leading-none">100+</div>
                <div className="text-white/60 text-xs tracking-[0.25em] uppercase mt-1">Projects Delivered</div>
              </div>
            </div>

            <div className="reveal reveal-right">
              <p className="section-label mb-4">Who We Are</p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-8">
                PRECISION<br />
                IN EVERY<br />
                <span className="text-gradient-orange">PANEL</span>
              </h2>

              <p className="text-white/60 leading-relaxed mb-5">
                Dynamic Windows System, Inc. is a premier facade and glazing contractor
                serving the New York and New Jersey metropolitan area. We specialize in
                delivering high-performance building envelope solutions that combine
                engineering precision with bold architectural vision.
              </p>
              <p className="text-white/60 leading-relaxed mb-10">
                From high-rise curtain walls to custom retail storefronts, our team of
                certified craftsmen and engineers bring exceptional quality to every project —
                no matter the scale or complexity.
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-10">
                {highlights.map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 reveal d-${Math.min(i, 7)}`}
                  >
                    <div className="w-5 h-5 bg-orange/10 border border-orange/60 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-primary">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6 md:px-10 bg-ink-850 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-30 mask-radial" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4 justify-center" style={{ display: 'inline-flex' }}>Our Principles</p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none">
              CORE <span className="text-gradient-orange">VALUES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-700">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`relative bg-ink-900 p-10 group hover:bg-ink-800 transition-all duration-500 overflow-hidden reveal d-${i + 1}`}
              >
                <div className="absolute top-0 right-0 font-heading text-[140px] text-white/[0.02] group-hover:text-orange/10 leading-none transition-colors duration-500 select-none">
                  {v.icon}
                </div>
                <div className="relative">
                  <div className="w-14 h-14 border-2 border-orange flex items-center justify-center mb-6 group-hover:bg-orange transition-colors duration-500">
                    <span className="font-heading text-3xl text-orange group-hover:text-ink-950 transition-colors duration-500">{v.icon}</span>
                  </div>
                  <h3 className="font-heading text-3xl text-white mb-3 group-hover:text-orange transition-colors duration-500">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-orange transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 px-6 md:px-10 bg-ink-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 reveal">
            <p className="section-label mb-4 justify-center" style={{ display: 'inline-flex' }}>Our Journey</p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none">
              <span className="text-gradient-orange">MILESTONES</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange to-transparent" />

            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex items-start gap-6 md:gap-0 pb-16 last:pb-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-orange rounded-full ring-4 ring-ink-900 z-10 mt-2" />

                {/* Spacer for desktop alignment */}
                <div className="hidden md:block flex-1" />

                <div className={`flex-1 pl-14 md:pl-0 ${i % 2 === 0 ? 'md:pl-14' : 'md:pr-14 md:text-right'} reveal ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
                  <div className="glass-panel p-8 group hover:border-orange/40 transition-all duration-500">
                    <div className="font-heading text-4xl text-orange mb-2">{m.year}</div>
                    <h3 className="font-heading text-2xl text-white mb-2">{m.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 md:px-10 bg-orange relative overflow-hidden">
        <div className="absolute inset-0 bg-sheen bg-[length:300%_100%] animate-sheen opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: '20+', l: 'Years Experience' },
              { n: '100+', l: 'Completed Projects' },
              { n: '75+', l: 'Dedicated Team' },
              { n: '24/7', l: 'Project Support' },
            ].map((s, i) => (
              <div key={s.l} className={`reveal d-${i + 1}`}>
                <div className="font-heading text-6xl md:text-7xl text-ink-950 leading-none mb-2">{s.n}</div>
                <div className="text-ink-950/80 text-xs tracking-[0.3em] uppercase font-semibold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 md:px-10 bg-ink-950 relative overflow-hidden">
        <div className="absolute inset-0 drift-grid opacity-40 mask-radial" />
        <div className="max-w-5xl mx-auto text-center relative reveal">
          <h2 className="font-heading text-5xl md:text-7xl text-white leading-none mb-8">
            LET'S BUILD YOUR<br /><span className="text-gradient-orange">NEXT PROJECT</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every great building starts with a conversation. Let's talk about yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
            <Link to="/projects" className="btn-outline">See Our Work</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
