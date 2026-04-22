const items = [
  'Curtain Wall Systems',
  'Storefront Glazing',
  'Metal Panel Fabrication',
  'Commercial Windows',
  'Waterproofing',
  'Fire-Rated Glass',
  'Skylights',
  'GFRC Panels',
  'Glass Railings',
  'Custom Fabrication',
]

export default function MarqueeStrip() {
  const doubled = [...items, ...items]
  return (
    <div className="relative py-6 bg-orange overflow-hidden border-y-2 border-ink-950">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 mx-6 flex-shrink-0">
            <span className="font-heading text-3xl md:text-4xl text-ink-950 tracking-wider">{item}</span>
            <svg className="w-6 h-6 text-ink-950/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}
