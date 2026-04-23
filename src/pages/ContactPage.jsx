import { useState } from 'react'
import { supabase } from '../lib/supabase'

const serviceOptions = [
  'Curtain Wall & Storefront',
  'Metal Panel Fabrication',
  'Commercial Window & Door',
  'Waterproofing',
  'Fire-Rated Glass & Skylights',
  'Retail Glass & Framing',
  'GFRC Panels & Railings',
  'Other / General Inquiry',
]

const contactCards = [
  {
    title: 'Main Office',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    content: ['560 Sylvan Ave, Suite 3240', 'Englewood Cliffs, NJ 07632'],
    link: 'https://www.google.com/maps/search/?api=1&query=560+Sylvan+Ave+Englewood+Cliffs+NJ+07632',
    linkLabel: 'Get Directions',
  },
  {
    title: 'Phone',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.25 1.12a11 11 0 005.52 5.52l1.12-2.25a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
      </svg>
    ),
    content: ['+1 (201) 408-2134'],
    link: 'tel:+12014082134',
    linkLabel: 'Call Now',
  },
  {
    title: 'Email',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    content: ['info@dynamicwindowssystem.com'],
    link: 'mailto:info@dynamicwindowssystem.com',
    linkLabel: 'Send Email',
  },
  {
    title: 'Hours',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: ['Mon–Fri: 6:30am – 11pm', 'Sat–Sun: 7:00am – 11pm'],
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    if (!supabase) {
      setSubmitting(false)
      setError("Form is temporarily unavailable — please email us directly.")
      return
    }

    const { error: insertError } = await supabase
      .from('contact_submissions')
      .insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        company: form.company || null,
        service: form.service || null,
        message: form.message,
      })

    setSubmitting(false)

    if (insertError) {
      setError("Couldn't send your message — please try again or email us directly.")
      return
    }
    setSubmitted(true)
  }

  return (
    <main className="pt-28 md:pt-32">
      {/* Hero banner */}
      <section className="relative py-24 md:py-28 px-6 md:px-10 overflow-hidden bg-ink-850 border-b border-ink-700">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange" />
        <div className="absolute inset-0 drift-grid opacity-40 mask-fade-b" />

        <div className="max-w-7xl mx-auto relative">
          <p className="section-label mb-5 animate-fade-in">Get in Touch</p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[120px] text-white leading-[0.9] animate-slide-right" style={{ opacity: 0 }}>
            LET'S BUILD<br />
            <span className="text-gradient-orange">TOGETHER</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-up" style={{ opacity: 0, animationDelay: '0.4s' }}>
            Have a project, a question, or a vision? We respond to every inquiry within one business day.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-20 px-6 md:px-10 bg-ink-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-700">
            {contactCards.map((card, i) => (
              <div
                key={card.title}
                className={`relative bg-ink-900 p-8 group hover:bg-ink-800 transition-all duration-500 overflow-hidden reveal d-${i + 1}`}
              >
                <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-orange transition-all duration-700" />

                <div className="w-12 h-12 border border-orange/40 group-hover:bg-orange text-orange group-hover:text-ink-950 flex items-center justify-center mb-5 transition-all duration-500">
                  {card.icon}
                </div>
                <h3 className="font-heading text-xl text-white mb-3 tracking-wider">{card.title}</h3>
                {card.content.map((line) => (
                  <p key={line} className="text-white/60 text-sm leading-relaxed">{line}</p>
                ))}
                {card.link && (
                  <a
                    href={card.link}
                    target={card.link.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-orange hover:text-orange-light text-[11px] tracking-[0.25em] uppercase font-semibold group/link"
                  >
                    {card.linkLabel}
                    <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info split */}
      <section className="pb-20 px-6 md:px-10 bg-ink-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-ink-600 overflow-hidden">
            {/* Left info */}
            <div className="lg:col-span-2 bg-orange p-10 md:p-14 relative overflow-hidden">
              <div className="absolute inset-0 bg-sheen bg-[length:300%_100%] animate-sheen opacity-30" />
              <div className="relative">
                <p className="text-ink-950/70 text-[10px] tracking-[0.35em] uppercase font-semibold mb-4">
                  Ready to Get Started
                </p>
                <h2 className="font-heading text-4xl md:text-5xl text-ink-950 leading-none mb-6">
                  SEND US A<br />MESSAGE
                </h2>
                <p className="text-ink-950/75 text-sm leading-relaxed mb-10">
                  Fill out the form — our team will get back to you within one business day
                  with next steps, scope questions, or a scheduled consultation.
                </p>

                <div className="space-y-5 pt-6 border-t border-ink-950/20">
                  {[
                    { label: 'Response Time', value: '< 1 Business Day' },
                    { label: 'Quote', value: 'Free, No Obligation' },
                    { label: 'Service Area', value: 'NJ · NY · PA' },
                  ].map((s) => (
                    <div key={s.label} className="flex items-start gap-4">
                      <svg className="w-5 h-5 text-ink-950 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="text-ink-950/60 text-[9px] tracking-[0.3em] uppercase font-semibold">{s.label}</div>
                        <div className="text-ink-950 text-sm font-semibold">{s.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-3 bg-ink-850 p-10 md:p-14">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-scale-in">
                  <div className="w-20 h-20 border-2 border-orange flex items-center justify-center mb-6 shadow-orange-glow">
                    <svg className="w-10 h-10 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-4xl text-white mb-3">Message Received</h3>
                  <p className="text-white/60 text-sm max-w-sm">
                    Thank you, {form.name || 'friend'}! We'll be in touch within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' })
                    }}
                    className="btn-primary mt-10"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Full Name *" name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" />
                    <Field label="Email *" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" />
                    <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (201) 000-0000" />
                    <Field label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Your Company Name" />
                  </div>

                  <div>
                    <label className="block text-[10px] text-white/40 tracking-[0.25em] uppercase mb-2 font-semibold">Service Needed</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-ink-700 border border-ink-600 focus:border-orange text-white text-sm px-4 py-3.5 outline-none transition-colors duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-ink-700">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} className="bg-ink-700">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] text-white/40 tracking-[0.25em] uppercase mb-2 font-semibold">Project Details *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Describe your project — location, scope, timeline, and any specific requirements..."
                      className="w-full bg-ink-700 border border-ink-600 focus:border-orange text-white text-sm px-4 py-3.5 outline-none transition-colors duration-200 placeholder:text-white/20 resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input type="checkbox" id="consent" required className="mt-1 w-4 h-4 accent-orange" />
                    <label htmlFor="consent" className="text-white/50 text-xs leading-relaxed">
                      I agree to be contacted by Dynamic Windows System regarding my inquiry.
                    </label>
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm border border-red-400/40 bg-red-400/5 px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full text-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="relative bg-ink-950">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          <div className="mb-10 reveal">
            <p className="section-label mb-4">Visit Us</p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none">
              FIND US ON<br /><span className="text-gradient-orange">THE MAP</span>
            </h2>
            <p className="text-white/50 text-sm mt-4 max-w-xl">
              560 Sylvan Ave, Suite 3240 · Englewood Cliffs, NJ 07632
            </p>
          </div>
        </div>

        <div className="relative border-y border-ink-700 reveal">
          {/* Overlay frame accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-orange z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-orange z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-orange z-10 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-orange z-10 pointer-events-none" />

          <iframe
            title="Dynamic Windows System — Office Location"
            src="https://www.google.com/maps?q=560+Sylvan+Ave,+Englewood+Cliffs,+NJ+07632&output=embed"
            width="100%"
            height="520"
            style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1) brightness(0.9)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <div className="text-white/50 text-xs tracking-[0.25em] uppercase mb-1">Headquarters</div>
            <p className="text-white text-lg font-semibold">560 Sylvan Ave, Suite 3240, Englewood Cliffs, NJ</p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=560+Sylvan+Ave+Englewood+Cliffs+NJ+07632"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>
    </main>
  )
}

function Field({ label, name, value, onChange, type = 'text', required, placeholder }) {
  return (
    <div>
      <label className="block text-[10px] text-white/40 tracking-[0.25em] uppercase mb-2 font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-ink-700 border border-ink-600 focus:border-orange text-white text-sm px-4 py-3.5 outline-none transition-colors duration-200 placeholder:text-white/20"
      />
    </div>
  )
}
