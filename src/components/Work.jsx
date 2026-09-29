import { useState } from 'react'
import Section from './SectionHead.jsx'
import FeaturedProject from './FeaturedProject.jsx'
import { projects, filters, profile } from '../data.js'

export default function Work() {
  const [filter, setFilter] = useState('all')
  const shown = projects.filter((p) => filter === 'all' || p.cats.includes(filter))

  return (
    <Section id="work" index="02" label="Work" title="Selected work" alt>
      <FeaturedProject />

      <div className="projects-bar">
        <h3>More projects</h3>
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f.id} className={filter === f.id ? 'active' : ''} aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="projects">
        {shown.map((p) => (
          <a className="project" key={p.name} href={p.live ?? `${profile.github}/${p.repo}`} target="_blank" rel="noopener">
            <div className="project-top">
              <h4>{p.name}</h4>
              <span className="arrow" aria-hidden="true">↗</span>
            </div>
            <p>{p.text}</p>
            <div className="project-meta">
              <span><i style={{ background: p.lang.color }} />{p.lang.label}</span>
              {p.live && <span className="live">Live</span>}
            </div>
          </a>
        ))}
      </div>

      <a className="text-link" href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener">
        All repositories on GitHub ↗
      </a>
    </Section>
  )
}
