import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const featured = [
  { name: '646 11th Avenue', location: 'New York, NY', img: '/assets/projects/646-11th-ave.webp', type: 'Curtain Wall' },
  { name: '413 Summit Avenue', location: 'Jersey City, NJ', img: '/assets/projects/413-summit-ave.webp', type: 'Facades & Windows' },
  { name: '30 Park Lane — The Wave', location: 'New Jersey', img: '/assets/projects/30-park-lane.webp', type: 'Curtain Wall System' },
  { name: '600 North Avenue', location: 'New Jersey', img: '/assets/projects/600-north-ave.webp', type: 'Storefront & Glazing' },
  { name: '1 Nassau Street', location: 'New York, NY', img: '/assets/projects/1-nassau-st.webp', type: 'Retail Glass & Framing' },
  { name: 'Great Wolf Lodge', location: 'Multi-State', img: '/assets/projects/great-wolf-lodge.webp', type: 'Commercial Facade' },
]

export default function FeaturedProjects() {
  const [hovered, setHovered] = useState(null)
  const navigate = useNavigate()

  return (
    <section id="projects" className="py-28 px-6 md:px-10 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="section-label mb-4">Our Portfolio</p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-none">
              FEATURED<br />PROJECTS
            </h2>
          </div>
          <button
            onClick={() => navigate('/projects')}
            className="btn-outline self-start md:self-auto"
          >
            View All Projects
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E1E1E]">
          {featured.map((project, i) => (
            <div
              key={project.name}
              className="relative overflow-hidden cursor-pointer group bg-[#0A0A0A]"
              style={{ aspectRatio: '4/3' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate('/projects')}
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay always present */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-orange text-[10px] tracking-[0.25em] uppercase mb-1">{project.type}</div>
                <h3 className="font-heading text-2xl text-white leading-tight">{project.name}</h3>
                <p className="text-white/50 text-xs mt-1">{project.location}</p>
              </div>

              {/* Orange corner accent on hover */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[0px] border-r-[0px] group-hover:border-t-[60px] group-hover:border-r-[60px] border-t-orange border-r-transparent transition-all duration-300" style={{ borderTopColor: '#F07A10', borderRightColor: 'transparent' }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border border-[#242424] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="section-label mb-2">Bold Visions, Expertly Built</p>
            <h3 className="font-heading text-3xl md:text-4xl text-white">
              EVERY PROJECT TELLS A STORY
            </h3>
          </div>
          <button onClick={() => navigate('/projects')} className="btn-primary flex-shrink-0">
            See Full Portfolio →
          </button>
        </div>
      </div>
    </section>
  )
}
