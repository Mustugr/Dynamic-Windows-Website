const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="4" width="18" height="18" stroke="currentColor" strokeWidth="2"/>
        <rect x="26" y="4" width="18" height="18" stroke="currentColor" strokeWidth="2"/>
        <rect x="4" y="26" width="18" height="18" stroke="currentColor" strokeWidth="2"/>
        <rect x="26" y="26" width="18" height="18" stroke="currentColor" strokeWidth="2"/>
        <line x1="22" y1="0" x2="22" y2="48" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
        <line x1="0" y1="22" x2="48" y2="22" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
      </svg>
    ),
    title: 'Curtain Wall & Storefront',
    description:
      'Non-structural exterior cladding with large glass expanses for maximum natural light and sleek architectural aesthetics.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M4 12 L24 4 L44 12 L44 36 L24 44 L4 36 Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 12 L24 20 L44 12" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 20 L24 44" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 8 L14 28" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <path d="M34 8 L34 28" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      </svg>
    ),
    title: 'Metal Panel Fabrication',
    description:
      'Custom architectural metal panels crafted for durability, thermal performance, and striking modern aesthetics.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="6" width="36" height="36" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="6" y="6" width="16" height="36" stroke="currentColor" strokeWidth="2"/>
        <line x1="14" y1="6" x2="14" y2="42" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
        <line x1="6" y1="24" x2="22" y2="24" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="22" cy="24" r="2" fill="currentColor"/>
        <path d="M38 18 L38 30" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Commercial Window & Door Systems',
    description:
      'High-performance entry systems engineered to meet the most stringent energy efficiency and safety standards.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 4 C24 4 8 18 8 30 A16 16 0 0 0 40 30 C40 18 24 4 24 4Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 16 C24 16 16 24 16 30 A8 8 0 0 0 32 30 C32 24 24 16 24 16Z" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <path d="M24 34 L24 44" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 44 L30 44" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Waterproofing Solutions',
    description:
      'Advanced moisture protection systems safeguarding building exteriors and façade joints against water infiltration.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 28 C20 22 28 20 28 14 C28 10 25 8 24 8 C23 8 20 10 20 14 C20 18 24 20 24 24" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        <path d="M16 40 L32 40" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 8 L40 8 L40 14 L8 14 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
    title: 'Fire-Rated Glass & Skylights',
    description:
      'Certified fire-rated glazing systems and custom skylights that maintain code compliance without compromising design.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M4 36 L4 22 L24 10 L44 22 L44 36" stroke="currentColor" strokeWidth="2"/>
        <rect x="10" y="24" width="10" height="12" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="28" y="24" width="10" height="12" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="4" y1="36" x2="44" y2="36" stroke="currentColor" strokeWidth="2"/>
        <line x1="24" y1="10" x2="24" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      </svg>
    ),
    title: 'Retail Glass, Trim & Framing',
    description:
      'Premium storefronts with precision-crafted metal details, architectural trim, and high-security framing solutions.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="30" width="40" height="4" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="8" y1="30" x2="8" y2="18" stroke="currentColor" strokeWidth="2"/>
        <line x1="18" y1="30" x2="18" y2="18" stroke="currentColor" strokeWidth="2"/>
        <line x1="28" y1="30" x2="28" y2="18" stroke="currentColor" strokeWidth="2"/>
        <line x1="38" y1="30" x2="38" y2="18" stroke="currentColor" strokeWidth="2"/>
        <line x1="4" y1="18" x2="44" y2="18" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 42 L14 34 M34 42 L38 34" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <rect x="14" y="8" width="20" height="10" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      </svg>
    ),
    title: 'GFRC Panels, Glass Railings & Balconies',
    description:
      'Lightweight glass fiber reinforced concrete panels combined with structural glass railings for elegant façade solutions.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 md:px-10 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="section-label mb-4">What We Do</p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none">
              OUR SERVICES
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm leading-relaxed">
            Comprehensive building envelope solutions delivered with precision,
            craftsmanship, and unwavering commitment to quality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#1E1E1E]">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="bg-[#0A0A0A] p-8 group hover:bg-[#111111] transition-colors duration-300 relative overflow-hidden"
            >
              {/* Orange hover line */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-orange transition-all duration-500" />

              <div className="text-white/30 group-hover:text-orange transition-colors duration-300 mb-6">
                {service.icon}
              </div>

              <div className="text-white/20 font-heading text-6xl absolute top-4 right-4 select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              <h3 className="font-heading text-2xl text-white mb-3 leading-tight group-hover:text-orange transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}

          {/* CTA tile */}
          <div className="bg-orange p-8 flex flex-col justify-between group cursor-pointer hover:bg-orange-dark transition-colors duration-300">
            <div className="font-heading text-[#0A0A0A] text-3xl leading-tight">
              HAVE A PROJECT IN MIND?
            </div>
            <div className="flex items-center gap-3 mt-8">
              <span className="text-[#0A0A0A] font-semibold text-xs tracking-widest uppercase">Get a Free Quote</span>
              <svg className="w-5 h-5 text-[#0A0A0A] group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
