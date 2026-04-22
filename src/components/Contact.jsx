import { useState } from 'react'

const services = [
  'Curtain Wall & Storefront',
  'Metal Panel Fabrication',
  'Commercial Window & Door',
  'Waterproofing',
  'Fire-Rated Glass & Skylights',
  'Retail Glass & Framing',
  'GFRC Panels & Railings',
  'Other / General Inquiry',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production connect to a backend / email service
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 px-6 md:px-10 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-[#242424]">

          {/* Left info panel */}
          <div className="lg:col-span-2 bg-orange p-10 md:p-14 flex flex-col justify-between">
            <div>
              <p className="text-[#0A0A0A]/70 text-[10px] tracking-[0.35em] uppercase font-semibold mb-4">
                Contact Us
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-[#0A0A0A] leading-none mb-8">
                LET'S BUILD<br />SOMETHING<br />GREAT
              </h2>
              <p className="text-[#0A0A0A]/70 text-sm leading-relaxed mb-10">
                Ready to start your next project? Fill out the form and our team will
                get back to you within one business day.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-[#0A0A0A]/50 text-[9px] tracking-[0.3em] uppercase font-semibold mb-1">Address</div>
                <p className="text-[#0A0A0A] text-sm font-medium">
                  560 Sylvan Ave, Suite 3240<br />
                  Englewood Cliffs, NJ 07632
                </p>
              </div>
              <div>
                <div className="text-[#0A0A0A]/50 text-[9px] tracking-[0.3em] uppercase font-semibold mb-1">Phone</div>
                <a href="tel:+12014082134" className="text-[#0A0A0A] text-sm font-medium hover:text-[#0A0A0A]/70 transition-colors">
                  +1 201 408 2134
                </a>
              </div>
              <div>
                <div className="text-[#0A0A0A]/50 text-[9px] tracking-[0.3em] uppercase font-semibold mb-1">Email</div>
                <a href="mailto:info@dynamicwindowssystem.com" className="text-[#0A0A0A] text-sm font-medium hover:text-[#0A0A0A]/70 transition-colors break-all">
                  info@dynamicwindowssystem.com
                </a>
              </div>
              <div>
                <div className="text-[#0A0A0A]/50 text-[9px] tracking-[0.3em] uppercase font-semibold mb-1">Hours</div>
                <p className="text-[#0A0A0A] text-sm font-medium">
                  Mon–Fri: 6:30am – 11pm<br />
                  Sat–Sun: 7:00am – 11pm
                </p>
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="lg:col-span-3 bg-[#0F0F0F] p-10 md:p-14">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 border border-orange flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-3xl text-white mb-3">Message Received</h3>
                <p className="text-white/50 text-sm">Thank you! We'll be in touch within one business day.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary mt-8"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] text-white/40 tracking-[0.25em] uppercase mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-orange text-white text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-white/40 tracking-[0.25em] uppercase mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-orange text-white text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-white/40 tracking-[0.25em] uppercase mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (201) 000-0000"
                      className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-orange text-white text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-white/40 tracking-[0.25em] uppercase mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-orange text-white text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-white/40 tracking-[0.25em] uppercase mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-orange text-white text-sm px-4 py-3 outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="" className="bg-[#1A1A1A]">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#1A1A1A]">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-white/40 tracking-[0.25em] uppercase mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project — location, scope, timeline, and any specific requirements..."
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-orange text-white text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-white/20 resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-center">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
