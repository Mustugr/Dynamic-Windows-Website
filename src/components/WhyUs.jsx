const reasons = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 20l6 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Certified Excellence',
    description: 'Our team holds industry certifications and follows AAMA, ASTM, and local building code standards on every project.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M6 34L20 6l14 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 24h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Precision Engineering',
    description: 'Every measurement, every panel, every seal is executed with exacting precision to ensure long-term performance.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="10" width="28" height="22" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 10V6h12v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="18" x2="26" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="23" x2="22" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Turnkey Solutions',
    description: 'From design consultation and fabrication through installation and sign-off — we handle every phase in-house.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="14" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Dedicated Team',
    description: 'A single point of contact manages your project from kickoff to completion, keeping you informed every step.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 4l3.09 9.51H33l-8 5.82 3.09 9.51L20 23.06l-8.09 5.78L15 19.33 7 13.51h9.91L20 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Proven Track Record',
    description: 'Over 100 successfully completed commercial and residential projects across New York and New Jersey.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 6v28M6 20h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Competitive Pricing',
    description: 'We deliver premium-quality facade systems at competitive rates, ensuring the best value for your investment.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-28 px-6 md:px-10 bg-[#0D0D0D] relative overflow-hidden">
      {/* Decorative orange accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Why Choose Us</p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none">
            THE DYNAMIC<br />DIFFERENCE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E1E1E]">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-[#0D0D0D] p-8 group hover:bg-[#131313] transition-colors duration-300 relative"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-orange/50 group-hover:text-orange transition-colors duration-300 mb-5">
                {reason.icon}
              </div>
              <h3 className="font-heading text-2xl text-white mb-3">{reason.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
