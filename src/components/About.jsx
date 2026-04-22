const highlights = [
  'Licensed & Fully Insured',
  'Code-Compliant Systems',
  'Custom Fabrication',
  'Certified Installers',
  'Energy-Efficient Solutions',
  'On-Time Delivery',
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-10 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Image Block */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="/assets/about-bg.webp"
                alt="Dynamic Windows System precision glazing"
                className="w-full h-[520px] object-cover object-center"
              />
              {/* Overlapping orange frame */}
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-orange z-0" />
              <div className="absolute -top-5 -left-5 w-20 h-20 border border-orange z-0" />
            </div>

            {/* Experience badge */}
            <div className="absolute bottom-8 -right-0 lg:-right-8 bg-[#0A0A0A] border border-[#242424] px-8 py-6 z-10">
              <div className="font-heading text-5xl text-orange leading-none">20+</div>
              <div className="text-white/50 text-xs tracking-[0.2em] uppercase mt-1">Years of Excellence</div>
            </div>
          </div>

          {/* Text Block */}
          <div>
            <p className="section-label mb-4">About the Company</p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-8">
              PRECISION<br />IN EVERY<br />PANEL
            </h2>

            <p className="text-white/55 leading-relaxed mb-5 text-sm md:text-base">
              Dynamic Windows System, Inc. is a premier facade and glazing contractor
              serving the New York and New Jersey metropolitan area. We specialize in
              delivering high-performance building envelope solutions that combine
              engineering precision with bold architectural vision.
            </p>
            <p className="text-white/55 leading-relaxed mb-10 text-sm md:text-base">
              From high-rise curtain walls to custom retail storefronts, our team of
              certified craftsmen and engineers bring exceptional quality to every project —
              no matter the scale or complexity. We are committed to delivering on time,
              on budget, and above expectations.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-orange/10 border border-orange/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact info strip */}
            <div className="border-t border-[#242424] pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-white/30 text-[10px] tracking-[0.25em] uppercase mb-1">Phone</div>
                <a href="tel:+12014082134" className="text-white hover:text-orange transition-colors text-sm font-medium">
                  +1 201 408 2134
                </a>
              </div>
              <div>
                <div className="text-white/30 text-[10px] tracking-[0.25em] uppercase mb-1">Email</div>
                <a href="mailto:info@dynamicwindowssystem.com" className="text-white hover:text-orange transition-colors text-sm font-medium break-all">
                  info@dynamicwindowssystem.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
