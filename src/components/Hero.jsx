import { Link } from 'react-router-dom'
import BuildingAnimation from './BuildingAnimation'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background layer: blueprint grid + photo + gradient */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-bg.webp"
          alt=""
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/90 to-ink-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/40" />
        <div className="absolute inset-0 drift-grid opacity-50 mask-fade-b" />
      </div>

      {/* Orange spotlight */}
      <div className="absolute top-1/3 -left-20 w-[600px] h-[600px] bg-orange/15 rounded-full blur-3xl animate-pulse-slow" />

      {/* Orange vertical line accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-orange to-transparent hidden lg:block" />

      {/* Live badge */}
      <div className="absolute top-32 right-10 hidden lg:flex items-center gap-3 glass-panel px-4 py-2.5 animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
        </span>
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/70">Now Building · 2026</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-52 w-full">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          {/* Left: copy */}
          <div>
            <p className="section-label mb-6 animate-fade-in">
              Facade & Glazing Specialists · NJ & NY
            </p>

            <h1 className="font-heading text-[64px] sm:text-[84px] md:text-[104px] lg:text-[120px] leading-[0.88] text-white mb-8">
              <span className="block animate-slide-right" style={{ animationDelay: '0.1s', opacity: 0 }}>BUILT TO</span>
              <span className="block text-gradient-orange animate-slide-right" style={{ animationDelay: '0.25s', opacity: 0 }}>PERFORM.</span>
              <span className="block animate-slide-right" style={{ animationDelay: '0.4s', opacity: 0 }}>DESIGNED TO</span>
              <span className="block animate-slide-right" style={{ animationDelay: '0.55s', opacity: 0 }}>
                ELEVATE
                <span className="text-orange animate-blink">.</span>
              </span>
            </h1>

            <p className="text-white/60 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light animate-fade-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
              High-precision curtain walls, storefronts, windows, and façade systems
              for modern commercial and residential buildings — engineered for performance,
              crafted to last.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '1s', opacity: 0 }}>
              <Link to="/projects" className="btn-primary">
                Explore Projects
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-outline">
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Right: animated building */}
          <div className="hidden lg:block animate-fade-in-slow" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="relative h-[560px] w-full">
              <BuildingAnimation className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-ink-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { number: '20+', label: 'Years Experience' },
              { number: '100+', label: 'Projects Completed' },
              { number: '7', label: 'Expert Services' },
              { number: 'NJ · NY', label: 'Service Area' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="relative py-7 px-6 md:px-10 text-center border-r border-white/8 last:border-r-0 group hover:bg-orange/5 transition-colors duration-500"
              >
                <div className="font-heading text-3xl md:text-4xl text-orange tracking-wider count-pop" style={{ animationDelay: `${1.2 + i * 0.1}s` }}>
                  {stat.number}
                </div>
                <div className="text-white/50 text-[10px] tracking-[0.25em] uppercase mt-1.5">
                  {stat.label}
                </div>
                <div className="absolute bottom-0 left-0 h-px bg-orange w-0 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-32 right-10 z-10 hidden lg:flex flex-col items-center gap-3 animate-float">
        <span className="text-white/40 text-[9px] tracking-[0.4em] uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="w-px h-14 bg-gradient-to-b from-orange to-transparent" />
        <div className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse" />
      </div>
    </section>
  )
}
